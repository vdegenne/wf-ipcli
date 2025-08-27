#!/usr/bin/env python3

from wayfire import WayfireSocket
import sys, json

if len(sys.argv) != 2 or sys.argv[1] not in ['enabled', 'disabled']:
    print("Invalid usage, exactly one argument required, either 'enabled' or 'disabled'!")
    exit(-1)

state: bool = sys.argv[1] == 'enabled'

sock = WayfireSocket()

devices = sock.list_input_devices()
for dev in devices:
    if dev['type'] == 'touch':
        sock.configure_input_device(dev['id'], state)
