from django.contrib.auth import get_user_model
from rest_framework import serializers
from zzz_lib.zzz_log import zzz_print

User = get_user_model()

# ******************************************************************************
class UserSerializer(serializers.ModelSerializer):

    # --------------------------------------------------------------------------
    class Meta:
        model = User
        fields = ["id", "email", "phone_number", "phone_number_verified", ]


