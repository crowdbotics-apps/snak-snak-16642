from django.contrib.auth import get_user_model
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from users.api.v1.serializers import UserProfileSerializer

User = get_user_model()


class ProfileUpdateView(APIView):

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
