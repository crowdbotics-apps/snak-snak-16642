from rest_framework import authentication
from core.custom import CustomTokenAuthentication
from rest_framework import permissions
from rest_framework import viewsets

from core.models import TwilioSms
from core.serializers import TwilioSmsSerializer

from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class TwilioSmsViewSet(viewsets.ModelViewSet):
    serializer_class = TwilioSmsSerializer
    authentication_classes = (
        CustomTokenAuthentication,                  # authentication.TokenAuthentication,
        authentication.SessionAuthentication,
    )
    http_method_names = ["get"]

    # --------------------------------------------------------------------------
    def get_queryset(self):
        queryset = TwilioSms.objects.order_by('id')
        return queryset

    # --------------------------------------------------------------------------
    def get_permissions(self):
        # self.permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
        self.permission_classes = [permissions.IsAuthenticated, ]
        return super().get_permissions()




