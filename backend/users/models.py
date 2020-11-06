from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse

from users.choices import GENDER, GENDER_PREFERENCE, AVAILABLE_TO, PREFERENCE_TIME


class User(AbstractUser):
    name = models.CharField(max_length=200)
    gender = models.CharField(choices=GENDER, default=None, max_length=6)
    birthday = models.DateField()
    gender_preference = models.CharField(choices=GENDER_PREFERENCE, default=None, max_length=6)
    available_to = models.CharField(choices=AVAILABLE_TO, default=None, max_length=6)
    preference_time = models.CharField(choices=PREFERENCE_TIME, default=None, max_length=6)
    career_field = models.CharField(max_length=60)
    phone_number = models.CharField(null=True, max_length=15)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class ProfileImages(models.Model):
    image = models.ImageField(upload_to="media/profile_images")
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
