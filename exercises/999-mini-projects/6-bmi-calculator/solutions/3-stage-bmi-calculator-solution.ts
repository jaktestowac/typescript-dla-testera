// 🧪 Exercise 3: BMI Calculator Stage 3 - Input Validation
// This exercise will help you practice adding input validation to your BMI calculator.

// -------------------------
// ✅ Exercise: Input Validation ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `validateInputs` that checks if weight and height are valid
//    - Weight must be positive number > 0
//    - Height must be between 50cm and 250cm
//    - Return true if valid, false if invalid
// 2. Create a function called `calculateBMIWithValidation` that validates inputs before calculation
//    - If invalid, return error message
//    - If valid, return BMI and category
// 3. Test your functions with precise test cases:
//    Test Case 1: Valid inputs (70kg, 170cm)
//    Expected: Valid calculation with BMI and category
//
//    Test Case 2: Invalid weight (0kg, 170cm)
//    Expected: Error message about invalid weight
//
//    Test Case 3: Invalid height (70kg, 300cm)
//    Expected: Error message about invalid height
//
//    Test Case 4: Invalid weight and height (-5kg, -10cm)
//    Expected: Error message about both invalid inputs

// 💭 Questions to think about:
// - Why is input validation important in applications?
// - How do you handle different types of validation errors?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Valid: Weight: 70kg, Height: 170cm, BMI: 24.22, Category: Normal weight
// Test Case 2 - Invalid: Weight: 0kg, Height: 170cm, Error: Weight must be a positive number
// Test Case 3 - Invalid: Weight: 70kg, Height: 300cm, Error: Height must be between 50cm and 250cm
// Test Case 4 - Invalid: Weight: -5kg, Height: -10cm, Error: Weight must be a positive number and Height must be between 50cm and 250cm
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

// Testing the functions with structured test cases
const testCases = [
    { weight: 70, height: 170, expected: "Valid" },
    { weight: 0, height: 170, expected: "Invalid weight" },
    { weight: 70, height: 300, expected: "Invalid height" },
    { weight: -5, height: -10, expected: "Invalid both" }
]

testCases.forEach((testCase, index) => {
    const result = calculateBMIWithValidation(testCase.weight, testCase.height)

    if (result.success) {
        console.log(
            `Test Case ${index + 1} - Valid: Weight: ${testCase.weight}kg, Height: ${testCase.height}cm, BMI: ${result.bmi!.toFixed(2)}, Category: ${result.category}`
        )
    } else {
        console.log(
            `Test Case ${index + 1} - Invalid: Weight: ${testCase.weight}kg, Height: ${testCase.height}cm, Error: ${result.error}`
        )
    }
})
