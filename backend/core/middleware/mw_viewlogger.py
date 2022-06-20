#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
from zzz_lib.zzz_log import zzz_print

# ******************************************************************************
class mw_viewlogger:

    # --------------------------------------------------------------------------
    def __init__(self, get_response):
        self.get_response = get_response

    # --------------------------------------------------------------------------
    def __call__(self, request):
        response = self.get_response(request)
        # zzz_print("    %-32s: %s" % ("request.path", request.path))
        # zzz_print("    %-32s: %s" % ("response.status_code", response.status_code))
        return response

    # --------------------------------------------------------------------------
    def process_view(self, request, view_func, view_args, view_kwargs):
        # zzz_print("    %-32s: %s" % ("request.path", request.path))
        # zzz_print("    %-32s: %s" % ("view_func.__name__", view_func.__name__))
        # zzz_print("    %-32s: %s" % ("view_args", view_args))
        # zzz_print("    %-32s: %s" % ("view_kwargs", view_kwargs))

        # prepend_text = "\n                                                                                                   **** | "
        prepend_text = "\n        **** | "
        print_text  = prepend_text + "%-20s : %s" % ("method name",             str(view_func.__name__))
        print_text += prepend_text + "%-20s : %s" % ("request.path",            str(request.path))
        print_text += prepend_text + "%-20s : %s" % ("QUERY_STRING",            str(request.META.get('QUERY_STRING',    "")))
        print_text += prepend_text + "%-20s : %s" % ("HTTP_COOKIE",             str(request.META.get('HTTP_COOKIE',     "")))

        header_seeking = "Authorization"
        print_text += prepend_text + "%-20s : %s" % (header_seeking,            request.headers.get(header_seeking, ""))

        zzz_print(print_text)

        # Testing new pretty=True zzz_print parameter
        # zzz_print(request, pretty=True)
        # zzz_print(request.META, pretty=True)

        # DO NOT CALL response = self.get_response(request)
        # here as that generates infiniate recursive loop

        return None
