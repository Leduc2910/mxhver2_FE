const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});
document.getElementById("signup-form").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email_signup").value.trim();
  var password = document.getElementById("password_signup").value.trim();

  if (!email.includes("@")) {
    alert("Invalid email format");
    event.preventDefault();
    return;
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)) {
    alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long");
    event.preventDefault();
    return;
  }

  if (name.includes(" ")) {
    alert("Name cannot contain spaces");
    event.preventDefault();
    return;
  }
});

document.getElementById("signin-form").addEventListener("submit", function(event) {
  var email = document.getElementById("email_signin").value.trim();
  var password = document.getElementById("password_signin").value.trim();

  if (!email.includes("@")) {
    alert("Invalid email format");
    event.preventDefault();
    return;
  }
});