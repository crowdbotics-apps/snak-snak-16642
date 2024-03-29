from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from users.forms import UserChangeForm, UserCreationForm
from users.models import ProfileImages

User = get_user_model()

admin.site.register(ProfileImages)

@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (("User", {"fields": ("phone_number",)}),) + auth_admin.UserAdmin.fieldsets
    list_display = ["username", "name", "phone_number", "is_superuser"]
    search_fields = ["phone_number"]
