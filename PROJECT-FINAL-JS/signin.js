function handleSignIn() {
  const email = document.getElementById("signin-email").value.trim();
  const password = document.getElementById("signin-password").value;
  const msg = document.getElementById("signin-msg");

  // Get user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    msg.style.color = "red";
    msg.textContent = "No user found. Please sign up first.";
    return false;
  }

  // Check if credentials match
  if (email === storedUser.email && password === storedUser.password) {
    msg.style.color = "green";
    msg.textContent = "Login successful! Redirecting...";

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = "index.html"; // Or your homepage
    }, 1500);
  } else {
    msg.style.color = "red";
    msg.textContent = "Invalid email or password.";
  }

  return false; // Prevent form submission
}
