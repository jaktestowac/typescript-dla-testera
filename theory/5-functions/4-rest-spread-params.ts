// 📘 Lesson: Rest and Spread Parameters in TypeScript
// In this lesson, you'll learn:
// - how to handle a flexible number of function arguments using `rest`
// - how to use `spread` to pass values or copy arrays

// Simple Explanation:
// "Rest" (reszta) lets you collect many values into a single array.
// "Spread" (rozproszenie) lets you take an array (or object) and expand it out into individual values.

// -------------------------
// 📦 Rest Parameters
// -------------------------
// Rest parameters allow you to collect multiple arguments into a single array

console.log("\n-------------------------")
console.log("📦 Rest Parameters")
console.log("-------------------------\n")

function logSkills(name: string, ...skills: string[]): void {
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

console.log("\n-------------------------")
console.log("🌀 Spread Operator")
console.log("-------------------------\n")

const frontendSkills = ["HTML", "CSS", "JS"]

console.log("Frontend skills:", frontendSkills)

// You can use spread to combine these arrays into one

console.log("Frontend skills (after spread):", ...frontendSkills)

console.log("\n-------------------------")
console.log("🌀 Spread Operator for joining arrays")
console.log("-------------------------\n")

const backendSkills = ["Node.js", "Express"]

console.log("Frontend skills:", frontendSkills)
console.log("Backend skills:", backendSkills)

// You can combine arrays using spread

const allSkills = [...frontendSkills, ...backendSkills]

console.log("After joining with spread...")
console.log("All skills:", allSkills)

console.log("\n-------------------------")
console.log("🌀 Spread Operator in functions")
console.log("-------------------------\n")

// You can also use spread to pass arguments into a function

function sumOfNumbers(...numbers: number[]): number {
    let sum = 0
    for (const num of numbers) {
        sum += num
    }
    return sum
}

const numbers: number[] = [2, 4, 6]

console.log("Numbers array:", numbers)

// Using spread to pass the array elements as individual arguments
console.log("Sum of numbers array:")
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
