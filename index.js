import bankAccount from "./bankAccount.js";

// Create some accounts
const accounts = [
  new bankAccount(31031195, "Jay Perkins", 1000),
  new bankAccount(18021994, "Ariza Sanchez", 500),
];

let currentAccount = null;

// Login function
function login() {
  const accNumber = document.getElementById("accountNumber").value;
  const account = accounts.find((acc) => acc.accountNumber == accNumber);
  const message = document.getElementById("message");

  if (account) {
    currentAccount = account;
    message.textContent = `Welcome, ${account.accountHolder}!`;
    document.querySelector(".login-section").style.display = "none";
    document.querySelector(".bank-section").style.display = "block";
  } else {
    message.textContent = "Account not found. Please try again.";
  }
}

// Deposit function
function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  const result = currentAccount.deposit(amount);
  updateMessage(result);
}

// Withdraw function
function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  const result = currentAccount.withdraw(amount);
  updateMessage(result);
}

// Check balance function
function checkBalance() {
  updateMessage(currentAccount.checkBalance());
}

// Helper to show messages
function updateMessage(text) {
  document.getElementById("message").textContent = text;
}

// Attach event listeners
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("depositBtn").addEventListener("click", deposit);
document.getElementById("withdrawBtn").addEventListener("click", withdraw);
document.getElementById("balanceBtn").addEventListener("click", checkBalance);