from django.conf import settings
from rest_framework import viewsets, status
from rest_framework import authentication
from rest_framework.views import APIView
from twilio.base.exceptions import TwilioRestException
from django.contrib.auth import get_user_model

from users.api.v1.serializers import UserProfileSerializer
from users.choices import GENDER, GENDER_PREFERENCE, AVAILABLE_TO, PREFERENCE_TIME
from .serializers import MessageSerializer, PhoneNumberVerificationSerializer, \
    SMSCodeSerializer
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from twilio.rest import Client

from home.api.v1.serializers import (
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
)
from home.models import Message, CustomText, HomePage

User = get_user_model()


class SMSCodeAPI(APIView):
    def post(self, request):
        serializer = SMSCodeSerializer(data=request.data)
        if serializer.is_valid():
            client = Client(settings.TWILIP_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
            verify = client.verify.services(settings.TWILIO_SERVICE_SID)
            verify.verifications.create(to=serializer.validated_data["phone_number"], channel='sms')
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PhoneNumberVerifyAPI(APIView):

    def post(self, request):
        serializer = PhoneNumberVerificationSerializer(data=request.data)
        if serializer.is_valid():
            try:
                client = Client(settings.TWILIP_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
                verify = client.verify.services(settings.TWILIO_SERVICE_SID)
                result = verify.verification_checks.create(to=serializer.validated_data["phone_number"], code=serializer.validated_data["token"])
                data = {
                    'error': False if result.status == "approved" else True,
                    'msg': '' if result.status == "approved" else 'Incorrect verification code'
                }

                if result.status == "approved":
                    user = User.objects.filter(phone_number=serializer.validated_data["phone_number"])
                    if user.exists():
                        token, created = Token.objects.get_or_create(user=user.first())
                        data['user_exists'] = True
                        data['auth_token'] = token.key
                        data['user'] = UserProfileSerializer(user.first()).data
                    else:
                        data['user_exists'] = False

            except TwilioRestException:
                data = {
                    'error': True,
                    'msg': 'retry verification'
                }

            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignupAPI(APIView):
    def get(self, request):
        data = {
            "gender": GENDER,
            "gender_preference": GENDER_PREFERENCE,
            "available_to": AVAILABLE_TO,
            "preference_time": PREFERENCE_TIME
        }
        return Response(data)

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutAPI(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class CustomTextViewSet(ModelViewSet):
    serializer_class = CustomTextSerializer
    queryset = CustomText.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class HomePageViewSet(ModelViewSet):
    serializer_class = HomePageSerializer
    queryset = HomePage.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Message.objects.all()
