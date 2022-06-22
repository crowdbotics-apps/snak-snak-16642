from rest_framework import authentication
from rest_framework import permissions
from rest_framework import viewsets
# from rest_framework.decorators import action
# from rest_framework.response import Response

from core.custom import CustomTokenAuthentication
from core.models import UserVerifyTry
from core.serializers import UserVerifyTrySerializer

from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class UserVerifyTryViewSet(viewsets.ModelViewSet):
    serializer_class = UserVerifyTrySerializer
    authentication_classes = (
        # CustomTokenAuthentication,                  # authentication.TokenAuthentication,
        # authentication.SessionAuthentication,
    )
    http_method_names = ["post"]

    # --------------------------------------------------------------------------
    def get_queryset(self):
        # queryset = UserVerifyTry.objects.order_by('id')
        queryset = UserVerifyTry.objects.none()
        return queryset

    # --------------------------------------------------------------------------
    def get_permissions(self):
        # self.permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
        # self.permission_classes = [permissions.IsAuthenticated, ]
        self.permission_classes = []
        return super().get_permissions()










