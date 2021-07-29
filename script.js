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
//   const depositInput = document.getElementById("depositInput").value;
//   const depositNumber = parseFloat(depositInput);
    const depositNumber = getInputNumber("depositInput");
  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit)
  // const total = depositNumber + currentDepositNumber;
  // document.getElementById("currentDeposit").innerText = total;
  calculate("currentDeposit", depositNumber);
  calculate("currentBalance", depositNumber);

  document.getElementById("depositInput").value = "";
});

// withdraw btn event handler
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawNumber = parseFloat(withdrawAmount);
   const withdrawNumber =  getInputNumber("withdrawAmount");
  calculate("currentWithdraw", withdrawNumber);
  calculate("currentBalance", -1 * withdrawNumber);

  document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}

function calculate(id, depositNumber) {
  const currentAmount = document.getElementById(id).innerText;
  const amountNumber = parseFloat(currentAmount);
  const total = depositNumber + amountNumber;
  document.getElementById(id).innerText = total;
}
