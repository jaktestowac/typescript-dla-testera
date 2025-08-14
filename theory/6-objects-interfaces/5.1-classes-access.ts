// 📘 Lesson: Classes in TypeScript
// In this lesson, you'll learn what classes are, how to create them, and how to use them to model real-world objects.

// -------------------------
// 🔒 Access Modifiers
// -------------------------
// `public` (default) - accessible everywhere
// `private` - accessible only inside the class
// `protected` - accessible inside the class and subclasses

console.log("\n-------------------------")
console.log("🔒 Access Modifiers")
console.log("-------------------------\n")

class BankAccount {
    private balance: number

    constructor(initialBalance: number) {
        this.balance = initialBalance
    }

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
