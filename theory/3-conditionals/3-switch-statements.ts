// 📘 Lesson: Switch Statement in TypeScript
// In this lesson, you'll learn how to use the `switch` statement to handle multiple conditions more clearly.

// -------------------------
// 🧠 What is a switch statement?
// -------------------------
// A `switch` statement is a cleaner way to run different code based on the value of a variable.
// It's often used instead of long chains of `if`, `else if`, and `else`.

// 🧠 Think of it like a multiple-choice test:
// - You check the value of a variable
// - Depending on the value, a specific block of code will run

// -------------------------
// 🔄 Basic Example: Weekdays
// -------------------------
console.log("-------------------------")
console.log("🔄 switch – example with days")
console.log("-------------------------")

let day = "Monday"

switch (day) {
    case "Monday":
        console.log("Start of the week 😐")
        break
    case "Friday":
        console.log("Almost weekend! 🎉")
        break
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend! 🏖")
        break
    default:
        console.log("Just another day")
}

// -------------------------
// ❓ Why use `break`?
// -------------------------
// - Without `break`, the code will keep running the next cases
// - This is called "fall-through", and it can lead to bugs if you're not careful

// Try this example to see what happens without break:
console.log("-------------------------")
console.log("❌ No break – unexpected behavior")
console.log("-------------------------")

let fruit = "apple"

switch (fruit) {
    case "apple":
        console.log("Apples are red")
    case "banana":
        console.log("Bananas are yellow")
    case "orange":
        console.log("Oranges are orange")
    default:
        console.log("Unknown fruit")
}

// Output:
// Apples are red
// Bananas are yellow
// Oranges are orange
// Unknown fruit

// 🧠 As you can see, it runs everything after "apple" – use `break` to stop that!

// -------------------------
// 🧠 Summary:
// -------------------------
// - `switch` checks the value of a variable
// - `case` blocks define the value to match
// - `break` stops the code from continuing to other cases
// - `default` runs when no case matches

// -------------------------
// ✅ Mini Practice
// -------------------------
// Change the value of `status` and see what message appears

let status = "loading"

switch (status) {
    case "loading":
        console.log("Please wait...")
        break
    case "success":
        console.log("Data loaded successfully ✅")
        break
    case "error":
        console.log("Oops, something went wrong ❌")
        break
    default:
        console.log("Unknown status")
}

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
