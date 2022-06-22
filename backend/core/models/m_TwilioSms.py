from django.db import models
# from phonenumber_field.modelfields import PhoneNumberField
from twilio.base.exceptions import TwilioRestException
from twilio.rest import Client
import os

# from django.core.exceptions import ObjectDoesNotExist
# from django.utils.translation import gettext_lazy
# from phonenumber_field.validators import validate_international_phonenumber

from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class TwilioSms(models.Model):
    # from_phone                      = PhoneNumberField      ()
    # to_phone                        = PhoneNumberField      ()
    from_phone                      = models.CharField      (max_length=18)
    to_phone                        = models.CharField      (max_length=18)

    message                         = models.CharField      (max_length=160,)

    send_status                     = models.CharField      (max_length=24, default="created, not sent")

    success                         = models.BooleanField   (default=False,)
    error_status                    = models.TextField      (null=True, blank=True,)
    error_message                   = models.TextField      (null=True, blank=True,)

    created                         = models.DateTimeField  (auto_now_add=True,)
    modified                        = models.DateTimeField  (auto_now=True,)

    # --------------------------------------------------------------------------
    class Meta:
        verbose_name_plural = "TwilioSmss"

    # --------------------------------------------------------------------------
    def __str__(self):
        return_string = "TO: " + str(self.to_phone) + " : " + self.message
        return format(return_string)

    # --------------------------------------------------------------------------
    @classmethod
    def get_account_sid(cls):
        return_value = os.getenv('TWILIO_ACCOUNT_SID', "")
        # return_value = "blue"         # FAKE return_value that will probably generate an error
        # return_value = ""             # EMPTY return_value that will probably generate an error
        # zzz_print("    %-32s: %s" % ("get_account_sid", return_value))
        return return_value

    # --------------------------------------------------------------------------
    @classmethod
    def get_auth_token(cls):
        return_value = os.getenv('TWILIO_AUTH_TOKEN', "")
        # return_value = "blue"         # FAKE return_value that will probably generate an error
        # return_value = ""             # EMPTY return_value that will probably generate an error
        # zzz_print("    %-32s: %s" % ("get_auth_token", return_value))
        return return_value

    # --------------------------------------------------------------------------
    @classmethod
    def get_service_sid(cls):
        return_value = os.getenv('TWILIO_SERVICE_SID', "")
        # return_value = "blue"         # FAKE return_value that will probably generate an error
        # return_value = ""             # EMPTY return_value that will probably generate an error
        # zzz_print("    %-32s: %s" % ("get_service_sid", return_value))
        return return_value

    # --------------------------------------------------------------------------
    @classmethod
    def get_from_phone_number(cls):
        return_value = os.getenv('TWILIO_FROM_PHONE_NUMBER', "")
        # return_value = "blue"         # FAKE return_value that will probably generate an error
        # return_value = ""             # EMPTY return_value that will probably generate an error
        # zzz_print("    %-32s: %s" % ("get_from_phone_number", return_value))
        return return_value

    # --------------------------------------------------------------------------
    def save(self, *args, **kwargs):
        # zzz_print("    %-32s: %s" % ("args", args))
        # zzz_print("    %-32s: %s" % ("kwargs", kwargs))

        # Currently ALL sms messages sent from Fight Unite use same from_phone number
        self.from_phone = TwilioSms.get_from_phone_number()
        super().save(*args, **kwargs)

    # --------------------------------------------------------------------------
    def send_sms(self):
        zzz_print("    %-32s: %s" % ("sending_sms to", str(self.to_phone)))
        zzz_print("    %-32s: %s" % ("sending_sms msg", str(self.message)))
        try:
            twilio_client = Client(TwilioSms.get_account_sid(), TwilioSms.get_auth_token())
            i_msg =  twilio_client.messages.create(
                body  = self.message,
                # from_ = self.from_phone.as_e164,
                # to    = self.to_phone.as_e164
                from_ = self.from_phone,
                to    = self.to_phone
            )

            # zzz_print(i_msg.sid, pretty=True)
            # zzz_print("    %-32s: %s" % ("i_msg.sid", i_msg.sid))
            # zzz_print("    %-32s: %s" % ("i_msg.status", i_msg.status))

            self.send_status = i_msg.status

            # If Failure
            if self.send_status == "undelivered" or self.send_status == "failed":
                self.error_status    = "Error code: " + str(i_msg.error_code)
                self.error_message   = i_msg.error_message
            else:
                self.success = True

        except TwilioRestException as ex:
            self.error_status  = str(type(ex))
            self.error_message = str(ex)
            # zzz_print("    %-32s: %s" % ("error_status", self.error_status))
            # zzz_print("    %-32s: %s" % ("error_message", self.error_message))

        self.save()

