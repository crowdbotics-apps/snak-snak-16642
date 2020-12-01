from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse

from snak_snak_16642.storage_backends import PrivateMediaStorage
from users.choices import GENDER, GENDER_PREFERENCE, AVAILABLE_TO, PREFERENCE_TIME


class User(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    gender = models.CharField(choices=GENDER, default=None, max_length=6)
    birthday = models.DateField(null=True)
    gender_preference = models.CharField(choices=GENDER_PREFERENCE, default=None, max_length=6)
    available_to = models.CharField(choices=AVAILABLE_TO, default=None, max_length=6)
    preference_time = models.CharField(choices=PREFERENCE_TIME, default=None, max_length=6)
    career_field = models.CharField(max_length=60, null=True)
    phone_number = models.CharField(null=True, max_length=15)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class ProfileImages(models.Model):
    image = models.ImageField(storage=PrivateMediaStorage())
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='user_profile_image')


class Settings(models.Model):
    notify_snak_invites = models.BooleanField(default=True)
    notify_meeting_reminder = models.BooleanField(default=True)
    notify_canceled_meeting = models.BooleanField(default=True)
    notify_deleted_meeting = models.BooleanField(default=True)
    notify_meeting_update = models.BooleanField(default=True)
    hide_your_profile = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
