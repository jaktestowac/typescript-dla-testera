// 🧪 Exercise 4: Calculator Stage 4 - All Basic Operations with Enums
// This exercise will help you practice extending the calculator with division and error handling using enums.

// -------------------------
// ✅ Exercise: Calculator with All Basic Operations using Enums ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `Operation` with values: Add, Subtract, Multiply, Divide
// 2. Create a function called `add` that takes two numbers and returns their sum
// 3. Create a function called `subtract` that takes two numbers and returns their difference
// 4. Create a function called `multiply` that takes two numbers and returns their product
// 5. Create a function called `divide` that takes two numbers and returns their quotient
//    - Handle division by zero by returning 0 or throwing an error
// 6. Create a function called `calculate` that takes an Operation enum and two numbers
//    - Use a switch statement to handle different operations
//    - Call the appropriate function based on the operation
// 7. Test the functions with console.log:
//    - calculate(Operation.Add, 5, 3) should print 8
//    - calculate(Operation.Subtract, 10, 4) should print 6
//    - calculate(Operation.Multiply, 7, 3) should print 21
//    - calculate(Operation.Divide, 15, 3) should print 5
//    - calculate(Operation.Divide, 10, 0) should handle division by zero

// 💭 Questions to think about:
// - How do you handle edge cases like division by zero?
// - Why is error handling important in calculators?
// - How do enums make the code more maintainable?

// -------------------------
// 📤 Expected Output:
// -------------------------
// 8
// 6
// 21
// 5
// Division by zero!
// -------------------------

// 👇 Your code here 👇

enum Operation {
    Add,
    Subtract,
    Multiply,
    Divide
}

function add(a: number, b: number): number {
    return a + b
}

function subtract(a: number, b: number): number {
    return a - b
}

function multiply(a: number, b: number): number {
    return a * b
}

function divide(a: number, b: number): number {
    if (b === 0) {
        console.log("Division by zero!")
        return 0
    }
    return a / b
}

function calculate(operation: Operation, num1: number, num2: number): number {
    switch (operation) {
        case Operation.Add:
            return add(num1, num2)
        case Operation.Subtract:
            return subtract(num1, num2)
        case Operation.Multiply:
            return multiply(num1, num2)
        case Operation.Divide:
            return divide(num1, num2)
        default:
            return 0
    }
}

// Testing the functions
console.log(calculate(Operation.Add, 5, 3)) // Should print 8
console.log(calculate(Operation.Subtract, 10, 4)) // Should print 6
console.log(calculate(Operation.Multiply, 7, 3)) // Should print 21
console.log(calculate(Operation.Divide, 15, 3)) // Should print 5
console.log(calculate(Operation.Divide, 10, 0)) // Should handle division by zero
