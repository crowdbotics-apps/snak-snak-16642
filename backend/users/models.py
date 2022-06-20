from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from phonenumber_field.modelfields import PhoneNumberField
from users.choices import GENDER_PREFERENCE, SPORTS, EXPERTISE_LEVEL, JOB_FIELD
import uuid

# from snak_snak_16642.storage_backends import PrivateMediaStorage

# ******************************************************************************
class User(AbstractUser):
    name                        = models.CharField          (max_length=200, null=True, blank=True)
    bio                         = models.TextField          (null=True, blank=True)
    occupation                  = models.CharField          (max_length=200, null=True, blank=True)
    expertise_level             = models.CharField          (choices=EXPERTISE_LEVEL, default=None, max_length=20, null=True, blank=True)
    preferred_expertise_level   = models.CharField          (choices=EXPERTISE_LEVEL, default=None, max_length=20, null=True, blank=True)
    gender_preference           = models.CharField          (choices=GENDER_PREFERENCE, default=None, max_length=20, null=True, blank=True)
    phone_number                = PhoneNumberField          (null=True, blank=True)
    age_preferred               = models.IntegerField       (null=True, blank=True)
    distance_preferred          = models.IntegerField       (null=True, blank=True)
    notify_id                   = models.CharField          (max_length=250, null=True, blank=True)

    # --------------------------------------------------------------------------
    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

# ******************************************************************************
class JobFields(models.Model):
    job_field = models.CharField(choices=JOB_FIELD, default=None, max_length=50, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_jobs')

# ******************************************************************************
class ProfileImages(models.Model):
    image = models.ImageField(upload_to='user_profile_pictures')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_profile_image')

# ******************************************************************************
class UserSports(models.Model):
    sports = models.CharField(choices=SPORTS, default=None, max_length=30)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_sports')

# ******************************************************************************
class Settings(models.Model):
    notify_snak_invites = models.BooleanField(default=True)
    notify_meeting_reminder = models.BooleanField(default=True)
    notify_canceled_meeting = models.BooleanField(default=True)
    notify_deleted_meeting = models.BooleanField(default=True)
    notify_meeting_update = models.BooleanField(default=True)
    hide_your_profile = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

# ******************************************************************************
class Invitations(models.Model):
    invited_user = models.ForeignKey(User, related_name='invited_user', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    room_id = models.UUIDField(default=uuid.uuid4, editable=False)
    place = models.CharField(max_length=250, null=True)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    message = models.TextField(null=True)
    feedback = models.BooleanField(default=False)
