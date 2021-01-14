from django.urls import path

from users.api.v1.viewsets import ProfileUpdateView, ProfilePublicView, UserSettingsView, UserSearch, \
    UserNotificationId, SendUserNotification, AcceptInvitation, EditUserInvitation, GetInvitationDetails, Feedback

urlpatterns = [
    path("profile/", ProfileUpdateView.as_view(), name="user_profile"),
    path("public/profile/<int:pk>/", ProfilePublicView.as_view(), name="user_public_profile"),
    path("settings/", UserSettingsView.as_view(), name="user_settings"),
    path("search/", UserSearch.as_view(), name="user_search"),
    path("notification/", UserNotificationId.as_view(), name="notification"),
    path("send-notification/", SendUserNotification.as_view(), name="send_notification"),
    path("accept-invitation/", AcceptInvitation.as_view(), name="accept-invitation"),
    path("edit-invitation/", EditUserInvitation.as_view(), name="edit-invitation"),
    path("get-invitation-details/", GetInvitationDetails.as_view(), name="get-invitation-details"),
    path("feedback/", Feedback.as_view(), name="feedback")
]
