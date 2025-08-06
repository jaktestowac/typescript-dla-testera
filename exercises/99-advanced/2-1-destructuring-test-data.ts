// 🧪 Exercise 2.1: Destructuring Test Data
// This exercise will help you practice destructuring arrays and objects for test data extraction.

// -------------------------
// ✅ Exercise: Destructuring Test Results ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an array called `testResults` with values: [true, false, true, true, false]
// 2. Use array destructuring to extract the first, second, and last test result into variables
//    Hint: const [first, second, , , last] = testResults
// 3. Use console.log to print: "First test: [first], Second test: [second], Last test: [last]"
// 4. Create an object called `testReport` with properties:
//    - testName: "Login Test"
//    - duration: 2.5
//    - status: "passed"
//    - errors: 0
// 5. Use object destructuring to extract testName and status into variables
// 6. Use console.log to print: "Test: [testName], Status: [status]"
// 7. Use object destructuring with renaming to extract duration as `testTime`
// 8. Use console.log to print: "Test duration: [testTime] seconds"
// 9. Create a function `summarizeTest` that takes an object parameter and uses destructuring
//    in the function parameters to extract testName, status, and duration
// 10. The function should return a formatted string with the test summary
// 11. Use console.log to print the result of calling summarizeTest with testReport

// 💭 Questions to think about:
// - How does destructuring make working with test data easier?
// - When would you use destructuring in automated testing?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "First test: true, Second test: false, Last test: false"
// "Test: Login Test, Status: passed"
// "Test duration: 2.5 seconds"
// "Login Test (passed) completed in 2.5s"
// -------------------------

// 👇 Your code here 👇
