from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from fcm_django.api.rest_framework import FCMDeviceAuthorizedViewSet

# ******************************************************************************
from core.viewsets import (
    TwilioSmsViewSet,
    UserVerifyTokenViewSet,
    UserVerifyTryViewSet,
    UserSignupManualViewSet,
)

# ******************************************************************************
router = DefaultRouter()
router.register("twiliosms",            TwilioSmsViewSet,           basename="twiliosms")
router.register("userverifytoken",      UserVerifyTokenViewSet,     basename="userverifytoken")
router.register("userverifytry",        UserVerifyTryViewSet,       basename="userverifytry")
router.register("usersignupmanual",     UserSignupManualViewSet,    basename="usersignupmanual")

# ******************************************************************************
urlpatterns = [
    path("aaa/",                                                     include(router.urls)),
]

