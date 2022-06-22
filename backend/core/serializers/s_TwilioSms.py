from rest_framework import serializers
from core.models import TwilioSms

from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class TwilioSmsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwilioSms
        fields = ['id', 'from_phone', 'to_phone', 'message', 'send_status', 'success', 'error_status', 'error_message', ]
        extra_kwargs = {
            'from_phone'        : {'read_only': True,},
            'to_phone'          : {'required': True,},
            'message'           : {'required': True,},
            'send_status'       : {'read_only': True,},
            'success'           : {'read_only': True,},
            'error_status'      : {'read_only': True,},
            'error_message'     : {'read_only': True,},
        }
