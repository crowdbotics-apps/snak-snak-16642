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

    # # --------------------------------------------------------------------------
    # def create(self, validated_data):
    #     zzz_print("    %-32s: %s" % ("TwilioSmsSerializer", "create --- Start"))
    #     # zzz_print("    %-32s: %s" % ("validated_data", validated_data))
    #     # zzz_print("    %-32s: %s" % ("self.initial_data", self.initial_data))
    #
    #     i_twiliosms = TwilioSms(**validated_data, from_phone=TwilioSms.get_from_phone_number())
    #     # try:
    #     #     twilio_client = Client(TwilioSms.get_account_sid(), TwilioSms.get_auth_token())
    #     #     i_msg =  twilio_client.messages.create(
    #     #         body  = i_twiliosms.message,
    #     #         from_ = i_twiliosms.from_phone.as_e164,
    #     #         to    = i_twiliosms.to_phone.as_e164
    #     #     )
    #     #
    #     #     # zzz_print(i_msg.sid, pretty=True)
    #     #     # zzz_print("    %-32s: %s" % ("i_msg.sid", i_msg.sid))
    #     #     # zzz_print("    %-32s: %s" % ("i_msg.status", i_msg.status))
    #     #
    #     #     i_twiliosms.send_status = i_msg.status
    #     #
    #     #     # If Failure
    #     #     if i_twiliosms.send_status == "undelivered" or i_twiliosms.send_status == "failed":
    #     #         i_twiliosms.error_status    = "Error code: " + str(i_msg.error_code)
    #     #         i_twiliosms.error_message   = i_msg.error_message
    #     #     else:
    #     #         i_twiliosms.success = True
    #     #
    #     # except TwilioRestException as ex:
    #     #     i_twiliosms.error_status  = str(type(ex))
    #     #     i_twiliosms.error_message = str(ex)
    #     #     zzz_print("    %-32s: %s" % ("error_status", i_twiliosms.error_status))
    #     #     zzz_print("    %-32s: %s" % ("error_message", i_twiliosms.error_message))
    #
    #     i_twiliosms.save()
    #
    #     return i_twiliosms


    # # ------------------------------------------------------------------------------
    # def to_representation(self, instance):
    #     # zzz_print("    %-32s: %s" % ("--------------", "to_representation"))
    #     # from home.serializers import TwilioSmsSerializer
    #     ret = super().to_representation(instance)
    #
    #     # ret["geocodequery_data"] = TwilioSmsSerializer(instance.geocodequery).data
    #     return ret

