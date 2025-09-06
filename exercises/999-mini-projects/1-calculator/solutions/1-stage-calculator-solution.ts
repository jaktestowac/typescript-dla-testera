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
// 3. Test the functions with console.log:
//    - calculate("add", 5, 3) should print 8
//    - calculate("add", 10, 7) should print 17

// 💭 Questions to think about:
// - How do functions help organize calculator operations?
// - Why use separate functions for different operations?

// -------------------------
// 📤 Expected Output:
// -------------------------
// 8
// 17
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

// Testing the functions
console.log(calculate("add", 5, 3)) // Should print 8
console.log(calculate("add", 10, 7)) // Should print 17
