// 🧪 Exercise 2: Calculator Stage 2 - Addition and Subtraction
// This exercise will help you practice extending the calculator with subtraction functionality.

// -------------------------
// ✅ Exercise: Calculator with Addition and Subtraction ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `add` that takes two numbers and returns their sum
// 2. Create a function called `subtract` that takes two numbers and returns their difference
// 3. Create a function called `calculate` that takes an operation string and two numbers
//    - If operation is "add", call the add function
//    - If operation is "subtract", call the subtract function
//    - Otherwise, return 0
// 4. Test the functions with console.log:
//    - calculate("add", 5, 3) should print 8
//    - calculate("subtract", 10, 4) should print 6
//    - calculate("add", 7, 2) should print 9

// 💭 Questions to think about:
// - How does adding more operations change the calculate function?
// - Why is it important to handle invalid operations?

// -------------------------
// 📤 Expected Output:
// -------------------------
// 8
// 6
// 9
// -------------------------

// 👇 Your code here 👇

function add(a: number, b: number): number {
    return a + b
}

function subtract(a: number, b: number): number {
    return a - b
}

function calculate(operation: string, num1: number, num2: number): number {
    if (operation === "add") {
        return add(num1, num2)
    } else if (operation === "subtract") {
        return subtract(num1, num2)
    }
    return 0
}

// Testing the functions
console.log(calculate("add", 5, 3)) // Should print 8
console.log(calculate("subtract", 10, 4)) // Should print 6
console.log(calculate("add", 7, 2)) // Should print 9
