from rest_framework.authentication import TokenAuthentication

# from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class CustomTokenAuthentication(TokenAuthentication):
    keyword = 'Bearer'


