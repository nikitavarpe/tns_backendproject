// signup.js
function handleSignUp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const msg = document.getElementById("signup-msg");

  if (password !== confirmPassword) {
    msg.style.color = "red";
    msg.textContent = "Passwords do not match!";
    return false; // prevent form submission
  }

  // Save to localStorage (simulate signup)
  const user = {
    name,
    email,
    password
  };
  localStorage.setItem("user", JSON.stringify(user));

  msg.style.color = "green";
  msg.textContent = "Signup successful! Redirecting...";

  // Redirect after short delay
  setTimeout(() => {
    window.location.href = "signin.html";
  }, 1500);

  return false; // prevent default form submit
}
