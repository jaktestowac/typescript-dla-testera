// 📘 Lesson: Enums in TypeScript
// In this lesson, you'll learn what enums are and how they help you organize related values
// in a clear, readable, and error-resistant way.

// -------------------------
// 🧠 What is an enum?
// -------------------------
// "Enum" stands for "enumeration".
// It's a special feature in TypeScript that lets you define a group of related values using names.

// ✅ Enums are useful when:
// - You have a set of fixed options (like days of the week, user roles, or status types)
// - You want to avoid hardcoded strings or numbers in your code
// - You want better autocompletion and error checking

// 🧠 Think of enums like a labeled list of choices you can reuse anywhere in your code.

console.log("\n-------------------------")
console.log("🧠 Basic enum example")
console.log("-------------------------\n")

// Without enums, you might use strings or numbers directly:
const status1: string = "success"
const status2: string = "error"
const status3: string = "loading"

// Then to use them, you have to remember the exact strings:
function printStatus(status: string) {
    if (status === "success") {
        console.log("Operation was successful!")
    } else if (status === "error") {
        console.log("There was an error.")
    } else if (status === "loading") {
        console.log("Loading...")
    } else {
        console.log("Unknown status")
    }
}

// You can group them using an enum:
enum Status {
    Success,
    Error,
    Loading
}

// How it looks on console?

console.log(Status)

// How to interpret this?
// - `Status.Success` is 0
// - `Status.Error` is 1
// - `Status.Loading` is 2

console.log("\n-------------------------")
console.log("🟢 Using enums")
console.log("-------------------------\n")

// Now you can use the enum values:

const currentStatus: Status = Status.Loading
console.log("Current status (number):", currentStatus) // 2
console.log("Status name:", Status[currentStatus]) // "Loading"

// Example of a function using enum:
function printEnumStatus(status: Status) {
    if (status === Status.Success) {
        console.log("Operation was successful!")
    } else if (status === Status.Error) {
        console.log("There was an error.")
    } else if (status === Status.Loading) {
        console.log("Loading...")
    } else {
        console.log("Unknown status")
    }
}

// -------------------------
// 🟢 Enum with custom values
// -------------------------
// By default, values are numbers (starting from 0).
// You can also assign custom string values:

console.log("\n-------------------------")
console.log("🟢 Enum with custom string values")
console.log("-------------------------\n")

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

console.log(Role)

console.log("\n-------------------------")
console.log("🟢 Using enums with custom string values")
console.log("-------------------------\n")


const userRole: Role = Role.User
console.log("User role:", userRole) // "USER"
console.log("Role name:", Role[userRole]) // "User"

// Usage: 
function printUserRole(role: Role) {
    if (role === Role.Admin) {
        console.log("You have admin access.")
    } else if (role === Role.User) {
        console.log("You are a regular user.")
    } else if (role === Role.Guest) {
        console.log("You are browsing as a guest.")
    } else {
        console.log("Unknown role")
    }
}

printUserRole(Role.Admin)
printUserRole(Role.Guest)
printUserRole('USER' as Role) // Works, but not recommended
printUserRole('INVALID' as Role) // TypeScript won't catch this at compile time

// -------------------------
// ✅ Why use enums?
// -------------------------
// - Groups related values clearly
// - Avoids typos in strings
// - Makes code more readable
// - Easier to change values in one place

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Enums: https://www.typescriptlang.org/docs/handbook/enums.html
// • Const Enums: https://www.typescriptlang.org/docs/handbook/enums.html#const-enums
// • String Enums: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
