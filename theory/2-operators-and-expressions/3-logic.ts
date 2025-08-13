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

// How it works for different scenarios: (present as a table)
// | Age | Is Member | Has Valid ID || age >= 18 | isMemberOfClub | canEnter |
// |-----|-----------|--------------||-----------|----------------|----------|
// | 17  | ❌false  | ❌false      || ❌false  | ❌false        | ❌false  |
// | 18  | ✅true   | ❌false      || ✅true   | ❌false        | ✅true   |
// | 19  | ✅true   | ✅true       || ✅true   | ✅true         | ✅true   |
// | 20  | ✅true   | ❌false      || ✅true   | ❌false        | ✅true   |
// | 21  | ✅true   | ✅true       || ✅true   | ✅true         | ✅true   |
// | 22  | ✅true   | ❌false      || ✅true   | ❌false        | ✅true   |
// | 23  | ✅true   | ✅true       || ✅true   | ✅true         | ✅true   |

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
