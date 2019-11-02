# This file is executed on every boot (including wake-boot from deepsleep)
#import esp
#esp.osdebug(None)
import uos, machine
import network, time
from machine import Pin
import gc
import webrepl

WIFI_SSID = "VoLab"
WIFI_PASSWORD = "V0L@b42net"

def sta_connect( timeout = None, disable_ap = False ):
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        # connecting to network...
        wlan.connect( WIFI_SSID, WIFI_PASSWORD )
        
        # Skip connexion wait when RunApp=False to avoids REPL timeout
        # testing machine.reset_cause() is not reliable on Huzza ESP8266
        runapp = Pin( 12,  Pin.IN, Pin.PULL_UP )
        if runapp.value() == 0:
            print( "WLAN: no wait!")
        else:
            ctime = time.time()
            while not wlan.isconnected():
                if timeout and ((time.time()-ctime)>timeout):
                    print( "WLAN: timeout!" )
                    break
                else:
                    # print(".")
                    time.sleep( 0.500 )

    # Decommenter pour obtenir des infos
    print('network config:', wlan.ifconfig())
    if wlan.isconnected() and disable_ap:
        ap = network.WLAN(network.AP_IF)
        if ap.active():
            ap.active(False)
            print( "AP disabled!" )

    return wlan.isconnected()

# Disable Access Point if connected as STATION
# Connexion timeout of 40 sec
if sta_connect( disable_ap=True, timeout=20 ):
    print( "WLAN: connected!" )

#uos.dupterm(None, 1) # disable REPL on UART(0)
webrepl.start()
gc.collect()
