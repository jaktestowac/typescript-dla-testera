// 📘 Lesson: Assignment Operators in TypeScript
// In this lesson, you'll learn how to
// - assign values to variables using different assignment operators.

// PL: Assignment Operator (Operator Przypisania)

// -------------------------
// 🟢 Basic Assignment (=)
// -------------------------
console.log("\n-------------------------")
console.log("🟢 Basic Assignment (=)")
console.log("-------------------------\n")

let score: number = 10
console.log("Initial score:", score) // 10

// We simply assign the value 10 to the variable `score`

// -------------------------
// ➕ Add and Assign (+=)
// -------------------------
console.log("\n-------------------------")
console.log("➕ Add and Assign (+=)")
console.log("-------------------------\n")

score += 5
console.log("Score after += 5:", score) // 15

// Same as: score = score + 5

// -------------------------
// ➖ Subtract and Assign (-=)
// -------------------------
console.log("\n-------------------------")
console.log("➖ Subtract and Assign (-=)")
console.log("-------------------------\n")

score -= 3
console.log("Score after -= 3:", score) // 12

// Same as: score = score - 3

// -------------------------
// ✖️ Multiply and Assign (*=)
// -------------------------
console.log("\n-------------------------")
console.log("✖️ Multiply and Assign (*=)")
console.log("-------------------------\n")

score *= 2
console.log("Score after *= 2:", score) // 24

// Same as: score = score * 2

// -------------------------
// ➗ Divide and Assign (/=)
// -------------------------
console.log("\n-------------------------")
console.log("➗ Divide and Assign (/=)")
console.log("-------------------------\n")

score /= 4
console.log("Score after /= 4:", score) // 6

// Same as: score = score / 4

// -------------------------
// 🧠 Summary:
// -------------------------
// =   → Assign value
// +=  → Add and assign
// -=  → Subtract and assign
// *=  → Multiply and assign
// /=  → Divide and assign

// These operators help you write cleaner and shorter code!

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Assignment Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators
// • Arithmetic Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// • TypeScript Variables: https://www.typescriptlang.org/docs/handbook/variable-declarations.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
