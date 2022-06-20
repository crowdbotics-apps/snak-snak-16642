from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from fcm_django.api.rest_framework import FCMDeviceAuthorizedViewSet

from core.viewsets import (
    # ChatGroupViewSet,
)

router = DefaultRouter()
# router.register("chatgroup",                    ChatGroupViewSet,                   basename="chatgroup")



