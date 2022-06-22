from rest_framework import authentication
# from core.custom import CustomTokenAuthentication
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from core.serializers import UserLoginManualSerializer, UserSerializer
from allauth.account.utils import perform_login
from core.models import UserVerifyToken

from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import action
# from django.db.models import Q
from rest_framework.response import Response
from django.contrib.auth import get_user_model
# from django.contrib.auth import authenticate
from django.contrib.auth import login
User = get_user_model()

from django.conf import settings

from zzz_lib.zzz_log import zzz_print

# from rest_framework import permissions

# ******************************************************************************
class UserLoginManualViewSet(viewsets.ModelViewSet):
    serializer_class = UserLoginManualSerializer
    http_method_names = ["get", "post"]
    # authentication_classes = (
    #       CustomTokenAuthentication,                  # authentication.TokenAuthentication,
    #     # authentication.SessionAuthentication,
    # )

    # --------------------------------------------------------------------------
    def get_queryset(self):
        # queryset = DirectMessage.objects.order_by('id')
        # return queryset
        return []

    # --------------------------------------------------------------------------
    def create(self, request):
        zzz_print("    %-32s: %s" % ("UserLoginManualViewSet", "**************"))
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )

        # Authenticates user in serializer.validate() and passes user back in the validated_data dict.
        # This method does not need serializer.create() and does not trigger it.
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]

        # Create and send UserVerifyToken
        zzz_print("    %-32s: %s" % ("USER LOGGING IN", "--------"))
        zzz_print("    %-32s: %s" % ("user", user))

        i_userverifytoken               = UserVerifyToken()
        i_userverifytoken.user          = user
        i_userverifytoken.phone_number  = user.phone_number
        i_userverifytoken.success       = True
        i_userverifytoken.save()

        token, created = Token.objects.get_or_create(user=user)
        if created: zzz_print("    %-32s: %s" % ("TOKEN CREATED", token))
        else:       zzz_print("    %-32s: %s" % ("TOKEN GET", token))

        user_serializer = UserSerializer(user)
        return Response({"key": token.key, "user": user_serializer.data})

    # --------------------------------------------------------------------------
    @swagger_auto_schema(method='get', operation_summary='login user who used valid verification token')
    @action(methods=('get',), detail=False, url_path='user/(?P<user_id>\S+)', serializer_class=UserSerializer)
    def login_user(self, request, user_id=None):
        zzz_print("    %-32s: %s" % ("login_user", "-----------"))
        zzz_print("    %-32s: %s" % ("user_id", user_id))

        user = User.objects.get(id=user_id)

        # perform_login(request, user, settings.ACCOUNT_EMAIL_VERIFICATION, None, None, False)

        # AUTHENTICATION_BACKENDS = (
        #     "django.contrib.auth.backends.ModelBackend",
        #     "allauth.account.auth_backends.AuthenticationBackend",
        # )
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')

        token, created = Token.objects.get_or_create(user=user)
        if created: zzz_print("    %-32s: %s" % ("TOKEN CREATED", token))
        else:       zzz_print("    %-32s: %s" % ("TOKEN GET", token))

        user_serializer = UserSerializer(user)
        return Response({"key": token.key, "user": user_serializer.data})






