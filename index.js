import BankAccount from "./bankAccount.js";

//Creating new instances of BankAccount class
const bankAccount1 = (31031195, "Jay Perkins", 1000);
const bankAccount2 = (18021994, "Ariza Sanchez", 0);

//Depositing money
bankAccount1.deposit(100);
bankAccount2.deposit(2500);

//Withdrawing money
bankAccount1.withdraw(500);
bankAccount2.withdraw(250);

//Checking bank balance
bankAccount1.checkBalance();
bankAccount2.checkBalance();