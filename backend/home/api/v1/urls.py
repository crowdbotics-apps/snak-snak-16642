from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MessageViewSet, PhoneNumberVerifyAPI, SMSCodeAPI, SignupAPI

from home.api.v1.viewsets import (
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet,
)

router = DefaultRouter()
router.register("customtext", CustomTextViewSet)
router.register("homepage", HomePageViewSet)
router.register("message", MessageViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("get-sms-code/", SMSCodeAPI.as_view(), name="get-code"),
    path("verify-phone/", PhoneNumberVerifyAPI.as_view(), name="verify"),
    path("signup/", SignupAPI.as_view(), name="signup"),
]
