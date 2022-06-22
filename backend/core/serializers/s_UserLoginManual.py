from allauth.account.utils import perform_login
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy
from rest_framework import serializers

from zzz_lib.zzz_log import zzz_print

User = get_user_model()

# ******************************************************************************
class UserLoginManualSerializer(serializers.Serializer):
    phone_number        = serializers.CharField(max_length=300)

    # ------------------------------------------------------------------------------
    def validate(self, ordered_data_dict):
        zzz_print("    %-32s: %s" % ("UserLoginManualSerializer", "**************"))
        phone_number = ordered_data_dict.get('phone_number')
        zzz_print("    %-32s: %s" % ("phone_number", phone_number))

        # request = self.context.get('request')

        try:
            user = User.objects.get(phone_number=phone_number)

            # # user = authenticate(request=request, username=phone_number, password=password)
            # user = authenticate(request=request, username=phone_number)
            # if not user:
            #     msg = gettext_lazy('Unable to log in with provided credentials.')
            #     raise serializers.ValidationError(msg, code='authorization')
            #

            # add user to ordered_data_dict
            ordered_data_dict['user'] = user

            #
            # # magic allauth method, to actually log the user in
            # # complete_signup(request, user, settings.ACCOUNT_EMAIL_VERIFICATION, None, None)
            # perform_login(request, user, settings.ACCOUNT_EMAIL_VERIFICATION, None, None, False)
            # return ordered_data_dict

        except User.DoesNotExist:
            raise serializers.ValidationError("user does not exist", code='authorization')


        return ordered_data_dict

