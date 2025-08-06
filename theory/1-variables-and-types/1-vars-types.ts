// 📘 Lesson: Variables, Types, and Type Inference
// In this lesson, you'll learn:
// - how to declare variables using `let` and `const`
// - how to work with basic types: number, string, and boolean
// - how TypeScript automatically understands (infers) the type of a variable

// -------------------------
// 🔡 Declaring variables
// -------------------------
// In TypeScript, you can declare variables using `let` or `const`.
// - `let` is used for variables that can change later
// - `const` is used for variables that should not change after being set
// - PS. There is also `var`, but it's not recommended for modern TypeScript code.
// This helps prevent accidental changes to important values.

console.log("-------------------------")
console.log("🔡 Declaring variables")
console.log("-------------------------")

let name = "Alice" // name can change later
const birthYear = 1990 // birthYear is fixed

console.log("Name:", name)
console.log("Birth year:", birthYear)

name = "Alicja" // ✅ allowed with let
// birthYear = 1991 // ❌ Error: const can't be changed

// -------------------------
// 🔢 Basic types: number, string, boolean
// -------------------------
console.log("-------------------------")
console.log("🔢 Basic types")
console.log("-------------------------")

let age: number = 33
let language: string = "TypeScript"
let isTester: boolean = true

console.log("Age:", age)
console.log("Language:", language)
console.log("Is tester:", isTester)

// -------------------------
// 🧠 Type Inference
// -------------------------
// TypeScript can figure out the type by looking at the value

console.log("-------------------------")
console.log("🧠 Type Inference")
console.log("-------------------------")

const city = "Warsaw"
const score = 100
const isReady = false

// You don't need to write `: string`, `: number`, or `: boolean` every time

console.log("City:", city)
console.log("Score:", score)
console.log("Is ready:", isReady)

// ✅ Good habit: use type inference when the type is clear
// ✅ Use explicit types when needed for clarity or safety

console.log("-------------------------")
console.log("🔄 Redeclaring types")
console.log("-------------------------")

let userId: string

// some code

userId = "abc"
console.log("User ID:", userId)
// userId = 123 // ❌ Error: can't assign number to string type

// but for constants, you must declare the type when you create it
// const userEmail: string // ❌ Error: const must be initialized

console.log("-------------------------")
console.log("String types")
console.log("-------------------------")

// String is a sequence of characters
const greeting: string = "Hello, TypeScript!"
console.log("Greeting:", greeting)

// You can use single quotes, double quotes, or backticks
const doubleQuote: string = "Double quotes are common"
const singleQuote: string = 'Single quotes are fine too. They allow to use "double quotes" inside'
const backtick: string = `Backticks allow for multi-line strings and interpolation`
console.log("Single quote:", singleQuote)
console.log("Double quote:", doubleQuote)
console.log("Backtick:", backtick)

// Why there are different quotes?
// - Single and double quotes are mostly interchangeable
// - You can also use single quotes inside double quotes and vice versa
// - Backticks allow for multi-line strings and string interpolation

const multiLine: string = `This is a multi-line string! 
You can write text on multiple lines without using \n.
It also allows for string interpolation: ${greeting}`

console.log("Multi-line string:", multiLine)

// -------------------------
// 🧠 Summary:
// -------------------------
// - `let` for changeable values, `const` for fixed values
// - Basic types: number, string, boolean
// - TypeScript can often guess the type for you (inference)
// - You can also declare types manually

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Variable Declarations: https://www.typescriptlang.org/docs/handbook/variable-declarations.html
// • Let and Const: https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
// • Everyday Types: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// • Primitives: string, number, boolean: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean
// • Type Annotations: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations
// • Type Inference: https://www.typescriptlang.org/docs/handbook/type-inference.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
