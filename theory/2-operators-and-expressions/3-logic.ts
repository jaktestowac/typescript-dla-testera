// 📘 Lesson: Logical Operators in TypeScript
// In this lesson, you'll learn how to work with logic in TypeScript using:
// - AND (&&): when both conditions must be true
// - OR (||): when at least one condition must be true
// - NOT (!): to reverse a boolean value

// -------------------------
// 🧠 Think Like This (Everyday Logic)
// -------------------------
// Logical operators are like yes/no (true/false) questions in real life.

// 🟢 AND (&&) → Both must be true:
// "Can I go to the party? I need to be invited AND have a ticket."

// 🔴 OR (||) → One is enough:
// "Can I get in? I have a pass OR I'm on the guest list."

// 🚫 NOT (!) → Opposite:
// "I'm NOT tired" → means you're awake.

// Now let's turn that kind of thinking into TypeScript code!

// -------------------------
// 🟢 Logical AND (&&)
// -------------------------
// Both conditions must be true for the result to be true.

console.log("\n-------------------------")
console.log("🟢 Logical AND (&&)")
console.log("-------------------------\n")

const isAdult: boolean = true
const hasID: boolean = true

console.log("isAdult:", isAdult)
console.log("hasID:", hasID)

const canEnterClub = isAdult && hasID
console.log("Can enter club:", canEnterClub)

// Example: one condition is false
const isMember: boolean = false
const hasTicket: boolean = true

const canEnterEvent = isMember && hasTicket
console.log("Can enter event:", canEnterEvent) // false – one is false

// -------------------------
// 🔴 Logical OR (||)
// -------------------------
// Only one condition needs to be true for the result to be true.

console.log("\n-------------------------")
console.log("🔴 Logical OR (||)")
console.log("-------------------------\n")

const hasKey: boolean = false
const knowsPassword: boolean = true

console.log("hasKey:", hasKey)
console.log("knowsPassword:", knowsPassword)

const canUnlockDoor = hasKey || knowsPassword
console.log("Can unlock door:", canUnlockDoor) // true – at least one is true

// -------------------------
// 🚫 Logical NOT (!)
// -------------------------
// This flips a boolean value:
// - `true` becomes `false`
// - `false` becomes `true`

console.log("\n-------------------------")
console.log("🚫 Logical NOT (!)")
console.log("-------------------------\n")

let isOnline: boolean = false
console.log("isOnline:", isOnline) // false
console.log("isOffline:", !isOnline) // true – the opposite of false

let isAvailable: boolean = true
console.log("isAvailable:", isAvailable) // true
console.log("isBusy:", !isAvailable) // false – the opposite of true

console.log("\n-------------------------")
console.log("🚀 Logical Operators in Action")
console.log("-------------------------\n")

// Let's see how these operators can be used together in a real-world scenario.
// use numbers to represent age and membership status
const age: number = 20
const isMemberOfClub: boolean = true
const hasValidID: boolean = true

// Check if the person can enter a club
const canEnter = (age >= 18 && isMemberOfClub) || hasValidID
console.log("Can enter club:", canEnter)

// Simplified scenarios: (present as a table)
// | Age | Has Valid ID | isMemberOfClub || canEnter |
// |-----|--------------|----------------||----------|
// | 17  | ❌false      | ❌false       || ❌false  |
// | 18  | ❌false      | ✅true        || ✅true   |
// | 19  | ✅true       | ❌false       || ✅true   |
// | 20  | ✅true       | ✅true        || ✅true   |

// -------------------------
// 🧠 Summary:
// -------------------------
// &&  AND  – true if BOTH conditions are true
// ||  OR   – true if AT LEAST ONE condition is true
// !   NOT  – reverses the boolean value

// Examples:
// true && true → true
// true && false → false
// false || true → true
// !false → true

// -------------------------
// !! - Double NOT
// -------------------------
// Using double NOT (!!) converts a value to its boolean equivalent.

console.log("\n-------------------------")
console.log("Double NOT (!!) to convert to boolean")
console.log("-------------------------\n")

// How it works:
// - The first NOT (!) converts the value to boolean and negates it.
// - The second NOT (!) negates it again, resulting in the boolean equivalent of the original value.

const someValue: any = "Hello, TypeScript!"
const booleanValue: boolean = !!someValue

console.log("Original value:", someValue) // "Hello, TypeScript!"
console.log("Converted to boolean:", booleanValue) // true, because non-empty string is truthy  

console.log("!!0:", !!0) // false, because 0 is falsy
console.log("!!1:", !!1) // true, because 1 is truthy

const emptyString = ""
console.log("!!'':", !!emptyString) // false, because empty string is falsy

const nullValue = null
console.log("!!null:", !!nullValue) // false, because null is falsy

const undefinedValue = undefined 
console.log("!!undefined:", !!undefinedValue) // false, because undefined is falsy

const emptyArray: number[] = []
console.log("!![]:", !!emptyArray) // true, because empty array is truthy

const emptyObject = {}
console.log("!!{}:", !!emptyObject) // true, because empty object is truthy

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Logical Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// • Boolean Type: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean
// • Narrowing with Logical Operators: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
