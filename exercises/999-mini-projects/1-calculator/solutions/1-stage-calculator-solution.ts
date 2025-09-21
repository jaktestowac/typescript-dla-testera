// 🧪 Exercise 1: Calculator Stage 1 - Basic Addition
// This exercise will help you practice creating a simple calculator with basic addition functionality.

// -------------------------
// ✅ Exercise: Basic Addition Calculator ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `add` that takes two numbers and returns their sum
// 2. Create a function called `calculate` that takes an operation string and two numbers
//    - If operation is "add", call the add function
//    - Otherwise, return 0
// 3. Test your functions with precise test cases:
//    Test Case 1: Add 5 and 3 (using calculate("add", 5, 3))
//    Expected: Result should be 8
//
//    Test Case 2: Add 10 and 7 (using calculate("add", 10, 7))
//    Expected: Result should be 17
//
//    Test Case 3: Add 0 and 0 (using calculate("add", 0, 0))
//    Expected: Result should be 0

// 💭 Questions to think about:
// - How do functions help organize calculator operations?
// - Why use separate functions for different operations?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Add 5 + 3 = 8
// Test Case 2 - Add 10 + 7 = 17
// Test Case 3 - Add 0 + 0 = 0
// -------------------------

// 👇 Your code here 👇

function add(a: number, b: number): number {
    return a + b
}

function calculate(operation: string, num1: number, num2: number): number {
    if (operation === "add") {
        return add(num1, num2)
    }
    return 0
}

// Testing the functions with structured test cases
console.log(`Test Case 1 - Add 5 + 3 = ${calculate("add", 5, 3)}`) // Should print 8
console.log(`Test Case 2 - Add 10 + 7 = ${calculate("add", 10, 7)}`) // Should print 17
console.log(`Test Case 3 - Add 0 + 0 = ${calculate("add", 0, 0)}`) // Should print 0
