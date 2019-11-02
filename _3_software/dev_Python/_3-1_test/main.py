#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from machine import Pin
from time import sleep
## Declaration des broches
pin = Pin(2, Pin.OUT)

def toggle(p):
    p.value(not p.value())

def startMCU(v_time=0.5, v_range=11):
    """ Fait clignoter la led n fois au démarrage """
    for i in range(v_range) :
        toggle(pin)
        sleep(v_time)   

def main():
    startMCU()

if __name__ == '__main__':
    main()
