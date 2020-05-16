
#include <Adafruit_NeoPixel.h>

#include"cfg.h"

//Création d'une instance 'ring' pour le NeoPixel
Adafruit_NeoPixel ring = Adafruit_NeoPixel(NEOPIX_NUMPIXELS, NEOPIX_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
    pinMode(LED, OUTPUT);
    ring.begin();
    ring.show(); // Initialise tous les pixels à 'off' (éteint)
}

// the loop function runs over and over again forever
void loop() {
    int t_rvb[3];
    for (int k = 0; k < 3; k++)
    {
        for (int i = 0; i < 128; i++)
        {
            t_rvb[k]=i;
            // ring.clear();
            for (int j = 0; j < NEOPIX_NUMPIXELS; j++)
            {
                ring.setPixelColor(j, t_rvb[0], t_rvb[1], t_rvb[2]);
                ring.show();
            }
            delay(50);
        }
        t_rvb[k]=0;
    }
    



}