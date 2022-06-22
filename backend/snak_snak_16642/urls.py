"""snak_snak_16642 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from allauth.account.views import confirm_email
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("allauth.urls")),

    # MMH: REMOVED UNTIL REVIEWED
    path("", include("home.urls")),


    # MMH: REMOVED UNTIL REVIEWED
    # MMH: CONTAINS: customtext, logout, message, signup, verify-phone,
    path("zzz/api/v1/", include("home.api.v1.urls")),

    # MMH: CONTAINS: all-invitations, edit-invitation, feedback, get-invitation-details, invitation,
    #                notification, profile, public, search, send-notification, settings
    # path("zzz/api/v1/user/", include("users.api.v1.urls")),


    # MMH: CONTAINS:
            # path("~redirect/", view=user_redirect_view, name="redirect"),
            # path("~update/", view=user_update_view, name="update"),
            # path("<str:username>/", view=user_detail_view, name="detail"),
            # path("users/<int:pk>/detail/", UserDetailView.as_view(), name="user_detail"),
            # path("users/<int:pk>/update/", UserUpdateView.as_view(), name="update_user"),
    path("zzz/users/", include("users.urls", namespace="users")),

    path("zzz/rest-auth/", include("rest_auth.urls")),
    # Override email confirm to use allauth's HTML view instead of rest_auth's API view
    path("zzz/rest-auth/registration/account-confirm-email/<str:key>/", confirm_email),
    path("zzz/rest-auth/registration/", include("rest_auth.registration.urls")),

    # # MMH: REMOVED UNTIL REVIEWED
    # # path("zzz/api/v1/", include("dating.api.v1.urls")),
    # # path("zzz/dating/", include("dating.urls")),

    path("core/", include("core.urls")),
]

admin.site.site_header = "Snak Snak"
admin.site.site_title = "Snak Snak Admin Portal"
admin.site.index_title = "Snak Snak Admin"

# swagger
schema_view = get_schema_view(
    openapi.Info(
        title="Snak Snak API",
        default_version="v1",
        description="API documentation for Snak Snak App",
    ),
    public=True,
    # permission_classes=(permissions.BasePermission,),
    permission_classes=(permissions.BasePermission,),
)

urlpatterns += [
    path("api-docs/", schema_view.with_ui("swagger", cache_timeout=0), name="api_docs")
]


