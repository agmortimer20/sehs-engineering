#include <Servo.h>

// Create three servo motor variables
Servo baseMotor;
Servo elbowMotor;
Servo clawMotor;

void setup() {
  // Set up servo motors on pins 9 through 11
  baseMotor.attach(9);
  elbowMotor.attach(10);
  clawMotor.attach(11);
}

void loop() {
  // Get value from each potentiometer ranging from 0 to 1023
  int dial1 = analogRead(A0);
  int dial2 = analogRead(A1);
  int dial3 = analogRead(A2);

  // Use the potentiometer value to get an angle between 0° to 180° or 0° to 90°
  int angle1 = map(dial1, 0, 1023, 0, 180);
  int angle2 = map(dial2, 0, 1023, 0, 90);
  int angle3 = map(dial3, 0, 1023, 0, 90);

  // Move the servo motors to a given angle
  baseMotor.write(angle1);
  elbowMotor.write(angle2);
  clawMotor.write(angle3);
}
