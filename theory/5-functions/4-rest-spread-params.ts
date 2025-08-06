// 📘 Lesson: Rest and Spread Parameters in TypeScript
// In this lesson, you'll learn:
// - how to handle a flexible number of function arguments using `rest`
// - how to use `spread` to pass values or copy arrays

// Simple Explanation:
// "Rest" lets you collect many values into a single array.
// "Spread" lets you take an array (or object) and expand it out into individual values.

// -------------------------
// 📦 Rest Parameters
// -------------------------
// Rest parameters allow you to collect multiple arguments into a single array

console.log("-------------------------")
console.log("📦 Rest Parameters")
console.log("-------------------------")

function logSkills(name: string, ...skills: string[]) {
    console.log(`${name}'s skills:`)
    console.log(skills)
}

logSkills("Anna", "JS", "HTML", "CSS", "TypeScript")

// On console you will see:
// The `...skills` collects all extra arguments into an array named `skills`.

// -------------------------
// 🌀 Spread Operator
// -------------------------
// Spread is the opposite of rest – it expands an array into individual values

console.log("-------------------------")
console.log("🌀 Spread Operator")
console.log("-------------------------")

const frontendSkills = ["HTML", "CSS", "JS"]
const backendSkills = ["Node.js", "Express"]

const allSkills = [...frontendSkills, ...backendSkills]

console.log("All skills:", allSkills)

// You can also use spread to pass arguments into a function

function sumOfNumbers(...numbers: number[]) {
    let sum = 0
    for (const num of numbers) {
        sum += num
    }
    return sum
}

const numbers: number[] = [2, 4, 6]

console.log("Sum:", sumOfNumbers(...numbers)) // 12

// -------------------------
// 🧠 Summary
// -------------------------
// - Use `...rest` to collect remaining arguments into an array
// - Use `...spread` to unpack arrays into individual elements
// - Very useful for flexible input and combining arrays

// Examples:
// function example(...args: string[]) { ... }
// const copy = [...originalArray]
// const full = [...part1, ...part2]

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Spread Operator: https://www.typescriptlang.org/docs/handbook/2/functions.html#the-spread-operator
// • Rest Parameters: https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
