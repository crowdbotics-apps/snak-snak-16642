from rest_framework import authentication
from rest_framework import permissions
from rest_framework import viewsets
# from rest_framework.decorators import action
# from rest_framework.response import Response

from core.custom import CustomTokenAuthentication
from core.models import UserVerifyToken
from core.serializers import UserVerifyTokenSerializer

from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class UserVerifyTokenViewSet(viewsets.ModelViewSet):
    serializer_class = UserVerifyTokenSerializer
    authentication_classes = (
        # CustomTokenAuthentication,                  # authentication.TokenAuthentication,
        # authentication.SessionAuthentication,
    )
    http_method_names = ["post"]

    # --------------------------------------------------------------------------
    def get_queryset(self):
        # queryset = UserVerifyToken.objects.order_by('id')
        queryset = UserVerifyToken.objects.none()
        return queryset

    # --------------------------------------------------------------------------
    def get_permissions(self):
        # self.permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
        # self.permission_classes = [permissions.IsAuthenticated, ]
        self.permission_classes = []
        return super().get_permissions()










