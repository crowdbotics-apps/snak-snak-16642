from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from fcm_django.api.rest_framework import FCMDeviceAuthorizedViewSet

# ******************************************************************************
from core.viewsets import (
    TwilioSmsViewSet,
    UserVerifyTokenViewSet,
    UserVerifyTryViewSet,
)

# ******************************************************************************
router = DefaultRouter()
router.register("twiliosms",            TwilioSmsViewSet,           basename="twiliosms")
router.register("userverifytoken",      UserVerifyTokenViewSet,     basename="userverifytoken")
router.register("userverifytry",        UserVerifyTryViewSet,       basename="userverifytry")

# ******************************************************************************
urlpatterns = [
    path("aaa_mmh/",                                                     include(router.urls)),
]

