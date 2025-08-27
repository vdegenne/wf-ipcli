#!/usr/bin/env python3

from wayfire import WayfireSocket
import sys

sock = WayfireSocket()
devices = sock.list_input_devices()

try:
    touch_device = next(dev for dev in devices if dev.get('type') == 'touch')
except StopIteration:
    sys.exit(1)  # exit with error code silently

state = "enabled" if touch_device.get('enabled') else "disabled"
print(state)
