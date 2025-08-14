// 📘 Lesson: Function Overloading in TypeScript
// In this lesson, you'll learn how to create multiple function signatures for the same function.

// -------------------------
// 🔄 What is function overloading?
// -------------------------
// Function overloading allows you to define multiple function signatures for the same function.
// TypeScript will choose the correct signature based on how you call the function.

console.log("\n-------------------------")
console.log("🔄 Basic Function Overloading")
console.log("-------------------------\n")

// Function overloads (signatures)
function combine(a: string, b: string): string
function combine(a: number, b: number): number
function combine(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") {
        return a + b
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b
    }
    throw new Error("Invalid arguments")
}

// Now TypeScript knows the return type based on input types
const result1 = combine("Hello", "World") // TypeScript knows this returns string
const result2 = combine(5, 10) // TypeScript knows this returns number

console.log("String result:", result1)
console.log("Number result:", result2)

// -------------------------
// 🔄 Overloading with different parameter counts
// -------------------------
console.log("\n-------------------------")
console.log("🔄 Different parameter counts")
console.log("-------------------------\n")

// Function overloads
function createUser(name: string): { name: string; age?: number }
function createUser(name: string, age: number): { name: string; age: number }
function createUser(name: string, age?: number): { name: string; age?: number } {
    if (age !== undefined) {
        return { name, age }
    }
    return { name }
}

const user1 = createUser("Alice") // age is optional
const user2 = createUser("Bob", 30) // age is required

console.log("User 1:", user1)
console.log("User 2:", user2)

// -------------------------
// 🔄 Overloading with arrays
// -------------------------
console.log("\n-------------------------")
console.log("🔄 Overloading with arrays")
console.log("-------------------------\n")

// Function overloads
function processItems(items: string[]): string
function processItems(items: number[]): number
function processItems(items: string[] | number[]): string | number {
    if (items.length === 0) {
        throw new Error("Array cannot be empty")
    }
    
    if (typeof items[0] === "string") {
        return (items as string[]).join(", ")
    } else {
        return (items as number[]).reduce((sum, num) => sum + num, 0)
    }
}

const stringResult = processItems(["apple", "banana", "orange"])
const numberResult = processItems([1, 2, 3, 4, 5])

console.log("String result:", stringResult)
console.log("Number result:", numberResult)

// -------------------------
// 🔄 Method overloading in classes
// -------------------------
console.log("\n-------------------------")
console.log("🔄 Method overloading in classes")
console.log("-------------------------\n")

class Calculator {
    add(a: number, b: number): number
    add(a: string, b: string): string
    add(a: number | string, b: number | string): number | string {
        if (typeof a === "number" && typeof b === "number") {
            return a + b
        } else if (typeof a === "string" && typeof b === "string") {
            return a + b
        }
        throw new Error("Invalid arguments")
    }
}

const calc = new Calculator()
console.log("Number addition:", calc.add(5, 3))
console.log("String concatenation:", calc.add("Hello", "World"))

// -------------------------
// ⚠️ Important: Implementation signature
// -------------------------
console.log("\n-------------------------")
console.log("⚠️ Implementation signature")
console.log("-------------------------\n")

// The implementation signature must be compatible with all overloads
// It's usually more general than the overload signatures

function example(a: string): string
function example(a: number): number
// Implementation signature - must handle all cases
function example(a: string | number): string | number {
    return a
}

// -------------------------
// 🔄 Overloading with optional parameters
// -------------------------
console.log("\n-------------------------")
console.log("🔄 Optional parameters")
console.log("-------------------------\n")

function formatMessage(message: string): string
function formatMessage(message: string, prefix: string): string
function formatMessage(message: string, prefix?: string): string {
    if (prefix) {
        return `${prefix}: ${message}`
    }
    return message
}

console.log(formatMessage("Hello")) // "Hello"
console.log(formatMessage("Hello", "INFO")) // "INFO: Hello"

// -------------------------
// 🧠 When to use function overloading?
// -------------------------
// Use function overloading when:
// ✅ You have a function that behaves differently based on input types
// ✅ You want better type safety and IntelliSense
// ✅ You want to provide multiple ways to call the same function

// Don't use when:
// ❌ The function behavior is the same regardless of input types
// ❌ You can use union types instead
// ❌ It makes the code more complex without benefits

// -------------------------
// 🧠 Best practices:
// -------------------------
// - Keep overloads simple and clear
// - Make sure implementation handles all cases
// - Use descriptive parameter names
// - Consider if union types would be simpler

// -------------------------
// 🧠 Summary:
// -------------------------
// - Function overloading provides multiple signatures for one function
// - TypeScript chooses the correct signature based on how you call it
// - Implementation signature must handle all overload cases
// - Useful for functions that behave differently with different input types
// - Provides better type safety and developer experience

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Function Overloads: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
// • Method Overloads: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
// • Type Guards: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {} 