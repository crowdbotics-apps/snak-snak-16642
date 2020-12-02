from django.urls import path

from users.api.v1.viewsets import ProfileUpdateView, ProfilePublicView, UserSettingsView

urlpatterns = [
    path("profile/", ProfileUpdateView.as_view(), name="user_profile"),
    path("public/profile/<int:pk>/", ProfilePublicView.as_view(), name="user_public_profile"),
    path("settings/", UserSettingsView.as_view(), name="user_settings")
]
