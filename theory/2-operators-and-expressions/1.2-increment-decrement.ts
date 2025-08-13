// 📘 Lesson: Increment and Decrement Operators in TypeScript
// In this lesson, you'll learn how to use increment (++) and decrement (--) operators in TypeScript.

// -------------------------
// ➕➕ Increment (++) and ➖➖ Decrement (--)
// -------------------------
// These operators increase or decrease a number by 1
// i++ - means `i = i + 1`
// i-- - means `i = i - 1`

// They can be used in two ways:
// - `i++` (postfix) returns the value before incrementing
// - `++i` (prefix) increments first, then returns the value

console.log("\n-------------------------")
console.log("➕➕ Increment (++)")
console.log("-------------------------\n")

let i: number = 5
console.log("Initial i:", i) // 5
console.log("i after ++:", i++) // 5 (returns 5, then increments to 6)
console.log("i after increment:", i) // 6

console.log("Incrementing a number by 1 (++i)")

let k: number = 7
console.log("Initial k:", k) // 7
console.log("k after increment:", ++k) // 8
console.log("k after ++:", k) // 8 (increments to 8, then returns it)

console.log("\n-------------------------")
console.log("➖➖ Decrement (--)")
console.log("-------------------------\n")

console.log("Decrementing a number by 1 (i--)")

let j: number = 10
console.log("Initial j:", j) // 10
console.log("j after --:", j--) // 10 (returns 10, then decrements to 9)
console.log("j after decrement:", j) // 9

console.log("Decrementing a number by 1 (--i)")

let l: number = 12
console.log("Initial l:", l) // 12
console.log("l after --:", --l) // 11
console.log("l after decrement:", l) // 11
console.log("l after --:", l--) // 11 (returns 11, then decrements to 10)
console.log("l after decrement:", l) // 10

// -------------------------
// 🧠 Summary:
// -------------------------
// - `i++` and `++i` both increment `i` by 1, but differ in when they return the value.
// - `i--` and `--i` both decrement `i` by 1, but differ in when they return the value.
// - Use `++` or `--` when you need to adjust a number by 1.
// - These operators are often used in loops or counters
// - Be careful with the order of operations, especially in complex expressions.

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Increment Operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// • Decrement Operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
