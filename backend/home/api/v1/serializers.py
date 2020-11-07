from django.contrib.auth import get_user_model
from allauth.account.forms import ResetPasswordForm
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
from home.models import Message, CustomText, HomePage
from users.models import ProfileImages

User = get_user_model()


class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileImages
        fields = ('image',)


class UserProfileSerializer(serializers.ModelSerializer):
    user_profile_image = ProfileImageSerializer(many=True, )

    class Meta:
        model = User
        fields = ("name", "gender", "birthday", "gender_preference", "available_to", "preference_time", "career_field",
                  "phone_number", 'user_profile_image')

    def create(self, validated_data):
        profile_images = validated_data.pop('user_profile_image')
        user_profile = User.objects.create(**validated_data)
        for image in profile_images:
            ProfileImages.objects.create(user=user_profile, **image)
        return user_profile


class SMSCodeSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=15)


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
