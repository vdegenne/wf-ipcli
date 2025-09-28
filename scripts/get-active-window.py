#!/usr/bin/env python3

from wayfire import WayfireSocket
import json

sock = WayfireSocket()
focused_view = sock.get_focused_view()
print(json.dumps(focused_view))
