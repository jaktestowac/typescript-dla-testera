// 🧪 Exercise 3.1: Function Overloading for Test Utilities
// This exercise will help you practice function overloading to create flexible test helper functions.

// -------------------------
// ✅ Exercise: Overloaded Assert Function ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create function overloads for an `assert` function:
//    - assert(condition: boolean): void
//    - assert(condition: boolean, message: string): void
// 2. Implement the assert function that:
//    - Takes a boolean condition (required)
//    - Takes an optional message string
//    - If condition is false, throws an error with the message (or default message)
//    - If condition is true, prints "Assertion passed" using console.log
// 3. Create function overloads for a `compare` function:
//    - compare(a: string, b: string): boolean
//    - compare(a: number, b: number): boolean
// 4. Implement the compare function that returns true if values are equal
// 5. Test the assert function:
//    - Call assert(true) and see "Assertion passed" printed
//    - Use try/catch to call assert(false, "Expected value to be true") and console.log the error message
// 6. Test the compare function:
//    - Use console.log to print compare("hello", "hello")
//    - Use console.log to print compare(42, 24)

// 💭 Questions to think about:
// - How does function overloading make test utilities more flexible?
// - Why is it useful to have different signatures for the same function?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Assertion passed"
// Error: "Expected value to be true"
// "Assertion passed"
// true
// false
// -------------------------

// 👇 Your code here 👇
