// 🧪 Exercise 1.1: Enums for Test Status
// This exercise will help you practice using enums to organize test status values.

// -------------------------
// ✅ Exercise: Test Status Enums ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `TestStatus` with values: Pending, Running, Passed, Failed, Skipped
// 2. Create an enum called `Priority` with string values: "low", "medium", "high", "critical"
// 3. Create a variable `currentTest` of type TestStatus and set it to Running
// 4. Create a variable `testPriority` of type Priority and set it to "high"
// 5. Use console.log to print both values: "Current test status: [currentTest]" and "Test priority: [testPriority]"
// 6. Create a function `getStatusMessage(status: TestStatus): string` that returns:
//    - "Test is waiting to start" for Pending
//    - "Test is currently executing" for Running
//    - "Test completed successfully" for Passed
//    - "Test encountered an error" for Failed
//    - "Test was not executed" for Skipped
// 7. Use console.log to print the result of getStatusMessage(currentTest)
// 8. Use console.log to print the result of getStatusMessage(TestStatus.Passed)

// 💭 Questions to think about:
// - Why are enums better than using plain strings for status values?
// - How do enums help prevent typos in test status?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Current test status: 1"
// "Test priority: high"
// "Test is currently executing"
// "Test completed successfully"
// -------------------------

// 👇 Your code here 👇
