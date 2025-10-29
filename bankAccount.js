// Defining the bank account class
class BankAccount () {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    
    // Defining the deposit function
    deposit(amount) {
        this.balance += amount;
        console.log("you have deposited $${amount}. Your current balance is: $${this.balance}");
    }

    // Defining the withdraw function
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log("$${amount} withdrawn, your current balance is: $${this.balance}");
        }
    }

    // Defining the check balance function
    checkBalance() {
        console.log("The current balance for ${this.accountHolder} is: $${this.balance}");
    }
}

export default BankAccount;

