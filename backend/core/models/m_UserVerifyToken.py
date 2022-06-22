from datetime import timedelta
from django.db import models
from django.utils import timezone
# from phonenumber_field.modelfields import PhoneNumberField
import random
import string

# from django.utils.translation import gettext_lazy

from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class UserVerifyToken(models.Model):
    # phone                           = PhoneNumberField      ()
    phone                           = models.CharField      (max_length=18)
    user                            = models.ForeignKey     ("users.User", null=True, blank=True, on_delete=models.CASCADE, related_name="userverifytoken_user",)
    token                           = models.CharField      (null=True, blank=True, max_length=24,)

    success                         = models.BooleanField   (default=False,)
    error_message                   = models.TextField      (null=True, blank=True,)

    created                         = models.DateTimeField  (auto_now_add=True,)
    modified                        = models.DateTimeField  (auto_now=True,)

    # --------------------------------------------------------------------------
    class Meta:
        # ordering = ['blue'] # Auto sort queries by lowest blue first.
        verbose_name_plural = "UserVerifyTokens"

    # --------------------------------------------------------------------------
    def __str__(self):
        return_string = str(self.id) + " : "
        if self.phone: return_string += " " + str(self.phone)
        if self.token: return_string += " (token = " + self.token + ")"
        return format(return_string)

    # --------------------------------------------------------------------------
    def get_expiry_time_in_minutes(self):
        minutes = self.get_expiry_time_in_seconds()/60
        return minutes

    # --------------------------------------------------------------------------
    def get_expiry_time_in_seconds(self):
        expiry_time_in_seconds = 3600
        # expiry_time_in_seconds = 3
        return expiry_time_in_seconds

    # --------------------------------------------------------------------------
    def has_expired(self):
        TD_expired              = timedelta(seconds=self.get_expiry_time_in_seconds())
        TIME_now                = timezone.now()    # using django timezone
        TIME_to_expire          = self.created + TD_expired
        zzz_print("    %-32s: %s" % ("TD_expired", str(TD_expired)))
        zzz_print("    %-32s: %s" % ("TIME_now", str(TIME_now)))
        zzz_print("    %-32s: %s" % ("TIME_to_expire", str(TIME_to_expire)))

        if (TIME_now >= TIME_to_expire):
            # zzz_print("    %-32s: %s" % ("has_expired", True))
            return True
        else:
            # zzz_print("    %-32s: %s" % ("has_expired", False))
            return False

    # --------------------------------------------------------------------------
    def get_status_tuple(self):
        if self.error_message:
            return (False, "Error_message previously set: " + self.error_message)

        if not self.success:
            self.error_message = "Success was false. Not sure how we got here."
            self.save()
            return (False, self.error_message)

        if self.has_expired():
            self.error_message = "Token has expired."
            self.success = False
            self.save()
            return (False, self.error_message)

        self.error_message = "Token is valid. Returning True and invalidating Token."
        self.success = False
        self.save()
        return (True, self.error_message)

    # --------------------------------------------------------------------------
    def generate_token(self):
        length = 6
        # Adding user.id to end of token to prevent collision between duplicate token values.
        # This creates a unique token value for each user.
        # This works because during save() we invalidate any other existing tokens for the same user.
        return ''.join(random.choices(string.ascii_letters + string.digits, k=length))+str(self.user.id)

    # --------------------------------------------------------------------------
    def save(self, *args, **kwargs):
        # zzz_print("    %-32s: %s" % ("args", args))
        # zzz_print("    %-32s: %s" % ("kwargs", kwargs))

        # Find any existing UserVerifyTokens that exist that are successfull and have same user
        if self.success:
            query_set = UserVerifyToken.objects.filter(success=True,user=self.user)
            # for any found invalidate them by setting success to False and appropriate error message
            for qs in query_set:
                zzz_print("    %-32s: %s" % ("Invalidating existing Token for same user and success is True", qs))
                qs.success = False
                qs.error_message = "Token invalidated during creation of new token for same user."
                qs.save()

            # Finally, generate token
            self.token = self.generate_token()

        super().save(*args, **kwargs)

        if self.success:
            self.send_token_via_sms()

    # --------------------------------------------------------------------------
    def get_user_verification_token_sms_message(self):
        message  = "SnakSnak user verification token: " + str(self.token) + "\n\n"
        message += "It is valid for " + str(int(self.get_expiry_time_in_minutes())) + " minutes."
        return message

    # --------------------------------------------------------------------------
    def send_token_via_sms(self):
        from core.models import TwilioSms

        i_twiliosms = TwilioSms()
        i_twiliosms.to_phone = self.phone
        i_twiliosms.message  = self.get_user_verification_token_sms_message()
        i_twiliosms.save()
        i_twiliosms.send_sms()





