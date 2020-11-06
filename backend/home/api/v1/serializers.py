from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
from home.models import Message, CustomText, HomePage

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("name", "gender", "birthday", "gender_preference", "available_to", "preference_time", "career_field",
                  "phone_number")

    def _get_request(self):
        request = self.context.get("request")
        if (
            request
            and not isinstance(request, HttpRequest)
            and hasattr(request, "_request")
        ):
            request = request._request
        return request

    def create(self, validated_data):
        user = User(
            name=validated_data.get("name"),
            gender=validated_data.get("gender"),
            birthday=validated_data.get("birthday"),
            gender_preference=validated_data.get("gender_preference"),
            available_to=validated_data.get("available_to"),
            preference_time=validated_data.get("preference_time"),
            career_field=validated_data.get("career_field"),
            phone_number=validated_data.get("phone_number"),
            username=generate_unique_username(
                [validated_data.get("name"), validated_data.get("email"), "user"]
            ),
        )
        user.save()
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class PhoneNumberVerificationSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=15)
    token = serializers.CharField(max_length=6)

class CustomTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomText
        fields = "__all__"


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "name"]


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""

    password_reset_form_class = ResetPasswordForm


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"
