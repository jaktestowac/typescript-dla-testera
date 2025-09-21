// 🧪 Exercise 5: BMI Calculator Stage 5 - Simple BMI Calculator Class
// This exercise will help you practice creating a simple class to organize BMI calculator functionality.

// -------------------------
// ✅ Exercise: Simple BMI Calculator Class ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a class called `SimpleBMICalculator` with the following methods:
//    - `calculate(weight: number, height: number)` - calculate BMI with validation
//    - `getCategory(bmi: number)` - get BMI category
//    - `calculateMultiple(people: {weight: number, height: number}[])` - calculate for multiple people
//    - `getAverageBMI(results: any[])` - get average BMI from results
// 2. Test your class with precise test cases:
//    Test Case 1: Single BMI calculation
//    Expected: BMI and category for one person
//
//    Test Case 2: Multiple calculations
//    Expected: Array of results for multiple people
//
//    Test Case 3: Average calculation
//    Expected: Average BMI from multiple results

// 💭 Questions to think about:
// - How do classes help organize related functions?
// - Why use methods instead of standalone functions?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Single Calculation: Weight: 70kg, Height: 170cm, BMI: 24.22, Category: Normal weight
//
// Multiple Calculations:
// Person 1: BMI: 22.04, Category: Normal weight
// Person 2: BMI: 24.49, Category: Normal weight
// Person 3: BMI: 27.78, Category: Overweight
//
// Average BMI: 24.77
// -------------------------

// 👇 Your code here 👇

class SimpleBMICalculator {
    calculateBMI(weight: number, height: number): number {
        const heightInMeters = height / 100
        return weight / (heightInMeters * heightInMeters)
    }

    getCategory(bmi: number): string {
        if (bmi < 18.5) {
            return "Underweight"
        } else if (bmi < 25) {
            return "Normal weight"
        } else if (bmi < 30) {
            return "Overweight"
        } else {
            return "Obese"
        }
    }

    validateInputs(weight: number, height: number): { isValid: boolean; error?: string } {
        const errors: string[] = []

        if (weight <= 0) {
            errors.push("Weight must be a positive number")
        }

        if (height < 50 || height > 250) {
            errors.push("Height must be between 50cm and 250cm")
        }

        if (errors.length > 0) {
            return { isValid: false, error: errors.join(" and ") }
        }

        return { isValid: true }
    }

    calculate(weight: number, height: number): { success: boolean; bmi?: number; category?: string; error?: string } {
        const validation = this.validateInputs(weight, height)

        if (!validation.isValid) {
            return { success: false, error: validation.error }
        }

        const bmi = this.calculateBMI(weight, height)
        const category = this.getCategory(bmi)

        return { success: true, bmi, category }
    }

    calculateMultiple(
        people: { weight: number; height: number }[]
    ): { success: boolean; bmi?: number; category?: string; error?: string }[] {
        return people.map((person) => this.calculate(person.weight, person.height))
    }

    getAverageBMI(results: { success: boolean; bmi?: number; category?: string; error?: string }[]): number {
        const validResults = results.filter((result) => result.success && result.bmi !== undefined)

        if (validResults.length === 0) {
            return 0
        }

        const totalBMI = validResults.reduce((sum, result) => sum + result.bmi!, 0)
        return Number((totalBMI / validResults.length).toFixed(2))
    }
}

// Testing the SimpleBMICalculator class
const calculator = new SimpleBMICalculator()

// Test Case 1: Single calculation
const singleResult = calculator.calculate(70, 170)
if (singleResult.success) {
    console.log(
        `Single Calculation: Weight: 70kg, Height: 170cm, BMI: ${singleResult.bmi!.toFixed(2)}, Category: ${singleResult.category}`
    )
}

console.log("")

// Test Case 2: Multiple calculations
const people = [
    { weight: 60, height: 165 },
    { weight: 75, height: 175 },
    { weight: 90, height: 180 }
]

const multipleResults = calculator.calculateMultiple(people)
console.log("Multiple Calculations:")
multipleResults.forEach((result, index) => {
    if (result.success) {
        console.log(`Person ${index + 1}: BMI: ${result.bmi!.toFixed(2)}, Category: ${result.category}`)
    }
})

console.log("")

// Test Case 3: Average calculation
const averageBMI = calculator.getAverageBMI(multipleResults)
console.log(`Average BMI: ${averageBMI}`)
