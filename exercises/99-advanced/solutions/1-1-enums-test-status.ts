// 🧪 Exercise 1.1: Enums for Test Status - SOLUTION

export {} // Ignore this line

// Solution:

// 1. Enum for test status (numeric values by default)
enum TestStatus {
    Pending, // 0
    Running, // 1
    Passed, // 2
    Failed, // 3
    Skipped // 4
}

// 2. Enum with string values for priority
enum Priority {
    Low = "low",
    Medium = "medium",
    High = "high",
    Critical = "critical"
}

// 3 & 4. Variables using the enums
const currentTest: TestStatus = TestStatus.Running
const testPriority: Priority = Priority.High

// 5. Print the values with specific format
console.log("Current test status:", currentTest) // 1
console.log("Test priority:", testPriority) // "high"

// 6. Function that returns status messages
function getStatusMessage(status: TestStatus): string {
    switch (status) {
        case TestStatus.Pending:
            return "Test is waiting to start"
        case TestStatus.Running:
            return "Test is currently executing"
        case TestStatus.Passed:
            return "Test completed successfully"
        case TestStatus.Failed:
            return "Test encountered an error"
        case TestStatus.Skipped:
            return "Test was not executed"
        default:
            return "Unknown status"
    }
}

// 7 & 8. Test the function with specific console.log calls
console.log(getStatusMessage(currentTest)) // "Test is currently executing"
console.log(getStatusMessage(TestStatus.Passed)) // "Test completed successfully"
