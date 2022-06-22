from rest_framework import serializers
from core.models import UserVerifyTry, UserVerifyToken
from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class UserVerifyTrySerializer(serializers.ModelSerializer):
    # password = serializers.CharField(max_length=300, )

    class Meta:
        model = UserVerifyTry
        # fields = ['id', 'token', 'password', 'userverifytoken', 'success', 'error_message', 'created', 'modified' ]
        fields = ['id', 'token', 'userverifytoken', 'success', 'error_message', 'created', 'modified' ]
        extra_kwargs = {
            'token'                 : {'required': True,},
            'userverifytoken'       : {'read_only': True,},
            'success'               : {'read_only': True,},
            'error_message'         : {'read_only': True,},
            'created'               : {'read_only': True,},
            'modified'              : {'read_only': True,},
        }

    # --------------------------------------------------------------------------
    def create(self, validated_data):
        # zzz_print("    %-32s: %s" % ("UserVerifyTrySerializer", "create"))
        # zzz_print("    %-32s: %s" % ("validated_data", validated_data))

        # i_userverifytry = UserVerifyTry(**validated_data)
        i_userverifytry = UserVerifyTry()
        i_userverifytry.token = validated_data['token']
        # zzz_print("    %-32s: %s" % ("i_userverifytry.token", i_userverifytry.token))

        try:
            i_userverifytry.userverifytoken = UserVerifyToken.objects.get(token=i_userverifytry.token, success=True)
            status_tuple = i_userverifytry.userverifytoken.get_status_tuple()
            # zzz_print("    %-32s: %s" % ("status_tuple[0]", status_tuple[0]))
            # zzz_print("    %-32s: %s" % ("status_tuple[1]", status_tuple[1]))

            if status_tuple[0]:
                i_userverifytry.success = True

                # Set users verified field.
                zzz_print("    %-32s: %s" % ("set phone_number_verified for user", i_userverifytry.userverifytoken.user))
                i_userverifytry.userverifytoken.user.phone_number_verified = True
                i_userverifytry.userverifytoken.user.save()
            else:
                i_userverifytry.error_message = "UserVerifyToken was not valid: " + status_tuple[1]
        except UserVerifyToken.DoesNotExist:
            i_userverifytry.error_message = "UserVerifyToken DoesNotExist"

        i_userverifytry.save()
        return i_userverifytry

    # ------------------------------------------------------------------------------
    def to_representation(self, instance):
        # zzz_print("    %-32s: %s" % ("--------------", "to_representation"))
        from core.serializers import UserVerifyTokenSerializer
        ret = super().to_representation(instance)
        ret["userverifytoken_data"] = UserVerifyTokenSerializer(instance.userverifytoken).data
        return ret





















