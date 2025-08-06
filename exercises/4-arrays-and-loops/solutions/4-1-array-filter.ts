// 🧪 Exercise 4.1: Array filter
// This exercise will help you practice array filtering.

// -------------------------
// ✅ Exercise: Array filter ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an array called `numbers` with values [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 2. Use the filter() method to get only even numbers
// 3. Use the filter() method to get only numbers greater than 5
// 4. Print both filtered arrays

// 💭 Questions to think about:
// - What happens if the filter condition never matches any elements?
// - How is filter() different from map()?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Even numbers: [2, 4, 6, 8, 10]"
// "Numbers > 5: [6, 7, 8, 9, 10]"
// -------------------------

// 👇 Your code here 👇 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Step 1: Create an array called `numbers`

const evenNumbers = numbers.filter(n => n % 2 === 0) // Step 2: Get only even numbers
const greaterThanFive = numbers.filter(n => n > 5) // Step 3: Get only numbers greater than 5

console.log("Even numbers: [" + evenNumbers.join(", ") + "]") // Step 4: Print both filtered arrays
console.log("Numbers > 5: [" + greaterThanFive.join(", ") + "]") 