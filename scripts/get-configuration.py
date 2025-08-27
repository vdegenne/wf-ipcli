#!/usr/bin/env python3

from wayfire import WayfireSocket
import json

sock = WayfireSocket()
config = sock.get_configuration()
print(json.dumps(config))
