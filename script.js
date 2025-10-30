// Show correct page based on login status
window.onload = function() {
  if (localStorage.getItem("loggedIn") === "true") {
    showCatalog();
  } else {
    showLogin();
  }
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    showCatalog();
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  showLogin();
}

function showCatalog() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("catalogPage").style.display = "block";
}

function showLogin() {
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("catalogPage").style.display = "none";
}
