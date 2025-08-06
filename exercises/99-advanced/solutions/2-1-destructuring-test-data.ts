// 🧪 Exercise 2.1: Destructuring Test Data - SOLUTION

export {} // Ignore this line

// Solution:

// 1. Array of test results
const testResults = [true, false, true, true, false]

// 2. Array destructuring to extract specific positions
const [first, second, , , last] = testResults

// 3. Console.log with specific format
console.log(`First test: ${first}, Second test: ${second}, Last test: ${last}`)

// 3. Test report object
const testReport = {
    testName: "Login Test",
    duration: 2.5,
    status: "passed",
    errors: 0
}

// 4 & 5. Object destructuring for testName and status
const { testName, status } = testReport

// 6. Console.log with specific format
console.log(`Test: ${testName}, Status: ${status}`)

// 7. Object destructuring with renaming
const { duration: testTime } = testReport

// 8. Console.log with specific format
console.log(`Test duration: ${testTime} seconds`)

// 9. Function with destructuring in parameters
function summarizeTest({ testName, status, duration }: { testName: string; status: string; duration: number }): string {
    return `${testName} (${status}) completed in ${duration}s`
}

// 11. Console.log the result of calling summarizeTest
console.log(summarizeTest(testReport))

// Additional examples removed to match exercise requirements
