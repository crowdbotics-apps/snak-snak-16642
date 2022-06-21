from rest_framework import permissions
from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class Custom_Permission_IsVerified(permissions.BasePermission):

    # --------------------------------------------------------------------------
    # SOCIAL LOGINS THAT PROVIDE EMAILS:        APPLE, FACEBOOK, TWITTER
    # SOCIAL LOGINS THAT DO NOT PROVIDE EMAILS: TIKTOK
    def has_permission(self, request, view):
        # from permissions.IsAuthenticated
        return_bool = bool(request.user and request.user.is_authenticated)

        # return_bool = bool(request.user and request.user.is_authenticated and request.user.is_staff)
        #
        # if request.user.login_src == "login_src_twitter":
        #     return_bool = True
        # FIGURE OUT EACT LOGIC THAT TESTS user.verified field but allows
        # social login users who can't be verified to get through as well.

        zzz_print("    %-32s: %s" % ("return_bool", return_bool))
        return return_bool




# # TO USE
#
# from home.custom.custom_permission import Custom_Permission_IsVerified
#
# Then
#
#     # --------------------------------------------------------------------------
#     def get_permissions(self):
#         # self.permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
#         # self.permission_classes = [permissions.IsAuthenticated, ]
#         self.permission_classes = [Custom_Permission_IsVerified, ]
#         return super().get_permissions()




















