// 🧪 Exercise 4: BMI Calculator Stage 4 - Multiple Calculations and History
// This exercise will help you practice handling multiple BMI calculations and keeping a history.

// -------------------------
// ✅ Exercise: Multiple Calculations and History ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `calculateMultipleBMIs` that takes an array of weight/height pairs
//    - Calculate BMI for each pair
//    - Return array of results with BMI and category
// 2. Create a function called `getBMIStatistics` that calculates statistics from multiple BMIs
//    - Return average BMI, highest BMI, lowest BMI, and category distribution
// 3. Test your functions with precise test cases:
//    Test Case 1: Multiple valid calculations
//    Expected: Array of BMI results for each input
//
//    Test Case 2: BMI statistics from multiple calculations
//    Expected: Statistics object with average, min, max, and category counts
//
//    Test Case 3: Mixed valid and invalid inputs
//    Expected: Handle invalid inputs gracefully in statistics

// 💭 Questions to think about:
// - How do you process arrays of data in TypeScript?
// - Why is statistical analysis useful for health data?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Multiple Calculations:
// Person 1 - Weight: 60kg, Height: 165cm, BMI: 22.04, Category: Normal weight
// Person 2 - Weight: 75kg, Height: 175cm, BMI: 24.49, Category: Normal weight
// Person 3 - Weight: 90kg, Height: 180cm, BMI: 27.78, Category: Overweight
//
// Statistics:
// Average BMI: 24.77
// Highest BMI: 27.78
// Lowest BMI: 22.04
// Category Distribution: {"Normal weight":2,"Overweight":1}
// -------------------------

// 👇 Your code here 👇

function calculateBMI(weight: number, height: number): number {
    const heightInMeters = height / 100
    return weight / (heightInMeters * heightInMeters)
}

function getBMICategory(bmi: number): string {
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

function validateInputs(weight: number, height: number): { isValid: boolean; error?: string } {
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

function calculateBMIWithValidation(
    weight: number,
    height: number
): { success: boolean; bmi?: number; category?: string; error?: string } {
    const validation = validateInputs(weight, height)

    if (!validation.isValid) {
        return { success: false, error: validation.error }
    }

    const bmi = calculateBMI(weight, height)
    const category = getBMICategory(bmi)

    return { success: true, bmi, category }
}

function calculateMultipleBMIs(
    people: { weight: number; height: number }[]
): { success: boolean; bmi?: number; category?: string; error?: string }[] {
    return people.map((person) => calculateBMIWithValidation(person.weight, person.height))
}

function getBMIStatistics(results: { success: boolean; bmi?: number; category?: string; error?: string }[]): {
    averageBMI: number
    highestBMI: number
    lowestBMI: number
    categoryDistribution: Record<string, number>
} {
    const validResults = results.filter((result) => result.success && result.bmi !== undefined)

    if (validResults.length === 0) {
        return {
            averageBMI: 0,
            highestBMI: 0,
            lowestBMI: 0,
            categoryDistribution: {}
        }
    }

    const bmis = validResults.map((result) => result.bmi!)
    const categories = validResults.map((result) => result.category!)

    const averageBMI = bmis.reduce((sum, bmi) => sum + bmi, 0) / bmis.length
    const highestBMI = Math.max(...bmis)
    const lowestBMI = Math.min(...bmis)

    const categoryDistribution: Record<string, number> = {}
    categories.forEach((category) => {
        categoryDistribution[category] = (categoryDistribution[category] || 0) + 1
    })

    return {
        averageBMI: Number(averageBMI.toFixed(2)),
        highestBMI: Number(highestBMI.toFixed(2)),
        lowestBMI: Number(lowestBMI.toFixed(2)),
        categoryDistribution
    }
}

// Testing the functions with structured test cases
const people = [
    { weight: 60, height: 165 },
    { weight: 75, height: 175 },
    { weight: 90, height: 180 }
]

const results = calculateMultipleBMIs(people)

console.log("Multiple Calculations:")
results.forEach((result, index) => {
    if (result.success) {
        console.log(
            `Person ${index + 1} - Weight: ${people[index].weight}kg, Height: ${people[index].height}cm, BMI: ${result.bmi!.toFixed(2)}, Category: ${result.category}`
        )
    } else {
        console.log(`Person ${index + 1} - Error: ${result.error}`)
    }
})

console.log("\nStatistics:")
const stats = getBMIStatistics(results)
console.log(`Average BMI: ${stats.averageBMI}`)
console.log(`Highest BMI: ${stats.highestBMI}`)
console.log(`Lowest BMI: ${stats.lowestBMI}`)
console.log(`Category Distribution:`, JSON.stringify(stats.categoryDistribution))
