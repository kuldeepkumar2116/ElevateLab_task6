document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("successMessage").innerText = "";

  // Name Validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    isValid = false;
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    isValid = false;
  }

  // Message Validation
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").innerText =
      "Form submitted successfully!";
    // Optionally clear fields
    document.getElementById("contactForm").reset();
  }
});
