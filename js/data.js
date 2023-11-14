function validateOption(event) {
  // Get the input elements
  var ageInput = document.getElementById("age");
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");

  // Get the input elements
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  // Check if any field is empty
  if (
    ageInput.value === "" ||
    heightInput.value === "" ||
    weightInput.value === ""
  ) {
    // Shows an error message
    document.getElementById("selectMessage").textContent =
      "Please complete all fields.";

    setTimeout(function () {
      selectMessage.textContent = "";
    }, 3000);

    // Stop the link's default action (avoid following the link)
    event.preventDefault();
  } else {
    // If all fields are filled, clear any existing error messages
    document.getElementById("selectMessage").textContent = "";
  }
}

// Export the saved data
export { age, height, weight };
