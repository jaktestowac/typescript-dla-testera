// 📘 Lesson: Classes in TypeScript
// In this lesson, you'll learn what classes are, how to create them, and how to use them to model real-world objects.

// -------------------------
// 🔒 Access Modifiers
// -------------------------
// `public` (default) - accessible everywhere
// `private` - accessible only inside the class
// `protected` - accessible inside the class and subclasses

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - example 1")
console.log("-------------------------\n")

// only properties that are public can be accessed outside the class!

class Person {
    // Public property can be accessed from anywhere
    public name: string
    // when no access modifier is specified, it defaults to public
    // so this is also a public property
    nameWithoutModifier: string

    // Private property can only be accessed within the class
    private age: number
    // Protected property can be accessed in subclasses
    protected address: string

    constructor(name: string, age: number, address: string) {
        this.name = name
        this.nameWithoutModifier = name
        this.age = age
        this.address = address
    }
}

const person = new Person("Alice", 30, "123 Main St")
console.log(person.name) // Alice
console.log(person.nameWithoutModifier) // Alice
// person.age // Error: Property 'age' is private and only accessible within class 'Person'.
// person.address // Error: Property 'address' is protected and only accessible within class 'Person

console.log("\n-------------------------")
console.log("🔒 Access Modifiers - example 2")
console.log("-------------------------\n")

class User {
    // Public property can be accessed from anywhere
    private username: string

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

    public changeUsername(newUsername: string, password: string): void {
        if (this.checkPassword(password)) {
            this.username = newUsername
            console.log("Username updated successfully.")
        } else {
            console.log("Password is incorrect. Cannot change username.")
        }
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
