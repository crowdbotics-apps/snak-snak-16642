# from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy
from rest_framework import serializers

from core.models import UserVerifyToken
from zzz_lib.zzz_log import zzz_print

# from django.contrib.auth import authenticate

User = get_user_model()

# ******************************************************************************
class UserVerifyTokenSerializer(serializers.Serializer):
    email_or_phonenumber = serializers.CharField(max_length=300)

    # ------------------------------------------------------------------------------
    def validate(self, ordered_data_dict):
        email_or_phonenumber    = ordered_data_dict.get('email_or_phonenumber')
        # zzz_print("    %-32s: %s" % ("email_or_phonenumber", email_or_phonenumber))

        if User.is_valid_email(email_or_phonenumber):
            ordered_data_dict['mode'] = "email"
        elif User.is_valid_phonenumber(email_or_phonenumber):
            ordered_data_dict['mode'] = "phone"
        else:
            msg = gettext_lazy('Must submit valid email_address or phone_number.')
            raise serializers.ValidationError(msg, code='authorization')
        return ordered_data_dict

        # --------------------------------------------------------------------------
    # SOCIAL LOGINS THAT PROVIDE EMAILS:        APPLE, FACEBOOK, TWITTER
    # SOCIAL LOGINS THAT DO NOT PROVIDE EMAILS: TIKTOK
    def create(self, validated_data):
        # zzz_print("    %-32s: %s" % ("UserVerifyTokenSerializer", "create --- Start"))
        # zzz_print("    %-32s: %s" % ("validated_data", validated_data))
        # zzz_print("    %-32s: %s" % ("self.initial_data", self.initial_data))

        i_userverifytoken = UserVerifyToken()

        if validated_data['mode'] == "email":
            i_userverifytoken.email = User.get_clean_email(validated_data['email_or_phonenumber'])
            try:
                i_userverifytoken.user = User.objects.get(email=i_userverifytoken.email)
            except User.DoesNotExist:
                # zzz_print("    %-32s: %s" % ("user NOT FOUND for email", i_userverifytoken.email))
                pass
        else:
            i_userverifytoken.phone = validated_data['email_or_phonenumber']
            try:
                i_userverifytoken.user = User.objects.get(phone_number=i_userverifytoken.phone)
            except User.DoesNotExist:
                # zzz_print("    %-32s: %s" % ("user NOT FOUND for phone", i_userverifytoken.phone))
                pass

        if i_userverifytoken.user:
            if i_userverifytoken.user.verified == False:
                if i_userverifytoken.user.requires_verification(): i_userverifytoken.success = True
                else:                                              i_userverifytoken.error_message = "User found but login_src does not require verification: " + i_userverifytoken.user.login_src
            else:
                i_userverifytoken.error_message = "User found but is already verified: " + str(i_userverifytoken.user)
        else:
            i_userverifytoken.error_message = "User matching email or phone NOT found"
        i_userverifytoken.save()

        return i_userverifytoken

    # ------------------------------------------------------------------------------
    def to_representation(self, instance):
        ret = {}
        ret['email']            = instance.email
        ret['phone']            = str(instance.phone)
        ret['token']            = instance.token
        ret['success']          = instance.success
        ret['error_message']    = instance.error_message
        ret['created']          = instance.created
        ret['modified']         = instance.modified
        ret['user']             = ""
        if instance.user:
            from home.serializers import UserSerializer
            ret['user']         = instance.user.id
            ret["user_data"]    = UserSerializer(instance.user).data
        return ret






#     # VALID PHONE Number Examples
#     # +16135550175
#     # +16135550177
