import BankAccount from "./BankAccount.js";

// Create some accounts
const accounts = [
  new BankAccount(31031195, "Jay Perkins", 1000),
  new BankAccount(18021994, "Ariza Sanchez", 500),
];

let currentAccount = null;

// Login function
function login() {
  const accNumber = document.getElementById("accountNumber").value;
  const account = accounts.find((acc) => acc.accountNumber == accNumber);
  const message = document.getElementById("message");

  if (account) {
    currentAccount = account;
    message.textContent = `Welcome, ${account.accountHolder}! Balance: $${account.balance}`;
    document.querySelector(".login-section").style.display = "none";
    document.querySelector(".bank-section").style.display = "block";
  } else {
    message.textContent = "Account not found. Please try again.";
  }
}

// Deposit function
function deposit() {
  if (!currentAccount) return updateMessage("Please log in first.");
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) return updateMessage("Enter a valid amount.");
  updateMessage(currentAccount.deposit(amount));
  document.getElementById("amount").value = "";
}

// Withdraw function
function withdraw() {
  if (!currentAccount) return updateMessage("Please log in first.");
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) return updateMessage("Enter a valid amount.");
  updateMessage(currentAccount.withdraw(amount));
  document.getElementById("amount").value = "";
}

// Check balance function
function checkBalance() {
  if (!currentAccount) return updateMessage("Please log in first.");
  updateMessage(currentAccount.checkBalance());
}

// Helper to show messages
function updateMessage(text) {
  document.getElementById("message").textContent = text;
}

// Event listeners
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("depositBtn").addEventListener("click", deposit);
document.getElementById("withdrawBtn").addEventListener("click", withdraw);
document.getElementById("balanceBtn").addEventListener("click", checkBalance);