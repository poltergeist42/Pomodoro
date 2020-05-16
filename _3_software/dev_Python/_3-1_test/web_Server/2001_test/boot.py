#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""

Infos
=====

    :Projet:             Pomodoro
    :Nom du fichier:     boot.py
    :d茅p么t GitHub:       
    :documentation:      
    :Autheur:            `Poltergeist42 <https://github.com/poltergeist42>`_
    :Version:            190522

####

    :Licence:            CC-BY-NC-SA
    :Liens:              https://creativecommons.org/licenses/by-nc-sa/4.0/

####

    :dev language:      MicroPython 1.10
    
####

Descriptif
==========

    :Projet:            Ce projet est une lampe d'ambiance interractive impl茅mentant les fonctionnalit茅 
                        du Pomodoro.
                        
    :Fichiers:          * boot.py : Ce fichiers est ex茅cuter une fois au d茅marrage de l'ESP8266

                        * main.py : Ce fichier ex茅cute le programme principale

                        * config.py : contient les d茅clarations de broche et de constantes

####

R茅f茅rence Web
=============

    * `micropython.library <http://docs.micropython.org/en/latest/library/index.html>`_
    
    * `micropython.ESP8266 <http://docs.micropython.org/en/latest/esp8266/quickref.html>`_
    
####

"""
try:
    import usocket as socket
except:
    import socket

from machine import Pin
import network
import esp
import gc
# import webrepl

from net_connect import sta_connect
from config import BUILTIN_LED

# Disable Access Point if connected as STATION
# Connexion timeout of 40 sec
esp.osdebug(None)
if sta_connect( disable_ap=True, timeout=20 ):
    print( "WLAN: connected!" )

# webrepl.start()
gc.collect()

led = Pin(BUILTIN_LED, Pin.OUT)