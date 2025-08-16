// 📘 Lesson: Classes in TypeScript
// In this lesson, you'll learn what classes are, how to create them, and how to use them to model real-world objects.

// -------------------------
// 🔒 Access Modifiers
// -------------------------
// `public` (default) - accessible everywhere
// `private` - accessible only inside the class
// `protected` - accessible inside the class and subclasses

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - simple example")
console.log("-------------------------\n")

class User {
    // Public property can be accessed from anywhere
    public username: string

    // Private property can only be accessed within the class
    private password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    // Public method to get the username
    public getUsername(): string {
        return this.username
    }

    // Public method to set a new password
    public setPassword(oldPassword: string, newPassword: string): void {
        if (this.checkPassword(oldPassword)) {
            this.password = newPassword
            console.log("Password updated successfully.")
        } else {
            console.log("Old password is incorrect.")
        }   
    }

    // Private method to check password (not accessible outside)
    private checkPassword(input: string): boolean {
        return this.password === input
    }
}

const user = new User("john_doe", "securePassword123")
console.log(user.getUsername()) // john_doe
user.setPassword("securePassword123", "newSecurePassword456") // Password updated successfully.
// user.checkPassword("securePassword123") // Error: Property 'checkPassword' is private

// lets provide incorrect old password
user.setPassword("wrongPassword", "anotherSecurePassword") // Old password is incorrect!

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
