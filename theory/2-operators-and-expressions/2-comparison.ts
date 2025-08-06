// 📘 Lesson: Comparison Operators in TypeScript
// In this lesson, you'll learn how to compare values using comparison operators.
// - strict comparison (===, !==) (pl: porównanie ścisłe)
// - loose comparison (==, !=) (pl: porównanie luźne)
// - greater than (>), less than (<)
// - greater than or equal (>=), less than or equal (<=)

// -------------------------
// 👉 Equal and Not Equal
// -------------------------
console.log("-------------------------")
console.log("👉 Equal and Not Equal")
console.log("-------------------------")

const a: number = 5
const b: number = 10

console.log("a:", a) // 5
console.log("b:", b) // 10

console.log("a == b:", a == b) // false (equal)
console.log("a != b:", a != b) // true (not equal)

// Loose comparison ignores types!
const c: number = 5
const d: any = "5"
console.log("c == d:", c == d) // true (loose: values are equal, types ignored)

// summary:
// a == b checks if values are equal (ignores type)
// a != b checks if values are not equal (ignores type)

// -------------------------
// 🔐 Strict Equal and Not Strict Equal
// -------------------------
// Strict checks also compare the type.

console.log("-------------------------")
console.log("🔐 Strict Equal and Not Strict Equal")
console.log("-------------------------")

const x: any = 5
const y: string = "5"

console.log("x:", x) // 5
console.log("y:", y) // "5"

console.log("x == y:", x == y) // true (values are equal, types are ignored!)
console.log("x === y:", x === y) // false (strict: type matters)
console.log("x !== y:", x !== y) // true (strict not equal)

// -------------------------
// <> Greater / Less Than
// -------------------------
console.log("-------------------------")
console.log("<> Greater / Less Than")
console.log("-------------------------")

const score: number = 80
const passingScore: number = 70

console.log("score:", score)
console.log("passingScore:", passingScore)

console.log("score > passingScore:", score > passingScore) // true
console.log("score < passingScore:", score < passingScore) // false

// -------------------------
// 🧮 Greater / Less Than or Equal
// -------------------------
console.log("-------------------------")
console.log("🧮 Greater / Less Than or Equal")
console.log("-------------------------")

const points: number = 100
const maxPoints: number = 100

console.log("points:", points)
console.log("maxPoints:", maxPoints)

console.log("points >= maxPoints:", points >= maxPoints) // true
console.log("points <= maxPoints:", points <= maxPoints) // true

// -------------------------
// 🧠 Summary:
// -------------------------
// ==   Equal (values)
// !=   Not equal (values)
// ===  Strict equal (values + types)
// !==  Strict not equal (values + types)
// >    Greater than
// <    Less than
// >=   Greater than or equal
// <=   Less than or equal

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Comparison Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators
// • Equality Comparisons: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// • TypeScript Type System: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
