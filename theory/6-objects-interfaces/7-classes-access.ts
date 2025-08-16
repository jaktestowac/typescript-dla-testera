// 📘 Lesson: Classes in TypeScript
// In this lesson, you'll learn what classes are, how to create them, and how to use them to model real-world objects.

// -------------------------
// 🔒 Access Modifiers
// -------------------------
// `public` (default) - accessible everywhere
// `private` - accessible only inside the class
// `protected` - accessible inside the class and subclasses

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - more complex example")
console.log("-------------------------\n")

class BankAccount {
    // Public properties can be accessed from anywhere
    public accountNumber: string
    // property without an access modifier is public by default
    owner: string

    // Private properties can only be accessed within the class
    private balance: number

    constructor(initialBalance: number) {
        // `this` refers to the current instance of the class
        this.accountNumber = "123456789"
        this.owner = "John Doe"
        // `private` properties can only be set within the class
        this.balance = initialBalance
    }

    // methods can also have access modifiers
    public getBalance(): number {
        // `private` properties can be accessed within the class
        return this.balance
    }

    // methods without an access modifier are public by default
    deposit(amount: number) {
        this.balance += amount
        console.log(`Deposited ${amount}. New balance: ${this.balance}`)
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient funds!")
        } else {
            this.balance -= amount
            console.log(`Withdrew ${amount}. Remaining balance: ${this.balance}`)
        }
    }
}

const account = new BankAccount(100)
account.deposit(50)  // Deposited 50. New balance: 150
account.withdraw(200) // Insufficient funds!

// we can access public properties and methods
console.log(`Account Number: ${account.accountNumber}`) // Account Number: 123456
console.log(`Owner: ${account.owner}`) // Owner: John Doe
console.log(`Balance: ${account.getBalance()}`) // Balance: 150

// -------------------------
// 🧠 Summary:
// -------------------------
// - Access modifiers control visibility

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Access Modifiers: https://www.typescriptlang.org/docs/handbook/2/classes.html#public-private-and-protected-modifiers

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
