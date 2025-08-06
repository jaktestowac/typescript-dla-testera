// 🧪 Exercise 5.1: Union Types with Type Checking - SOLUTION

export {} // Ignore this line

// Solution:

// 1. Union type for test input
type TestInput = string | number | boolean

// 2. Function to process different input types
function processTestInput(input: TestInput): string {
    if (typeof input === "string") {
        return "Text input: " + input
    } else if (typeof input === "number") {
        return "Numeric input: " + input
    } else if (typeof input === "boolean") {
        return "Boolean input: " + input
    } else {
        // This should never happen with our union type, but good practice
        return "Unknown input type"
    }
}

// 3. Union type for test results (literal types)
type TestResult = "pass" | "fail" | "skip"

// 4. Function to get result messages
function getResultMessage(result: TestResult): string {
    switch (result) {
        case "pass":
            return "✅ Test passed successfully"
        case "fail":
            return "❌ Test failed"
        case "skip":
            return "⏭️ Test was skipped"
        default:
            // TypeScript knows this is unreachable with our union type
            return "Unknown result"
    }
}

// 6. Test getResultMessage with console.log as specified
console.log(getResultMessage("pass")) // "✅ Test passed successfully"
console.log(getResultMessage("fail")) // "❌ Test failed"

// 7. Variable that can hold string or number for user ID
let userId: string | number

// 8. Set to string value and console.log
userId = "user_123"
console.log(userId)

// 9. Set to number value and console.log
userId = 12345
console.log(userId)
