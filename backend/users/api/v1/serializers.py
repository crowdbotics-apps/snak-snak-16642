from django.contrib.auth import get_user_model
from rest_framework import serializers
from users.models import ProfileImages, Settings

User = get_user_model()


class Base64ImageField(serializers.ImageField):

    def to_internal_value(self, data):

        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        # Check if this is a base64 string
        if isinstance(data, six.string_types):
            # Check if the base64 string is in the "data:" format
            if 'data:' in data and ';base64,' in data:
                # Break out the header from the base64 content
                header, data = data.split(';base64,')

            # Try to decode the file. Return validation error if it fails.
            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            # Generate file name:
            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            # Get the file name extension:
            file_extension = self.get_file_extension(file_name, decoded_file)

            complete_file_name = "%s.%s" % (file_name, file_extension, )

            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr
        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension


class ProfileImageSerializer(serializers.ModelSerializer):
    image = Base64ImageField(max_length=None, use_url=True)

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
