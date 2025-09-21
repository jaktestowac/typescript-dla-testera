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
