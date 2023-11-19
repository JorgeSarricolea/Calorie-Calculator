// Retrieves the selected value from localStorage
const selectedOption = localStorage.getItem("selectedOption");
const age = localStorage.getItem("age");
const weight = localStorage.getItem("weight");
const height = localStorage.getItem("height");
const activityLevel = localStorage.getItem("activityLevel");

// Elements
const elementById = document.getElementById.bind(document);

// Calculate BMI
function CalculateBMI(weight, height) {
  // Convert height to meters
  if (height > 3) {
    height /= 100;
  }

  var bmi = weight / height ** 2;
  return bmi.toFixed(2);
}

// Print the BMI element
const BMI = CalculateBMI(weight, height);
elementById("bmi-text").textContent = BMI;

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

// Print the BMI category element
const BMIcategory = getBMICategory(BMI);
elementById("bmi-category-text").textContent = BMIcategory;

// Calculate MBR
function CalculateMBR(age, height, weight, selectedOption) {
  if (selectedOption === "man-option") {
    // Harris-Benedict Formula
    var mbrMan = 10 * weight + 6.25 * height - 5 * age + 5;
    return mbrMan.toFixed(2);
  } else if (selectedOption === "woman-option") {
    // Harris-Benedict Formula
    var mbrWoman = 10 * weight + 6.25 * height - 5 * age + 161;
    return mbrWoman.toFixed(2);
  }
}

// Save the MBR
var MBR = CalculateMBR(age, height, weight, selectedOption);
console.log("MBR: ", MBR);

// Physical activity scale
const activityScale = {
  sedentary: { value: 1.2 },
  light: { value: 1.375 },
  moderate: { value: 1.55 },
  active: { value: 1.725 },
  "very-active": { value: 2 },
};

// Function to determine MBR + Physical activity
function getMBRactivity(MBR, activityLevel) {
  if (activityLevel in activityScale) {
    var physicalActivityValue = activityScale[activityLevel].value;
    console.log(activityLevel, "| value: ", physicalActivityValue);
    return MBR * physicalActivityValue;
  } else {
    return "Undefined Physical Activity";
  }
}

// Save the MBR + Physical activity
var MBRplusActivity = getMBRactivity(MBR, activityLevel).toFixed(2);
console.log("MBR whit physical activity:", MBRplusActivity);
