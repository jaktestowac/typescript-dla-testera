// 🧪 Exercise 5: Calculator Stage 5 - Advanced Calculator with Enums
// This exercise will help you practice creating a calculator class with memory and history features using enums.
// We'll build this step by step to make it easier to understand.

// -------------------------
// ✅ Exercise: Advanced Calculator Class with Enums ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. First, create an enum called `Operation` with values: Add, Subtract, Multiply, Divide
//    (This is the same enum we used in previous stages)

// 2. Create a basic Calculator class with just the constructor and one operation method:
//    - Create class `Calculator`
//    - Add a private property `history: string[] = []` to store operation records
//    - Add method `add(a: number, b: number): number` that:
//      * Calculates the result
//      * Adds a record to history like "Add: 5 + 3 = 8"
//      * Returns the result

// 3. Test the basic calculator:
//    - Create an instance: `const calc = new Calculator()`
//    - Test: `console.log(calc.add(5, 3))` should print 8
//    - Test: `console.log(calc.getHistory())` should print ["Add: 5 + 3 = 8"]

// 4. Add more operation methods:
//    - Add `subtract(a: number, b: number): number`
//    - Add `multiply(a: number, b: number): number`
//    - Add `divide(a: number, b: number): number` (with division by zero check)

// 5. Add memory functionality:
//    - WHY MEMORY? Memory allows you to store a number for later use!
//      * Real calculators have M+ (memory plus), M- (memory minus), MR (memory recall), MC (memory clear)
//      * Useful for: storing intermediate results, constants, running totals
//      * Example: Calculate 5 + 3, store result (8), then use it in next calculation like 8 * 2
//    - Add private property `memory: number = 0`
//    - Add method `storeInMemory(value: number): void`
//    - Add method `recallMemory(): number`
//    - Add method `clearMemory(): void`

// 6. Add the getHistory method:
//    - Method `getHistory(): string[]` that returns the history array

// 7. Test your Calculator class with precise test cases:
//    Test Case 1: Create calculator and add 5 + 3
//    Expected: Result should be 8, history should contain 1 entry ["Add: 5 + 3 = 8"]
//
//    Test Case 2: Store 10 in memory and recall it
//    Expected: Memory should store 10, recall should return 10
//
//    Test Case 3: Multiply recalled memory value (10) by 2
//    Expected: Result should be 20, history should contain 2 entries ["Add: 5 + 3 = 8", "Multiply: 10 * 2 = 20"]
//
//    Test Case 4: Subtract 10 - 4
//    Expected: Result should be 6, history should contain 3 entries ["Add: 5 + 3 = 8", "Multiply: 10 * 2 = 20", "Subtract: 10 - 4 = 6"]
//
//    Test Case 5: Divide 10 by 0
//    Expected: Should handle division by zero gracefully
//
//    Test Case 6: Add 5 + 3 again and multiply result by 2
//    Expected: Final result should be 16, history should contain 5 entries ["Add: 5 + 3 = 8", "Multiply: 10 * 2 = 20", "Subtract: 10 - 4 = 6", "Divide: 10 / 0 = Division by zero!", "Add: 5 + 3 = 8", "Multiply: 8 * 2 = 16"]

// 💭 Questions to think about:
// - How do classes help organize related functionality?
// - What does 'private' mean for class properties?
// - Why is memory useful in calculators?
// - How does history tracking work?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Add 5 + 3 = 8
// Test Case 1 - History: 1 entries ["Add: 5 + 3 = 8"]
// Test Case 2 - Memory stored: 10
// Test Case 2 - Memory recalled: 10
// Test Case 3 - Multiply 10 * 2 = 20
// Test Case 3 - History: 2 entries ["Add: 5 + 3 = 8", "Multiply: 10 * 2 = 20"]
// Test Case 4 - Subtract 10 - 4 = 6
// Test Case 4 - History: 3 entries ["Add: 5 + 3 = 8", "Multiply: 10 * 2 = 20", "Subtract: 10 - 4 = 6"]
// Test Case 5 - Divide 10 / 0 = Division by zero!
// Test Case 6 - Add 5 + 3 = 8
// Test Case 6 - Multiply 8 * 2 = 16
// Test Case 6 - History: 5 entries ["Add: 5 + 3 = 8", "Multiply: 10 * 2 = 20", "Subtract: 10 - 4 = 6", "Add: 5 + 3 = 8", "Multiply: 8 * 2 = 16"]
// -------------------------

// 👇 Your code here 👇

enum Operation {
    Add,
    Subtract,
    Multiply,
    Divide
}

class Calculator {
    private history: string[] = []
    private memory: number = 0

    // Basic add method with history tracking
    add(a: number, b: number): number {
        const result = a + b
        this.history.push(`${Operation[Operation.Add]}: ${a} + ${b} = ${result}`)
        return result
    }

    // Add more operation methods
    subtract(a: number, b: number): number {
        const result = a - b
        this.history.push(`${Operation[Operation.Subtract]}: ${a} - ${b} = ${result}`)
        return result
    }

    multiply(a: number, b: number): number {
        const result = a * b
        this.history.push(`${Operation[Operation.Multiply]}: ${a} * ${b} = ${result}`)
        return result
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            console.log("Division by zero!")
            return 0
        }
        const result = a / b
        this.history.push(`${Operation[Operation.Divide]}: ${a} / ${b} = ${result}`)
        return result
    }

    // Memory functionality
    storeInMemory(value: number): void {
        this.memory = value
    }

    recallMemory(): number {
        return this.memory
    }

    clearMemory(): void {
        this.memory = 0
    }

    // History functionality
    getHistory(): string[] {
        return this.history
    }
}

// Testing the calculator with structured test cases
const calc = new Calculator()

// Test Case 1: Create calculator and add 5 + 3
console.log(`Test Case 1 - Add 5 + 3 = ${calc.add(5, 3)}`)
console.log(`Test Case 1 - History: ${calc.getHistory().length} entries ${JSON.stringify(calc.getHistory())}`)

// Test Case 2: Store 10 in memory and recall it
calc.storeInMemory(10)
console.log(`Test Case 2 - Memory stored: ${calc.recallMemory()}`)
console.log(`Test Case 2 - Memory recalled: ${calc.recallMemory()}`)

// Test Case 3: Multiply recalled memory value (10) by 2
calc.multiply(calc.recallMemory(), 2)
console.log(`Test Case 3 - Multiply 10 * 2 = 20`)
console.log(`Test Case 3 - History: ${calc.getHistory().length} entries ${JSON.stringify(calc.getHistory())}`)

// Test Case 4: Subtract 10 - 4
calc.subtract(10, 4)
console.log(`Test Case 4 - Subtract 10 - 4 = 6`)
console.log(`Test Case 4 - History: ${calc.getHistory().length} entries ${JSON.stringify(calc.getHistory())}`)

// Test Case 5: Divide 10 by 0
calc.divide(10, 0)
console.log(`Test Case 5 - Divide 10 / 0 = Division by zero!`)

// Test Case 6: Add 5 + 3 again and multiply result by 2
calc.clearMemory()
const result = calc.add(5, 3)
console.log(`Test Case 6 - Add 5 + 3 = ${result}`)
calc.storeInMemory(result)
calc.multiply(calc.recallMemory(), 2)
console.log(`Test Case 6 - Multiply 8 * 2 = 16`)
console.log(`Test Case 6 - History: ${calc.getHistory().length} entries ${JSON.stringify(calc.getHistory())}`)
