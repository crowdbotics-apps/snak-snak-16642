from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy
from rest_framework import serializers

from core.models import UserVerifyToken
from zzz_lib.zzz_log import zzz_print

User = get_user_model()

# ******************************************************************************
class UserVerifyTokenSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=18, required=True)

    # --------------------------------------------------------------------------
    def create(self, validated_data):
        # zzz_print("    %-32s: %s" % ("UserVerifyTokenSerializer", "create --- Start"))
        # zzz_print("    %-32s: %s" % ("validated_data", validated_data))
        # zzz_print("    %-32s: %s" % ("self.initial_data", self.initial_data))

        i_userverifytoken       = UserVerifyToken()
        i_userverifytoken.phone = validated_data['phone']
        try:
            i_userverifytoken.user = User.objects.get(phone_number=i_userverifytoken.phone)
        except User.DoesNotExist:
            zzz_print("    %-32s: %s" % ("user NOT FOUND for phone", i_userverifytoken.phone))
            pass

        if i_userverifytoken.user:
            if i_userverifytoken.user.phone_number_verified == False:
                i_userverifytoken.success = True
            else:
                i_userverifytoken.error_message = "User found but is already phone_number_verified: " + str(i_userverifytoken.user)
        else:
            i_userverifytoken.error_message = "User matching email or phone NOT found"
        i_userverifytoken.save()

        return i_userverifytoken

    # ------------------------------------------------------------------------------
    def to_representation(self, instance):
        ret = {}
        ret['phone']            = str(instance.phone)
        ret['token']            = instance.token
        ret['success']          = instance.success
        ret['error_message']    = instance.error_message
        ret['created']          = instance.created
        ret['modified']         = instance.modified
        ret['user']             = ""
        if instance.user:
            from core.serializers import UserSerializer
            ret['user']         = instance.user.id
            ret["user_data"]    = UserSerializer(instance.user).data
        return ret


#     # VALID PHONE Number Examples
#     # +16135550175
#     # +16135550177
