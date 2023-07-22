// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  let underweight = bmi <= 18.5;
  let normal = bmi <= 25.0;
  let overweight = bmi <= 30.0;
  let obese = bmi > 30.0;

  return underweight
    ? "Underweight"
    : normal
    ? "Normal"
    : overweight
    ? "Overweight"
    : "Obese";
}