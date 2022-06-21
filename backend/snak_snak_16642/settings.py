"""
Django settings for snak_snak_16642 project.

Generated by 'django-admin startproject' using Django 2.2.2.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import environ

env = environ.Env()

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool("DEBUG", default=False)

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env.str("SECRET_KEY", default=None)

ALLOWED_HOSTS = env.list("HOST", default=["*"])
SITE_ID = 1

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SECURE_SSL_REDIRECT = env.bool("SECURE_REDIRECT", default=False)


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.sites",
    # "phonenumber_field",
    "dating",
]
LOCAL_APPS = [
    "core",
    "home",
    "users.apps.UsersConfig",
]
THIRD_PARTY_APPS = [
    "rest_framework",
    "rest_framework.authtoken",
    "rest_auth",
    "rest_auth.registration",
    "bootstrap4",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "allauth.socialaccount.providers.google",
    "django_extensions",
    "corsheaders",
    "storages",
    "drf_yasg",
    # start fcm_django push notifications
    "fcm_django",
    # end fcm_django push notifications
]
INSTALLED_APPS += LOCAL_APPS + THIRD_PARTY_APPS

CORS_ALLOW_ALL_ORIGINS = True

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "core.middleware.mw_viewlogger",
]

ROOT_URLCONF = "snak_snak_16642.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "snak_snak_16642.wsgi.application"


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}

if env.str("DATABASE_URL", default=None):
    DATABASES = {"default": env.db()}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    # MMH: RE-ENABLE THESE
    # {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",},
    # {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",},
    # {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",},
    # {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",},
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_L10N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

MIDDLEWARE += ["whitenoise.middleware.WhiteNoiseMiddleware"]

AUTHENTICATION_BACKENDS = (
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication'
    ]
}
STATIC_URL = '/static/'

# S3_FILE_STORAGE = env.bool("S3_FILE_STORAGE", True)

# AWS S3 STORAGE START
# AWS_ACCESS_KEY_ID = 'AKIAIEB2U3X7RJW6QV3Q'
# AWS_SECRET_ACCESS_KEY = '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'
# AWS_STORAGE_BUCKET_NAME = 'snack-snack-dev'
# AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
# AWS_S3_OBJECT_PARAMETERS = {
#     'CacheControl': 'max-age=86400',
# }
# AWS_STATIC_LOCATION = 'static'
# AWS S3 STORAGE END

STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


# AWS_PUBLIC_MEDIA_LOCATION = 'media/public'

# if S3_FILE_STORAGE:
#     DEFAULT_FILE_STORAGE = 'snak_snak_16642.storage_backends.PublicMediaStorage'
#     STATICFILES_STORAGE = 'snak_snak_16642.storage_backends.StaticStorage'
#     STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_STATIC_LOCATION)
#
# AWS_PRIVATE_MEDIA_LOCATION = 'media/private/profile_images'
# PRIVATE_FILE_STORAGE = 'snak_snak_16642.storage_backends.PrivateMediaStorage'

MEDIA_ROOT      = os.path.join(BASE_DIR, 'media')
MEDIA_URL       = '/media/'

# allauth / users
ACCOUNT_EMAIL_REQUIRED              = True
ACCOUNT_AUTHENTICATION_METHOD       = "email"
ACCOUNT_USERNAME_REQUIRED           = False
ACCOUNT_EMAIL_VERIFICATION          = "mandatory"
ACCOUNT_CONFIRM_EMAIL_ON_GET        = False
ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = False
ACCOUNT_UNIQUE_EMAIL                = True
LOGIN_REDIRECT_URL                  = "users:redirect"

ACCOUNT_ADAPTER                     = "users.adapters.AccountAdapter"
SOCIALACCOUNT_ADAPTER               = "users.adapters.SocialAccountAdapter"
ACCOUNT_ALLOW_REGISTRATION          = env.bool("ACCOUNT_ALLOW_REGISTRATION", True)
SOCIALACCOUNT_ALLOW_REGISTRATION    = env.bool("SOCIALACCOUNT_ALLOW_REGISTRATION", True)

REST_AUTH_SERIALIZERS = {
    # Replace password reset serializer to fix 500 error
    "PASSWORD_RESET_SERIALIZER": "home.api.v1.serializers.PasswordSerializer",
}

# Custom user model
AUTH_USER_MODEL                     = "users.User"

EMAIL_HOST                          = env.str("EMAIL_HOST", "smtp.sendgrid.net")
EMAIL_HOST_USER                     = env.str("SENDGRID_USERNAME", "")
EMAIL_HOST_PASSWORD                 = env.str("SENDGRID_PASSWORD", "")
EMAIL_PORT                          = 587
EMAIL_USE_TLS                       = True


# start fcm_django push notifications
FCM_DJANGO_SETTINGS = {"FCM_SERVER_KEY": env.str("FCM_SERVER_KEY", "")}
# end fcm_django push notifications

# MMH: VERY OLD, WAS ALREADY COMMENTED OUT PREVIOUSLY
# TWILIO_ACCOUNT_SID = env.str("TWILIO_ACCOUNT_SID", "AC85dea822ce7656488da522c0b8bb69e7")
# TWILIO_AUTH_TOKEN = env.str("TWILIO_AUTH_TOKEN", "f241a55454224d0f97f7f43c2a6192db")
# TWILIO_SERVICE_SID = env.str("TWILIO_SERVICE_SID", "VA1067c56ceb40f08cf9b3d1d4e4d4dd77")
# MMH: ORIGINAL VERSIONS IN CODE BUT TESTING INDICATED THEY MIGHT BE OUT OF DATE
# TWILIO_ACCOUNT_SID      = env.str("TWILIO_ACCOUNT_SID", "ACc53016c0e40705bde39383e9ffabd925")
# TWILIO_AUTH_TOKEN       = env.str("TWILIO_AUTH_TOKEN", "6516867ab23c9e33a9ed907765ebb26f")
# TWILIO_SERVICE_SID      = env.str("TWILIO_SERVICE_SID", "VA191df3b272b2886d9e311348979340b1")
# MMH: NEW VERSIONS RETRIEVED FROM CLIENTS TWILIO ACCOUNT June 21, 2022
TWILIO_ACCOUNT_SID      = env.str("TWILIO_ACCOUNT_SID", "")
TWILIO_AUTH_TOKEN       = env.str("TWILIO_AUTH_TOKEN", "")
TWILIO_SERVICE_SID      = env.str("TWILIO_SERVICE_SID", "")

if DEBUG:
    # output email to console instead of sending
    EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

APP_ID = 'e304774b-9c6f-434e-913b-ba24addb5246'
REST_API_KEY = 'ZTRiN2Q3NzYtYjYyZC00YzQ4LWJkNTEtNmIyMmQwZmVjZDUw'
USER_AUTH_KEY = 'ZDgzNWI5NDMtN2VhNi00NWNkLWIyOTctNTcyYWE2NzEzMjM2'


S3_FILE_STORAGE = env.bool("S3_FILE_STORAGE", True)
AWS_ACCESS_KEY_ID = env.str("AWS_ACCESS_KEY_ID", "")
AWS_SECRET_ACCESS_KEY = env.str("AWS_SECRET_ACCESS_KEY", "")
AWS_AUTO_CREATE_BUCKET = True
AWS_S3_FILE_OVERWRITE = True
AWS_S3_REGION_NAME = env.str("AWS_STORAGE_REGION", "us-east-1")
AWS_STORAGE_BUCKET_NAME = env.str("AWS_STORAGE_BUCKET_NAME", "")
AWS_DEFAULT_ACL = 'private'
AWS_S3_SIGNATURE_VERSION = "s3v4"

if S3_FILE_STORAGE:
    DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"

try:
    from snak_snak_16642.local_settings import *
except:
    pass
