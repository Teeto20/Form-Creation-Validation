document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const email = emailInput.value.trim();
    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be more than 3 characters.");
    }
    if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be more than 6 characters.");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // red
    }
  });
});

