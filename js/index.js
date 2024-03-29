// Get all gender options
const genderOptions = document.getElementsByName("options");

// Function to check the option selected
genderOptions.forEach((button) => {
  button.addEventListener("change", () => {
    // Check if the radio button is selected
    if (button.checked) {
      // Remove the selected option class
      genderOptions.forEach((otherButton) => {
        otherButton.parentNode.classList.remove("option-selected");
      });

      // Add the selected option class
      button.parentNode.classList.add("option-selected");
    }
  });
});

// Typing effect
const mainInfo =
  "Have you ever wondered how many calories you consume in a day? Whether you're working on your weight loss, maintenance, or muscle gain goals, understanding your caloric intake is crucial. <br /><br /> The calculator in front of you is a powerful tool to assist you in determining how many calories you need on a daily basis.";

const mainInfoTypping = new Typed(".mainInfo", {
  strings: [mainInfo],
  loop: false,
  typeSpeed: 5,
});

// Show the main options and next button
var options = document.getElementById("options-container");
options.style.opacity = 0;
options.style.visibility = "hidden";

var nextBtn = document.getElementById("next-btn");
nextBtn.style.opacity = 0;
nextBtn.style.visibility = "hidden";

// Error message
var selectMessage = document.getElementById("selectMessage");

// Function that will make the items appear after 4 seconds
function showElements() {
  options.style.visibility = "visible";
  options.style.opacity = 1;
  nextBtn.style.visibility = "visible";
  nextBtn.style.opacity = 1;
}

// Call the function after 4 seconds
setTimeout(showElements, 4000);

// Validate the option for the next button
function validateOption(event) {
  event.preventDefault();

  // Get the selected option
  var selectedOption = document.querySelector('input[name="options"]:checked');

  if (selectedOption) {
    // Save the selected value to localStorage
    localStorage.setItem("selectedOption", selectedOption.id);

    // Redirects to the next page
    window.location.href = "data.html";
  } else {
    // Displays an error message if no option is selected
    document.getElementById("selectMessage").innerText =
      "Please select an option.";

    setTimeout(function () {
      selectMessage.textContent = "";
    }, 3000);
  }
}
