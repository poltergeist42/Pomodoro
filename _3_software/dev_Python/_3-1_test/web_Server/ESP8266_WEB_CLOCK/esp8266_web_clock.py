# ESP8266 MicroPython Web Clock
# by Alan Wang

import network
import urequests
import ujson
import utime
import ssd1306
import machine
from machine import RTC, I2C, Pin

# user data
ssid = "ssid" # wifi router name
pw = "pw" # wifi router password
url = "http://worldtimeapi.org/api/timezone/Asia/Taipei" # see http://worldtimeapi.org/timezones
web_query_delay = 60000 # interval time of web JSON query
retry_delay = 5000 # interval time of retry after a failed Web query


# initialization

# SSD1306 OLED display
print("Connecting to wifi...")
oled = ssd1306.SSD1306_I2C(128, 64, I2C(scl=Pin(5), sda=Pin(4)))
oled.fill(0)
oled.text("Connecting", 0, 5)
oled.text(" to wifi...", 0, 15)
oled.show()

# internal real time clock
rtc = RTC()

# wifi connection
wifi = network.WLAN(network.STA_IF) # station mode
wifi.active(True)
wifi.connect(ssid, pw)

# wait for connection
while not wifi.isconnected():
    pass

# wifi connected
print("IP: " + str(wifi.ifconfig()[0]) + "\n")
oled.text("Connected. IP: ", 0, 35)
oled.text(" " + str(wifi.ifconfig()[0]), 0, 45)
oled.show()

# set timer
update_time = utime.ticks_ms() - web_query_delay

# main loop
while True:
    
    # if lose wifi connection reboot ESP8266
    if not wifi.isconnected():
        machine.reset()
    
    # query and get web JSON every web_query_delay ms
    if utime.ticks_ms() - update_time >= web_query_delay:
    
        # HTTP GET data
        response = urequests.get(url)
    
        if response.status_code == 200: # query success
        
            print("JSON response:\n" + response.text)
            
            # parse JSON
            parsed = ujson.loads(response.text) # you can also use parsed = response.json()
            datetime_str = str(parsed["datetime"])
            year = int(datetime_str[0:4])
            month = int(datetime_str[5:7])
            day = int(datetime_str[8:10])
            hour = int(datetime_str[11:13])
            minute = int(datetime_str[14:16])
            second = int(datetime_str[17:19])
            subsecond = int(round(int(datetime_str[20:26]) / 10000))
        
            # update internal RTC
            rtc.datetime((year, month, day, 0, hour, minute, second, subsecond))
            update_time = utime.ticks_ms()
            print("RTC updated\n")
   
        else: # query failed, retry retry_delay ms later
            update_time = utime.ticks_ms() - web_query_delay + retry_delay
    
    # generate formated date/time strings from internal RTC
    date_str = "{:02}/{:02}/{:4}".format(rtc.datetime()[1], rtc.datetime()[2], rtc.datetime()[0])
    time_str = "{:02}:{:02}:{:02}".format(rtc.datetime()[4], rtc.datetime()[5], rtc.datetime()[6])

    # update SSD1306 OLED display
    oled.fill(0)
    oled.text("ESP8266 Clock", 0, 5)
    oled.text("Date: " + date_str, 0, 25)
    oled.text("Time: " + time_str, 0, 45)
    oled.show()
    
    utime.sleep(0.1)
    
