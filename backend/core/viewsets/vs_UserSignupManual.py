from rest_framework import authentication
# from home.custom import CustomTokenAuthentication
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from core.serializers import UserSignupManualSerializer, UserSerializer
from zzz_lib.zzz_log import zzz_print

# from rest_framework import permissions

# ******************************************************************************
class UserSignupManualViewSet(viewsets.ModelViewSet):
    serializer_class = UserSignupManualSerializer
    # authentication_classes = (
    #           CustomTokenAuthentication,                  # authentication.TokenAuthentication,
    #     # authentication.SessionAuthentication,
    # )
    http_method_names = ["post"]


    # --------------------------------------------------------------------------
    def create(self, request):
        # zzz_print("    %-32s: %s" % ("UserSignupManualViewSet", "************** create"))
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )

        # Authenticates user in serializer.validate() and passes user back in the validated_data dict.
        # This method does not need serializer.create() and does not trigger it.
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        token, created = Token.objects.get_or_create(user=user)
        if created: zzz_print("    %-32s: %s" % ("TOKEN CREATED", token))
        else:       zzz_print("    %-32s: %s" % ("TOKEN GET", token))

        user_serializer = UserSerializer(user)
        return Response({"key": token.key, "user": user_serializer.data})

