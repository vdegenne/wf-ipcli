#!/usr/bin/env python3

from wayfire import WayfireSocket

sock = WayfireSocket()
focused_view = sock.get_focused_view()

if focused_view and "app-id" in focused_view:
    print(focused_view["app-id"])
else:
    print(None)
