// login btn event handler
const fontPage = document.getElementById("font-page");
const dashboardPage = document.getElementById("dashboard-page");
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
  fontPage.style.display = "none";
  dashboardPage.style.display = "block";
});
