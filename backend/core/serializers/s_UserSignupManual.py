from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email, complete_signup
from allauth.utils import email_address_exists, generate_unique_username
from django.conf import settings
from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import gettext_lazy
from rest_framework import serializers

from zzz_lib.zzz_log import zzz_print

User = get_user_model()

# ******************************************************************************
class UserSignupManualSerializer(serializers.Serializer):
    phone_number        = serializers.CharField(max_length=300)

    # --------------------------------------------------------------------------
    def _get_request(self):
        # zzz_print("    %-32s: %s" % ("UserSignupManualSerializer", "************** _get_request"))
        request = self.context.get("request")
        if (
            request
            and not isinstance(request, HttpRequest)
            and hasattr(request, "_request")
        ):
            request = request._request
        return request

    # ------------------------------------------------------------------------------
    def validate(self, ordered_data_dict):
        # zzz_print("    %-32s: %s" % ("UserSignupManualSerializer", "************** validate START"))
        # zzz_print("    %-32s: %s" % ("ordered_data_dict", ordered_data_dict))

        try:
            phone_number    = ordered_data_dict.get('phone_number')
            user            = User.objects.get(phone_number=phone_number)
            raise serializers.ValidationError(
                gettext_lazy("A user is already registered with this phone number.")
            )
        except User.DoesNotExist:
            pass

        return ordered_data_dict

    # --------------------------------------------------------------------------
    def create(self, validated_data):
        # zzz_print("    %-32s: %s" % ("UserSignupManualSerializer", "************** create START"))
        # zzz_print("    %-32s: %s" % ("validated_data", validated_data))
        # zzz_print("    %-32s: %s" % ("phone_number", validated_data.get("phone_number")))

        user = User(
            username        = validated_data.get("phone_number"),
            phone_number    = validated_data.get("phone_number"),
        )

        # user.set_password(validated_data.get("password"))
        user.save()
        request = self._get_request()

        # magic allauth methods, which seem to work fine with user signing up with phone number and lacking an email address.
        setup_user_email(request, user, [])
        complete_signup(request, user, settings.ACCOUNT_EMAIL_VERIFICATION, None, None)

        # zzz_print("    %-32s: %s" % ("UserSignupManualSerializer", "************** create END"))
        return user

    # --------------------------------------------------------------------------
    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        # zzz_print("    %-32s: %s" % ("UserSignupManualSerializer", "************** save"))
        return super().save()



