from django.contrib.auth import get_user_model
from django.http import Http404
from rest_framework import status, filters
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from users.api.v1.serializers import UserProfileSerializer, UserSettingsSerializer
from users.models import Settings, JobFields

User = get_user_model()


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

    def post(self, request, format=None):
        user_jobs = JobFields.objects.filter(job_field__in=request.data.get('jobs'))
        users_id = list(user_jobs.values_list("user__id", flat=True))
        users = User.objects.filter(id__in=users_id)
        serializer = UserProfileSerializer(users, many=True)
        return Response(serializer.data)
