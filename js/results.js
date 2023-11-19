// Retrieves the selected value from localStorage
var selectedOption = localStorage.getItem("selectedOption");
var age = localStorage.getItem("age");
var weight = localStorage.getItem("weight");
var height = localStorage.getItem("height");

// testing data in console
if (selectedOption === "man-option") {
  console.log("Selected option is Man");
} else if (selectedOption === "woman-option") {
  console.log("Selected option is Woman");
} else {
  console.log("No option selected");
}

// Calculate BMI
function CalculateBMI(weight, height) {
  // Convert height to meters
  if (height > 3) {
    height /= 100;
  }

  var bmi = weight / height ** 2;
  return bmi;
}

// Save the BMI
var BMI = CalculateBMI(weight, height).toFixed(2);
console.log("BMI: ", BMI);

// BMI Scale
const BMIScale = {
  severeThinness: { min: 0, max: 16, name: "Severe Thinness" },
  moderateThinness: { min: 16.01, max: 17, name: "Moderate Thinness" },
  mildThinness: { min: 17.01, max: 18.59, name: "Mild Thinness" },
  normal: { min: 18.6, max: 25, name: "Normal" },
  overWeight: { min: 25.01, max: 30, name: "Overweight" },
  obeseClass1: { min: 30.01, max: 35, name: "Obese Class 1" },
  obeseClass2: { min: 35.01, max: 40, name: "Obese Class 2" },
  obeseClass3: { min: 40.01, max: 100, name: "Obese Class 3" },
};

// Function to determine BMI category
function getBMICategory(BMI) {
  for (var key in BMIScale) {
    if (BMI >= BMIScale[key].min && BMI <= BMIScale[key].max) {
      return BMIScale[key].name;
    }
  }
  return "Undefined Category"; // In case the BMI is not in any defined category
}

// Save the BMI category
var BMIcategory = getBMICategory(BMI);
console.log("BMI Category:", BMIcategory);
