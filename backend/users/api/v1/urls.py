from django.urls import path

from users.api.v1.viewsets import ProfileUpdateView

urlpatterns = [
    path("profile/", ProfileUpdateView.as_view(), name="user_profile"),
]
