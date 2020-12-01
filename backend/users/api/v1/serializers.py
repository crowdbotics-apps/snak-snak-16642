from django.contrib.auth import get_user_model
from rest_framework import serializers
from users.models import ProfileImages, Settings

User = get_user_model()


class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileImages
        fields = ('image',)


class UserProfileSerializer(serializers.ModelSerializer):
    user_profile_image = ProfileImageSerializer(many=True)

    class Meta:
        model = User
        fields = ("name", "gender", "birthday", "gender_preference", "available_to", "preference_time", "career_field",
                  "phone_number", "user_profile_image")

    def create(self, validated_data):
        profile_images = validated_data.pop('user_profile_image')
        user_profile = User.objects.create(**validated_data)
        Settings.objects.create(user=user_profile)
        for image in profile_images:
            ProfileImages.objects.create(user=user_profile, **image)
        return user_profile


class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = ('notify_snak_invites', 'notify_meeting_reminder', 'notify_canceled_meeting', 'notify_deleted_meeting',
                  'notify_meeting_update', 'hide_your_profile')
