from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
# from phonenumber_field.modelfields import PhoneNumberField
from users.choices import GENDER_PREFERENCE, SPORTS, EXPERTISE_LEVEL, JOB_FIELD
import uuid

from zzz_lib.zzz_log import zzz_print

# from snak_snak_16642.storage_backends import PrivateMediaStorage

# ******************************************************************************
class User(AbstractUser):
    # phone_number                = PhoneNumberField          (null=True, blank=True)
    phone_number                = models.CharField          (null=True, max_length=15)
    phone_number_verified       = models.BooleanField       (default=False,)

    name                        = models.CharField          (max_length=200, null=True, blank=True)
    bio                         = models.TextField          (null=True, blank=True)
    occupation                  = models.CharField          (max_length=200, null=True, blank=True)
    expertise_level             = models.CharField          (choices=EXPERTISE_LEVEL, default=None, max_length=20, null=True, blank=True)
    preferred_expertise_level   = models.CharField          (choices=EXPERTISE_LEVEL, default=None, max_length=20, null=True, blank=True)
    gender_preference           = models.CharField          (choices=GENDER_PREFERENCE, default=None, max_length=20, null=True, blank=True)
    age_preferred               = models.IntegerField       (null=True, blank=True)
    distance_preferred          = models.IntegerField       (null=True, blank=True)
    notify_id                   = models.CharField          (max_length=250, null=True, blank=True)

    # --------------------------------------------------------------------------
    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

    # --------------------------------------------------------------------------
    def save(self, *args, **kwargs):
        # zzz_print("    %-32s: %s" % ("args", args))
        # zzz_print("    %-32s: %s" % ("kwargs", kwargs))

        new_user = False
        if self.pk is None:
            new_user = True
        super().save(*args, **kwargs)

        if new_user:
            # Create and send UserVerifyToken
            from core.models import UserVerifyToken
            zzz_print("    %-32s: %s" % ("NEW USER", self.phone_number))

            i_userverifytoken               = UserVerifyToken()
            i_userverifytoken.user          = self
            i_userverifytoken.phone_number  = self.phone_number
            i_userverifytoken.success       = True
            i_userverifytoken.save()


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
