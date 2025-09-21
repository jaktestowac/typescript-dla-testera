// 🧪 Exercise 2: BMI Calculator Stage 2 - BMI Categories
// This exercise will help you practice adding BMI category classification to your calculator.

// -------------------------
// ✅ Exercise: BMI Categories ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `getBMICategory` that takes BMI value and returns category string
//    - Underweight: BMI < 18.5
//    - Normal weight: 18.5 ≤ BMI < 25
//    - Overweight: 25 ≤ BMI < 30
//    - Obese: BMI ≥ 30
// 2. Create a function called `calculateBMIWithCategory` that combines BMI calculation and categorization
// 3. Test your functions with precise test cases:
//    Test Case 1: Weight 50kg, Height 170cm (Underweight)
//    Expected: BMI ~17.16, Category: "Underweight"
//
//    Test Case 2: Weight 70kg, Height 170cm (Normal)
//    Expected: BMI ~24.22, Category: "Normal weight"
//
//    Test Case 3: Weight 85kg, Height 170cm (Overweight)
//    Expected: BMI ~29.41, Category: "Overweight"
//
//    Test Case 4: Weight 100kg, Height 170cm (Obese)
//    Expected: BMI ~34.6, Category: "Obese"

// 💭 Questions to think about:
// - How do conditional statements help in categorization?
// - Why are BMI categories important for health assessment?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Weight: 50kg, Height: 170cm, BMI: 17.16, Category: Underweight
// Test Case 2 - Weight: 70kg, Height: 170cm, BMI: 24.22, Category: Normal weight
// Test Case 3 - Weight: 85kg, Height: 170cm, BMI: 29.41, Category: Overweight
// Test Case 4 - Weight: 100kg, Height 170cm, BMI: 34.60, Category: Obese
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

function calculateBMIWithCategory(weight: number, height: number): { bmi: number; category: string } {
    const bmi = calculateBMI(weight, height)
    const category = getBMICategory(bmi)
    return { bmi, category }
}

// Testing the functions with structured test cases
const testCases = [
    { weight: 50, height: 170 },
    { weight: 70, height: 170 },
    { weight: 85, height: 170 },
    { weight: 100, height: 170 }
]

testCases.forEach((testCase, index) => {
    const result = calculateBMIWithCategory(testCase.weight, testCase.height)
    console.log(
        `Test Case ${index + 1} - Weight: ${testCase.weight}kg, Height: ${testCase.height}cm, BMI: ${result.bmi.toFixed(2)}, Category: ${result.category}`
    )
})
