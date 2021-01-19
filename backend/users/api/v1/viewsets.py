from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import Http404
from onesignal_sdk.error import OneSignalHTTPError
from rest_framework import status, filters
from onesignal_sdk.client import Client
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from users.api.v1.serializers import UserProfileSerializer, UserSettingsSerializer, UserInvitation, \
    SubscriptionPlanSerializer, UserSubscriptionSerializer
from users.models import Settings, JobFields, Invitations, Subscription, UserSubscription

User = get_user_model()
client = Client(app_id=settings.APP_ID, rest_api_key=settings.REST_API_KEY, user_auth_key=settings.USER_AUTH_KEY)


class ProfileUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        snippet = self.get_object(self.request.user.pk)
        serializer = UserProfileSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, format=None):
        snippet = self.get_object(self.request.user.pk)
        serializer = UserProfileSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None):
        snippet = self.get_object(self.request.user.pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProfilePublicView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = UserProfileSerializer(snippet)
        return Response(serializer.data)


class UserSettingsView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, user):
        try:
            return Settings.objects.get(user=user)
        except Settings.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        snippet = self.get_object(self.request.user)
        serializer = UserSettingsSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, format=None):
        snippet = self.get_object(self.request.user)
        serializer = UserSettingsSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserSearch(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        user_jobs = JobFields.objects.filter(job_field__in=request.data.get('jobs'))
        users_id = list(user_jobs.values_list("user__id", flat=True))
        users = User.objects.filter(id__in=users_id)
        serializer = UserProfileSerializer(users, many=True)
        return Response(serializer.data)


class UserNotificationId(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user_notify_id = request.data['user_notify_id']
        user = request.user
        user.notify_id = user_notify_id
        user.save()
        return Response(status=status.HTTP_201_CREATED)


class SendUserNotification(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        invited_user = request.data['invited_user_id']
        place = request.data['place']
        date = request.data['date']
        time = request.data['time']
        message = request.data['message']
        check_user = User.objects.filter(id=invited_user)
        if check_user.exists():
            user_notification_id = check_user[0].notify_id
            notification_body = {
                "include_player_ids": [user_notification_id],
                "contents": {"en": "You have received a new invitation."}
            }
            try:
                client.send_notification(notification_body)
                inv = Invitations.objects.create(
                    invited_user=check_user[0],
                    user=request.user,
                    place=place,
                    date=date,
                    time=time,
                    message=message
                )

                serializer = UserInvitation(inv)
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
            except OneSignalHTTPError as e:
                return Response(e.http_response.json(), status=e.status_code)
        return Response({'msg': 'Invited user does not exists'}, status=status.HTTP_404_NOT_FOUND)


class EditUserInvitation(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        invitation_id = request.data['invitation_id']
        place = request.data['place']
        date = request.data['date']
        time = request.data['time']
        check_inv = Invitations.objects.filter(id=invitation_id)
        if check_inv.exists():
            inv = check_inv[0]
            inv.place = place
            inv.date = date
            inv.time = time
            inv.save()
            invitation_user_id = inv.user.notify_id if inv.user != request.user else inv.invited_user.notify_id
            notification_body = {
                "include_player_ids": [invitation_user_id],
                "contents": {"en": "You have an invitation update."}
            }
            try:
                client.send_notification(notification_body)
                serializer = UserInvitation(inv)
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
            except OneSignalHTTPError as e:
                return Response(e.http_response.json(), status=e.status_code)
        return Response({'msg': 'Invitation does not exists'}, status=status.HTTP_404_NOT_FOUND)


class GetInvitationDetails(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        invitation_id = request.data['invitation_id']
        check_inv = Invitations.objects.filter(id=invitation_id)
        if check_inv.exists():
            serializer = UserInvitation(check_inv[0])
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response({'msg': 'Invitation does not exists'}, status=status.HTTP_404_NOT_FOUND)


class AcceptInvitation(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        invitation_id = request.data['invitation_id']

        inv = Invitations.objects.filter(id=invitation_id)

        if inv.exists():
            invitation = inv[0]
            invitation.status = True
            invitation.save()

            notification_body = {
                "include_player_ids": [invitation.user.notify_id],
                "contents": {"en": "{0} has accepted your invitation.".format(invitation.invited_user.get_full_name())}
            }
            try:
                client.send_notification(notification_body)
                return Response({'msg': 'Invitations accepted', 'room_id': invitation.room_id}, status=status.HTTP_201_CREATED)
            except OneSignalHTTPError as e:
                return Response(e.http_response.json(), status=e.status_code)


class Feedback(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        invitation_id = request.data['invitation_id']
        inv = Invitations.objects.filter(id=invitation_id)

        if inv.exists():
            invitation = inv[0]
            invitation.feedback = True
            invitation.save()

            return Response(status=status.HTTP_201_CREATED)
        return Response({'msg': 'Invitation does not exists'}, status=status.HTTP_404_NOT_FOUND)


class SubscriptionPlan(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        subscription = Subscription.objects.all()
        sub_ser = SubscriptionPlanSerializer(subscription, many=True)
        return Response(sub_ser.data, status=status.HTTP_200_OK)


class UserSubscriptionPlan(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        subscription = UserSubscription.objects.filter(user=request.user)
        if subscription.exists():
            subscription_ser = UserSubscriptionSerializer(subscription.first())
            return Response(subscription_ser.data, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'Subscription not found!'}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        sub_plan = request.data['subscription_id']
        check_subscription = UserSubscription.objects.filter(user=request.user)
        if check_subscription.exists():
            user_sub = check_subscription[0]
            user_sub.plan = Subscription.objects.get(id=sub_plan)
            user_sub.save()
            subscription_ser = UserSubscriptionSerializer(user_sub)
        else:
            create_subscription = UserSubscription.objects.create(user=request.user, plan__id=sub_plan)
            subscription_ser = UserSubscriptionSerializer(create_subscription)
        return Response(subscription_ser.data, status=status.HTTP_201_CREATED)
