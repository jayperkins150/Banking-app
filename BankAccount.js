export default class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) return "Deposit amount must be greater than zero.";
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}.`;
  }

  withdraw(amount) {
    if (amount <= 0) return "Withdrawal amount must be greater than zero.";
    if (amount > this.balance) return "Insufficient funds.";
    this.balance -= amount;
    return `You withdrew $${amount}. Remaining balance: $${this.balance}.`;
  }

  checkBalance() {
    return `Current balance for ${this.accountHolder}: $${this.balance}`;
  }
}

