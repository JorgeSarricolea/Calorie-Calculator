function validateInputs(event) {
  // Get the input elements
  var ageInput = document.getElementById("age");
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");

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

    // Store values in localStorage
    localStorage.setItem("age", ageInput.value);
    localStorage.setItem("weight", weightInput.value);
    localStorage.setItem("height", heightInput.value);

    // Redirect to the next page
    window.location.href = "results.html";

    // Prevent the default action of the link
    event.preventDefault();
  }
}
