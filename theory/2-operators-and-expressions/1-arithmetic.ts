// 📘 Lesson: Arithmetic Operators in TypeScript
// In this lesson, you'll learn how to do basic math in TypeScript using arithmetic operators.

// -------------------------
// ➕ Addition
// -------------------------
console.log("\n-------------------------")
console.log("➕ Addition")
console.log("-------------------------\n")

const apples = 3
const bananas = 5

console.log("Number of apples:", apples)
console.log("Number of bananas:", bananas)

const totalFruits = apples + bananas
console.log("Total fruits:", totalFruits) // 8

// -------------------------
// ➖ Subtraction
// -------------------------
console.log("\n-------------------------")
console.log("➖ Subtraction")
console.log("-------------------------\n")

const ageJohn = 30
const ageAnna = 25

console.log("John's age:", ageJohn)
console.log("Anna's age:", ageAnna)

const ageDifference = ageJohn - ageAnna
console.log("Age difference:", ageDifference) // 5

// -------------------------
// ✖️ Multiplication
// -------------------------
console.log("\n-------------------------")
console.log("✖️ Multiplication")
console.log("-------------------------\n")

const pricePerItem = 10
const quantity = 4

console.log("Price per item:", pricePerItem)
console.log("Quantity:", quantity)

const totalPrice = pricePerItem * quantity
console.log("Total price:", totalPrice) // 40

// -------------------------
// ➗ Division
// -------------------------
console.log("\n-------------------------")
console.log("➗ Division")
console.log("-------------------------\n")

const totalMinutes = 90
const minutesPerEpisode = 30

console.log("Total minutes watched:", totalMinutes)
console.log("Minutes per episode:", minutesPerEpisode)

const episodesWatched = totalMinutes / minutesPerEpisode
console.log("Episodes watched:", episodesWatched) // 3

// -------------------------
// 🔢 Modulo (Remainder)
// -------------------------
// The `%` operator returns the remainder after division

console.log("\n-------------------------")
console.log("🔢 Modulo (Remainder)")
console.log("-------------------------\n")

const totalChocolates = 10
const people = 3

console.log("Total chocolates:", totalChocolates)
console.log("People:", people)

const chocolatesLeft = totalChocolates % people
console.log("Chocolates left:", chocolatesLeft) // 1

// -------------------------
// 🧠 Summary:
// -------------------------
// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulo (remainder after division)

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Everyday Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// • Arithmetic Operators in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
