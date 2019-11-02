#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""

Infos
=====

    :Projet:             Pomodoro
    :Nom du fichier:     boot.py
    :dépôt GitHub:       
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
from net_connect import sta_connect
import gc
import webrepl

# Disable Access Point if connected as STATION
# Connexion timeout of 40 sec
if sta_connect( disable_ap=True, timeout=20 ):
    print( "WLAN: connected!" )

webrepl.start()
gc.collect()

