// Defining the bank account class
class bankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    
    // Defining the deposit function
    deposit(amount) {
        if (amount <= 0) {
            return "Deposit amount must be greater than zero.";
        }
        this.balance += amount;
        return `Successfully deposited $${amount}. New balance: $${this.balance}.`;
    }

    // Defining the withdraw function
    withdraw(amount) {
        if (amount <= 0) {
            return "Withdrawal amount must be greater than zero.";
        }
        if (amount > this.balance) {
            return "Insufficient funds.";
        }
        this.balance -= amount;
        return `You withdrew $${amount}. Remaining balance: $${this.balance}.`;
    }

    // Defining the check balance function
    checkBalance() {
        return `Current balance for ${this.accountHolder}: $${this.balance}`;
    }
}

export default bankAccount;

