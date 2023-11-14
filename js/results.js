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

console.log("Age:", age);
console.log("Weight:", weight);
console.log("Height:", height);
