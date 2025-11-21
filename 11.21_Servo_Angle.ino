#include <Servo.h> // Include the Servo library

Servo myServo;  // Create a servo object to control the servo

const int servo_pin = 9;
const int coolant_pin = 3;
int coolant_status = 0;
String tool_type = "init";
String ser;

void setup() {
  // Start serial communication at 9600 baud
  Serial.begin(9600);
  
  // Attach the servo to the pin
  myServo.attach(servo_pin);
  
  pinMode(coolant_pin, INPUT);
  
  // Optional: Move servo to a safe starting position (e.g., 0 or 180)
  // myServo.write(0); 
}

void loop() {
  // Check if data is available to avoid blocking the loop unnecessarily
  if (Serial.available() > 0) {
    ser = Serial.readString();
    ser.trim();
    
    if (ser != "" && ser != tool_type){
       tool_type = ser;
    }
  }

  if (tool_type == "pencil") {
    // Action for pencil
    // Original: analogWrite 210 -> (210/255 * 180)
    Serial.println("Mode set to: PENCIL");
    myServo.write(113); 

  } else if (tool_type == "pen") {
    // Action for pen
    // Original: analogWrite 203 -> (203/255 * 180)
    Serial.println("Mode set to: PEN");
    myServo.write(108); 

  } else if (tool_type == "confirmed") {
    coolant_status = digitalRead(coolant_pin);
    Serial.println(coolant_status);
    Serial.println("Tool Setup Confirmed: DONE");
    
    if (coolant_status == 1) {
      // Original: analogWrite 200 -> (200/255 * 180)
      myServo.write(90);
    } else {
      // Original: analogWrite 255 -> (255/255 * 180)
      myServo.write(170);
    }
  }
  
  // Note: Continuously printing to Serial in the main loop can be very fast.
  // You might want to add a small delay or only print on change.
  // Serial.println("Ser: " + ser);
  // Serial.println("Type: " + tool_type);
  delay(10); // Small delay for stability
}