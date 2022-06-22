from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from fcm_django.api.rest_framework import FCMDeviceAuthorizedViewSet

# ******************************************************************************
from core.viewsets import (
    TwilioSmsViewSet,
    UserLoginManualViewSet,
    UserSignupManualViewSet,
    UserVerifyTokenViewSet,
    UserVerifyTryViewSet,
)

# ******************************************************************************
router = DefaultRouter()
router.register("twiliosms",            TwilioSmsViewSet,           basename="twiliosms")
router.register("userloginmanual",      UserLoginManualViewSet,     basename="userloginmanual")
router.register("usersignupmanual",     UserSignupManualViewSet,    basename="usersignupmanual")
router.register("userverifytoken",      UserVerifyTokenViewSet,     basename="userverifytoken")
router.register("userverifytry",        UserVerifyTryViewSet,       basename="userverifytry")

# ******************************************************************************
urlpatterns = [
    path("aaa/",                                                     include(router.urls)),
]

