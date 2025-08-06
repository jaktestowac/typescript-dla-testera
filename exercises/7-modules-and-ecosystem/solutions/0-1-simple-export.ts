// 🧪 Exercise 0.1: Simple Export (Beginner Friendly)
// This exercise will help you understand how to share data between files.

// -------------------------
// ✅ Exercise: Simple Export ✅
// -------------------------

export {} // Ignore this line

// -------------------------
// 🎯 Your Task: Work with existing modules
// -------------------------

// We've created a string utilities module for you in 'string-utils.ts'
// It contains functions like: capitalize, reverse, countWords, truncate, removeSpaces, isPalindrome

// Steps:
// 1. Import the `capitalize` function from './string-utils'
// 2. Import the `reverse` function from './string-utils'
// 3. Import the `isPalindrome` function from './string-utils'
// 4. Test the capitalize function with: "hello world"
// 5. Test the reverse function with: "TypeScript"
// 6. Test the isPalindrome function with: "racecar"
// 7. Print the results of each test

// 💭 Questions to think about:
// - What does "export" mean? (Think of it like sharing something with others)
// - Why would you want to share data between files? (To organize your code better)
// - What's the difference between named exports and default exports?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Capitalized: Hello world"
// "Reversed: tpircSepyT"
// "Is 'racecar' a palindrome? true"
// -------------------------

// 👇 Your code here 👇
import { capitalize, reverse, isPalindrome } from "../string-utils" // Step 1-3: Import functions

const cap = capitalize("hello world") // Step 4: Test capitalize
console.log("Capitalized: " + cap)

const rev = reverse("TypeScript") // Step 5: Test reverse
console.log("Reversed: " + rev)

const palindromeResult = isPalindrome("racecar") // Step 6: Test isPalindrome
console.log("Is 'racecar' a palindrome? " + palindromeResult) // Step 7: Print result
