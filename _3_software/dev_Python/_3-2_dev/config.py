#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""

Infos
=====

    :Projet:             Pomodoro
    :Nom du fichier:     config.py
    :dépôt GitHub:       
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

    :Projet:            Ce projet est une lampe d'ambiance interractive implémentant les fonctionnalité 
                        du Pomodoro.
                        
    :Fichiers:          * boot.py : Ce fichiers est exécuter une fois au démarrage de l'ESP8266

                        * main.py : Ce fichier exécute le programme principale

                        * config.py : contient les déclarations de broche et de constantes

####

lexique
=======

   :**v_**:                 variable
   :**l_**:                 list
   :**t_**:                 tuple
   :**d_**:                 dictionnaire
   :**f_**:                 fonction
   :**C_**:                 Class
   :**i_**:                 Instance
   :**m_**:                 Matrice
   
####

Référence Web
=============

    * `micropython.library <http://docs.micropython.org/en/latest/library/index.html>`_
    
    * `micropython.ESP8266 <http://docs.micropython.org/en/latest/esp8266/quickref.html>`_
    
####

"""
from machine import Pin, I2C, reset
from pyled import C_Led

# Définission de la broche de 'débraillage'
# RUNAPP est utilisé comme broche de 'débraillage' elle doit être utilisée avec une fonction 'callback':
# GPIO 12 = D6 sur le NodeMCU
RUNAPP = Pin( 12,  Pin.IN, Pin.PULL_UP )

def f_runapp():
    """ Permet d'intérompre le programe si la Pin 12 (RUNAPP) est reliée au GND. 
        Cette fonction doit être appelée à chaque début de boucle pour permettre de reprendre la
        main sur l'ESP.
    """
    if RUNAPP.value() != 1:
        from sys import exit
        exit(0)



# Définission de la LED de contrôle
LED = C_Led()

# Définission des broches I2C
# GPIO 4 = D2 sur le NodeMCU
# GPIO 5 = D1 sur le NodeMCU
# Décomenter les deux lignes ci-dessous pour configurer les broches I2C
# SCL = Pin(5)
# SDA = Pin(4)


# Définission de la broche du solenoide
# GPIO 4 = D2 sur le NodeMcu
SOLENOIDE = Pin(4, Pin.OUT)

# Définission de la broche de l'anneau de LED NeoPixel
# GPIO 0 = D3 sur le NodeMCU
NEOPIX = Pin(0, Pin.OUT)