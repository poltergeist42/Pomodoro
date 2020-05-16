
#include <Adafruit_NeoPixel.h>

#include"cfg.h"
#include"creds.h"

//Création d'une instance 'strip' pour le NeoPixel
Adafruit_NeoPixel strip = Adafruit_NeoPixel(NEOPIX_NUMPIXELS, NEOPIX, NEO_GRB + NEO_KHZ800);

void setup() {
    pinMode(LED, OUTPUT);
    strip.begin();
    strip.show(); // Initialise tous les pixels à 'off' (éteint)
}

// the loop function runs over and over again forever
void loop() {
    int t_rvb[3];
    for (int k = 0; k < 3; k++)
    {
        for (int i = 0; i < 128; i++)
        {
            t_rvb[k]=i;
            // strip.clear();
            for (int j = 0; j < NEOPIX_NUMPIXELS; j++)
            {
                strip.setPixelColor(j, t_rvb[0], t_rvb[1], t_rvb[2]);
                strip.show();
            }
            delay(50);
        }
        t_rvb[k]=0;
    }
    



}