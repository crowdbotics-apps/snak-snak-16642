from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from fcm_django.api.rest_framework import FCMDeviceAuthorizedViewSet

# ******************************************************************************
from core.viewsets import (
    TwilioSmsViewSet,
)

# ******************************************************************************
router = DefaultRouter()
router.register("twiliosms",            TwilioSmsViewSet,           basename="twiliosms")

# ******************************************************************************
urlpatterns = [
    # path("api/v1/",                                                     include(router.urls)),
    path("aaa_mmh/",                                                     include(router.urls)),
]

