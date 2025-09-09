// Custom Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh

  // declaring the variables for the form inputs and removing spaces.
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation rules
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = " All fields are required!";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = " Please enter a valid email!";
    formMessage.style.color = "red";
    return;
  }

  // Success message
  formMessage.textContent = "✅ Form submitted successfully!";
  formMessage.style.color = "green";

  // Clear form fields
  form.reset();
});


// Interactive Feature 1: Change Background Color

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function() {
  // Pick a random color
  const colors = ["lightblue", "lightgreen", "grey", "skyblue", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});


// Interactive Feature 2: Counter

let count = 0;
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function() {
  count = 0;
  countDisplay.textContent = count;
});
