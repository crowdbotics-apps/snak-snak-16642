from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(max_length=150,)

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Message(models.Model):
    "Generated Model"
    match = models.ForeignKey(
        "dating.Match", on_delete=models.CASCADE, related_name="message_match",
    )
    slug = models.SlugField(max_length=50,)
    created = models.DateTimeField(auto_now_add=True,)
    inbox = models.ForeignKey(
        "dating.Inbox",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="message_inbox",
    )
