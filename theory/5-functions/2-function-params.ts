// 📘 Lesson: Function Parameters in TypeScript
// In this lesson, you'll learn:
// - how function parameters work,
// - how to use multiple parameters,
// - how parameter order matters,
// - how to use type annotations for each parameter.

// -------------------------
// 🎯 Why use parameters?
// -------------------------
// Parameters allow you to customize a function's behavior by passing values in.

console.log("-------------------------")
console.log("🎯 Function Parameters")
console.log("-------------------------")

function introduce(name: string, age: number) {
    console.log(`My name is ${name} and I am ${age} years old.`)
}

introduce("Alice", 28)
introduce("Bob", 34)

// Required parameters must be provided when calling the function.
// If you don't provide them, TypeScript will show an error.

// ❌ This would cause an error (missing second argument):
// introduce("Charlie") // ❌ Error: Expected 2 arguments, but got 1.

// -------------------------
// ⚠️ Parameter order matters
// -------------------------
// TypeScript will match values based on their position.

console.log("-------------------------")
console.log("⚠️ Parameter Order Matters")
console.log("-------------------------")

function report(name: string, isAdmin: boolean) {
    console.log(`${name} has admin access: ${isAdmin}`)
}

report("Anna", true) // ✅ Correct
// report(true, "Anna") // ❌ Error: wrong order

// -------------------------
// ❓ Optional Parameters
// -------------------------
// Use `?` to mark a parameter as optional.

console.log("-------------------------")
console.log("❓ Optional Parameters")
console.log("-------------------------")

function showStatus(username: string, isOnline?: boolean) {
    if (isOnline) {
        console.log(`${username} is online.`)
    } else {
        console.log(`${username} is offline or status unknown.`)
    }
}

showStatus("Tom") // No second argument – isOnline is undefined
showStatus("Jane", true) // Second argument is provided

// -------------------------
// ⚙️ Default Parameters
// -------------------------
// You can set a default value in case no value is passed in.

console.log("-------------------------")
console.log("⚙️ Default Parameters")
console.log("-------------------------")

function calculatePrice(price: number, tax: number = 0.23) {
    const total = price + price * tax
    console.log(`Total price (with tax): ${total}`)
}

calculatePrice(100) // Uses default tax 0.23
calculatePrice(100, 0.1) // Uses custom tax 0.1

// -------------------------
// 🧠 Summary:
// -------------------------
// - Parameters are inputs for functions
// - Use `name: type` syntax for each parameter
// - Parameter order is important
// - Always annotate parameter types for clarity

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Function Parameters: https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-type-annotations
// • Optional Parameters: https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters
// • Default Parameters: https://www.typescriptlang.org/docs/handbook/2/functions.html#default-parameters

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
