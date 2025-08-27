#!/usr/bin/env python3

from wayfire import WayfireSocket

sock = WayfireSocket()

print(sock.get_keyboard_layout())

