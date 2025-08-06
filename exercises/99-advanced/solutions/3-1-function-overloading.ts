// 🧪 Exercise 3.1: Function Overloading for Test Utilities - SOLUTION

export {} // Ignore this line

// Solution:

// 1. Function overloads for assert function
function assert(condition: boolean): void
function assert(condition: boolean, message: string): void

// 2. Implementation of assert function
function assert(condition: boolean, message?: string): void {
    if (!condition) {
        const errorMessage = message || "Assertion failed"
        throw new Error(errorMessage)
    } else {
        console.log("Assertion passed")
    }
}

// 3. Function overloads for compare function
function compare(a: string, b: string): boolean
function compare(a: number, b: number): boolean

// 4. Implementation of compare function
function compare(a: string | number, b: string | number): boolean {
    return a === b
}

// 5. Testing the assert function with specific instructions
console.log("Testing assert function:")

// Test assert with just condition - should print "Assertion passed"
assert(true) // "Assertion passed"

// Test assert with condition and message using try/catch
try {
    assert(false, "Expected value to be true")
} catch (error) {
    console.log("Error:", (error as Error).message)
}

// 6. Testing the compare function with console.log
console.log("Testing compare function:")
console.log(compare("hello", "hello")) // true
console.log(compare(42, 24)) // false
