#include "DHT.h"
#define DHTTYPE DHT11
const int DHTPin = 2;

DHT dht(DHTPin, DHTTYPE);

void setup() {
  Serial.begin(9600);
  //Serial.println("DHTxx test!");

  dht.begin();
}

void loop() {
  delay(60000);

  float t = dht.readTemperature();
  float h = dht.readHumidity();

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  
  Serial.print(h);
  Serial.print(",");
  Serial.print(t);
  Serial.print(";");
       
  //Serial.print("-");
  //Serial.print("Humidity:");
  //Serial.print(h);
  //Serial.print(" %\t");
  //Serial.print("Temperature:");
  //Serial.print(t);
  //Serial.println(" *C ");
}
