#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""

Infos
=====

    :Projet:             Pomodoro
    :Nom du fichier:     config.py
    :d茅p么t GitHub:       
    :documentation:      
    :Autheur:            `Poltergeist42 <https://github.com/poltergeist42>`_
    :Version:            200119

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
from machine import Pin, I2C, reset
# from pyled import C_Led
BUILTIN_LED = 2

# D茅finission de la broche de 'd茅braillage'
# RUNAPP est utilis茅 comme broche de 'd茅braillage' elle doit 锚tre utilis茅e avec une fonction 'callback':
# GPIO 12 = D6 sur le NodeMCU
RUNAPP = Pin( 12,  Pin.IN, Pin.PULL_UP )

def f_runapp():
    """ Permet d'int茅rompre le programe si la Pin 12 (RUNAPP) est reli茅e au GND. 
        Cette fonction doit 锚tre appel茅e 脿 chaque d茅but de boucle pour permettre de reprendre la
        main sur l'ESP.
    """
    if RUNAPP.value() != 1:
        from sys import exit
        exit(0)



# D茅finission de la LED de contr么le
# LED = C_Led()

# D茅finission des broches I2C
# GPIO 4 = D2 sur le NodeMCU
# GPIO 5 = D1 sur le NodeMCU
# D茅comenter les deux lignes ci-dessous pour configurer les broches I2C
# SCL = Pin(5)
# SDA = Pin(4)


# D茅finission de la broche du solenoide
# GPIO 4 = D2 sur le NodeMcu
SOLENOIDE = Pin(4, Pin.OUT)

# D茅finission de la broche de l'anneau de LED NeoPixel
# GPIO 0 = D3 sur le NodeMCU
NEOPIX = Pin(0, Pin.OUT)