#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""

Infos
=====

    :Projet:             Pomodoro
    :Nom du fichier:     main.py
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

from time import sleep
from config import *
from neopixel import NeoPixel
## Declaration des broches

def main():
    f_runapp()
    LED.blink(3, 0.5, lock=True)
    LED.off()

    # NeoPixel( broche_signal, nbre_de_led )
    np = NeoPixel( NEOPIX, 12 )
    
if __name__ == '__main__':
    main()
