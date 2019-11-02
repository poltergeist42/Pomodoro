#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""

Infos
=====

    :Projet:             pyled
    :Nom du fichier:     pyled.py
    :dépôt GitHub:       
    :documentation:      
    :Autheur:            `Poltergeist42 <https://github.com/poltergeist42>`_
    :Version:            190416

####

    :Licence:            CC-BY-NC-SA
    :Liens:              https://creativecommons.org/licenses/by-nc-sa/4.0/

####

    :dev language:      MicroPython 1.10
    
####

Descriptif
==========

    :Projet:            pyled fournit la class "C_Led" qui permet de définir et de manipuler des 
                        objets Led en **micropython**.
                        
                        **N.B** : les valeurs par défaut sont basé sur l'ESP8266. 
                        
    :Fichiers:          * pytled.py: bibliothèque pour la class "C_Led". Ce fichier est à importer 
                          dans votre répertoire courant pour pouvoir être utilisé.

                        * main.py : Ce fichier exécute le programme principale. Ce fichier fait 
                          office d'exemple d'utilisation.

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

Liste des libs
==============

    * machine

    * time


####

"""
from machine import Pin
from time import sleep, time

class C_Led():
    def __init__(self, PIN_NUMBER=2):
        """ Initialisation des variables d'instances """
        self.v_led              = Pin(PIN_NUMBER, Pin.OUT)
        self.v_activeStateOn    = "LOW"
        self.v_etatLed          = False

        # Blink
        self.v_blinkFlag        = False
        self.v_blinkTimeRef     = 0
        self.v_numOfBlink       = 0
        self.v_blinkHalfCount   = 0

        # HeartBeat
        self.v_heartBeatTimeRef = 0
        self.v_heartBeatFlag    = False

        ## Alias des méthode
        self.setActiveOnState   = self.f_setActiveOnState 
        self.getActiveState     = self.f_getActiveState
        self.on                 = self.f_on
        self.off                = self.f_off
        self.toggle             = self.f_toggle
        self.blink              = self.f_blink
        self.heartBeat          = self.f_heartBeat

    def f_blinkReset(self):
        """ Permet de réinitialiser les valeurs des éléments de la metode 'blink' """
        self.v_blinkFlag        = False
        self.v_numOfBlink       = 0
        self.v_blinkTimeRef     = 0
        self.v_blinkHalfCount   = 0

    def f_heartBeatReset(self):
        """ Permet de réinitialiser les valeurs des éléments de la metode 'heartBeat' """
        self.v_heartBeatFlag    = False
        self.v_heartBeatTimeRef = 0

    def f_setActiveOnState(self, v_activeState):
        """ Permet de définir si la led est active à l'état haut ou à l'état bas.
            Les valeurs attendues sont:
            - str: "HIGHT"
            - str: "LOW"
        """
        v_activeState = v_activeState.upper()
        self.v_activeStateOn = v_activeState

    def f_getActiveState(self):
        """ Récupère l'état Actif (ON) """
        return self.v_activeStateOn

    def f_on(self):
        """ permet d'alumer la led """
        if self.v_activeStateOn == "LOW":
            self.v_led.value(0)
        elif self.v_activeStateOn == "HIGHT":
            self.v_led.value(1)

    def f_off(self):
        """ permet d'éteindre la led """
        if self.v_activeStateOn == "LOW":
            self.v_led.value(1)
        elif self.v_activeStateOn == "HIGHT":
            self.v_led.value(0)

    def f_toggle(self):
        """ permet d'inverser l'état de la led """
        self.v_led.value(not self.v_led.value())

    def f_timeMs(self):
        return int(round(time() * 1000))

    def f_secToMs(self, sec):
        """ Convertie la valeur "sec" (en secondes) en milisecondes """
        return int(round(sec*1000))

    def f_blink(self, numOfBlink, delaisInSec1, delaisInSec2=None, lock=False):
        """ permet de faire clignoter la led n fois selon une ou deux tempo à définir.

            Utilisation dans une boucle infinie
            -----------------------------------

            Si la méthode est appelée dans une boucle infinie il faut définir 
            "lock" sur "False" (paramètre par défaut). Cette méthode sera alors non bloquante,
            permettant d'excuté d'autres taches en parrallèle.

            Attention, si les taches effectuées en parrallèle sont bloquantes, le timer de cette
            méthode risque d'être perturbé

            Utilisation en dehors d'une boucle infinie
            ------------------------------------------

            Si la méthode est appelée en dehors d'une boucle infinie il faut définir 
            "lock" sur "True". Cette méthode sera alors bloquante, ne permettant pas d'excuté 
            d'autres taches en parralèles.


            :Rappel:    
                        * numOfBlink : 1 blink = 2 changemants d'état

                        * delaisInSec1 et delaisInSec2 : valeurs en secondes
        """
        v_numOfBlink    = numOfBlink
        v_delaisSec1    = delaisInSec1
        v_delaisSec2    = delaisInSec2
        v_lock          = lock
        if v_lock:
            for i in range(v_numOfBlink):
                self.f_toggle()
                sleep(v_delaisSec1)
                self.f_toggle()
                if v_delaisSec2 :
                    sleep(v_delaisSec2)
                else:
                    sleep(v_delaisSec1)
        else: 
            v_delaisSec1 = self.f_secToMs(v_delaisSec1)
            if v_delaisSec2:
                v_delaisSec2 = self.f_secToMs(v_delaisSec2)

            if not self.v_blinkFlag:
                self.v_blinkFlag = True
                self.v_blinkTimeRef = self.f_timeMs()

            if self.v_blinkFlag:
                if self.v_blinkHalfCount == v_numOfBlink * 2:
                    self.f_blinkReset()
                elif not self.v_blinkHalfCount:
                    self.f_toggle()
                    self.v_blinkHalfCount +=1
                else:
                    timeNow = self.f_timeMs()

                    if v_delaisSec2:
                        if (self.v_blinkHalfCount%2)==0:
                            v_delais = v_delaisSec2
                        elif (self.v_blinkHalfCount%2)==1:
                            v_delais = v_delaisSec1
                    else:
                        v_delais = v_delaisSec1

                    if timeNow >= (self.v_blinkTimeRef + v_delais):
                        self.f_toggle()
                        self.v_blinkHalfCount +=1


    def f_heartBeat(self, numOfBlink, heartRateInSec, blinkDelaisInSec=0.25):
        """ permet de faire clignoter n fois la led selon une periode définit (comme des 
            battement de coeurs). 

            Cette méthode doit être appelée dans une boucle infinie. Cette méthode est non bloquante,
            donc permet d'excuté d'autres taches en parrallèle.

            Attention, si les taches effectuées en parrallèle sont bloquantes, le timer de cette
            méthode risque d'être perturbé

            :Rappel:    
                        * numOfBlink :       1 blink = 2 changemants d'état

                        * heartRateInSec :   valeur en seconde

                        * blinkDelaisInSec : valeur en seconde
        """
        v_numOfBlink    = numOfBlink
        v_heartRate     = heartRateInSec
        v_blinkDelais   = blinkDelaisInSec

        v_heartRate = self.f_secToMs(v_heartRate)

        if not self.v_heartBeatFlag:
            self.v_heartBeatFlag = True
            self.v_heartBeatTimeRef = self.f_timeMs()

        if self.v_heartBeatFlag:
            timeNow = self.f_timeMs()

            if timeNow >= (self.v_heartBeatTimeRef + v_heartRate):
                self.f_blink(v_numOfBlink, v_blinkDelais, lock=True)
                self.f_heartBeatReset()


