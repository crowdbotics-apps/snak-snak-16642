from django.db import models
from zzz_lib.zzz_log import zzz_print
import random
import string

# ******************************************************************************
class PublicPrivateKey(models.Model):
    mode                            = models.CharField      (max_length=24,)
    public_key                      = models.CharField      (max_length=40,)
    private_key                     = models.TextField      (null=True, blank=True,)

    created                         = models.DateTimeField  (auto_now_add=True,)
    modified                        = models.DateTimeField  (auto_now=True,)

    # --------------------------------------------------------------------------
    class Meta:
        verbose_name_plural = "PublicPrivateKeys"

    # --------------------------------------------------------------------------
    def __str__(self):
        return_string = "PublicPrivateKey: "   + self.public_key.__str__()
        return format(return_string)

    # --------------------------------------------------------------------------
    def generate_public_key(self, length=36):
        self.public_key = "ppk_"+''.join(random.choices(string.ascii_letters + string.digits, k=length))

    # --------------------------------------------------------------------------
    def save(self, *args, **kwargs):
        # zzz_print("    %-32s: %s" % ("save", "---------------------"))
        # zzz_print("    %-32s: %s" % ("args", args))
        # zzz_print("    %-32s: %s" % ("kwargs", kwargs))
        self.generate_public_key()
        # zzz_print("    %-32s: %s" % ("self.mode", self.mode))
        # zzz_print("    %-32s: %s" % ("self.public_key", self.public_key))
        # zzz_print("    %-32s: %s" % ("self.private_key", self.private_key))
        super().save(*args, **kwargs)


