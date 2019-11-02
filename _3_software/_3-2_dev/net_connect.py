import network, time
from creds import *
from config import *

def sta_connect( timeout = None, disable_ap = False ):
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        # connecting to network...
        wlan.connect( WIFI_SSID, WIFI_PASSWORD )
        
        # Skip connexion wait when RunApp=False to avoids REPL timeout
        # testing machine.reset_cause() is not reliable on Huzza ESP8266
        # si la Pin12 est reliée au GND, le controle de connexion au wifi ne sera pas executer.
        # il sera alors possible de le reconfigurer en REPL (terminal serie)
        if RUNAPP.value() == 0:
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
    # print('network config:', wlan.ifconfig())
    if wlan.isconnected() and disable_ap:
        ap = network.WLAN(network.AP_IF)
        if ap.active():
            ap.active(False)
            print( "AP disabled!" )

    return wlan.isconnected()
