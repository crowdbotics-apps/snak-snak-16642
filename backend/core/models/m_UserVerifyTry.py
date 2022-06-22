from django.db import models
from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class UserVerifyTry(models.Model):
    token                           = models.CharField      (max_length=24,)
    userverifytoken                 = models.ForeignKey     ("core.UserVerifyToken", null=True, blank=True, on_delete=models.CASCADE, related_name="userverifytry_userverifytoken",)

    success                         = models.BooleanField   (default=False,)
    error_message                   = models.TextField      (null=True, blank=True,)

    created                         = models.DateTimeField  (auto_now_add=True,)
    modified                        = models.DateTimeField  (auto_now=True,)

    # --------------------------------------------------------------------------
    class Meta:
        # ordering = ['blue'] # Auto sort queries by lowest blue first.
        verbose_name_plural = "UserVerifyTrys"

    # --------------------------------------------------------------------------
    def __str__(self):
        return_string = self.token
        return format(return_string)

    # # --------------------------------------------------------------------------
    # def save(self, *args, **kwargs):
    #     zzz_print("    %-32s: %s" % ("args", args))
    #     zzz_print("    %-32s: %s" % ("kwargs", kwargs))
    #     super().save(*args, **kwargs)









