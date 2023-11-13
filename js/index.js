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
  // Check if any option has been selected
  var manOption = document.getElementById("man-option");
  var womanOption = document.getElementById("woman-option");
  var selectMessage = document.getElementById("selectMessage");

  if (manOption.checked || womanOption.checked) {
    // Enable the button and redirect
    document.getElementById("next-btn").href =
      "https://kcal-calc.netlify.app/data.html";
    // Clear any previous error message
    selectMessage.textContent = "";
  } else {
    // Displays an error message if no option is selected
    selectMessage.textContent = "Please, select an option";
    // Prevent the default behavior (e.g., form submission or link redirection)
    event.preventDefault();

    // Después de 3 segundos (3000 milisegundos), oculta el mensaje de error
    setTimeout(function () {
      selectMessage.textContent = "";
    }, 3000);
  }
}
