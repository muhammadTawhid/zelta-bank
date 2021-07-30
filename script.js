// login btn event handler
const fontPage = document.getElementById("font-page");
const dashboardPage = document.getElementById("dashboard-page");
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
  fontPage.style.display = "none";
  dashboardPage.style.display = "block";
});

// Deposit btn event handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  const depositNumber = getInputNumber("depositInput");

  calculate("currentDeposit", depositNumber);
  calculate("currentBalance", depositNumber);

  document.getElementById("depositInput").value = "";
});

// withdraw btn event handler
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");

  calculate("currentWithdraw", withdrawNumber);
  calculate("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function calculate(id, depositNumber) {
  const currentAmount = document.getElementById(id).innerText;
  const amountNumber = parseFloat(currentAmount);
  const total = depositNumber + amountNumber;
  document.getElementById(id).innerText = total;
}
