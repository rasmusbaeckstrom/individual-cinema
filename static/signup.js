document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  const indicator = document.getElementById("password-strength");

  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*_-]/;

  if (
    password.length >= 20 &&
    uppercaseRegex.test(password) &&
    numberRegex.test(password) &&
    specialCharRegex.test(password)
  ) {
    indicator.textContent = "Seriously, what are you doing? dont you have something better to do? Even Hackerman cant solve this password.";
    indicator.style.color = "green";
  } else if (
    password.length >= 16 &&
    uppercaseRegex.test(password) &&
    numberRegex.test(password) &&
    specialCharRegex.test(password)
  ) {
    indicator.textContent = "What do you think this is? NASA?";
    indicator.style.color = "green";
  } else if (
    password.length >= 8 &&
    uppercaseRegex.test(password) &&
    numberRegex.test(password) &&
    specialCharRegex.test(password)
  ) {
    indicator.textContent = "Strong password! Nice";
    indicator.style.color = "green";
  } else if (password.length >= 6) {
    indicator.textContent = "Medium password bro...";
    indicator.style.color = "orange";
  } else {
    indicator.textContent = "Weak password... keep going!";
    indicator.style.color = "red";
  }
});

document.getElementById("signupButton").addEventListener("click", function () {
  window.location.href = "/signup";
});

document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

  showPasswordCheckbox.addEventListener("change", function() {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});
