from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from fcm_django.api.rest_framework import FCMDeviceAuthorizedViewSet

# ******************************************************************************
from core.viewsets import (
    # TwilioSmsViewSet,
    UserLoginManualViewSet,
    UserSignupManualViewSet,
    UserVerifyTokenViewSet,
    UserVerifyTryViewSet,
)

# ******************************************************************************
router = DefaultRouter()
# router.register("twiliosms",                    TwilioSmsViewSet,               basename="twiliosms")
router.register("user_login",                   UserLoginManualViewSet,         basename="userloginmanual")
router.register("user_signup",                  UserSignupManualViewSet,        basename="usersignupmanual")
router.register("validationtoken_generate",     UserVerifyTokenViewSet,         basename="userverifytoken")
router.register("validationtoken_validate",     UserVerifyTryViewSet,           basename="userverifytry")

# ******************************************************************************
urlpatterns = [
    path("", include(router.urls)),
]

