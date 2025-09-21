// 🧪 Exercise 2: Inventory Management Stage 2 - Item Categories System
// This exercise will help you practice adding item categories using enums.

// -------------------------
// ✅ Exercise: Item Categories System ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `Category` with values: Electronics, Clothing, Books, Food, Other
//    (Use string enums for better readability)

// 2. Update the Item interface to include category:
//    - Add category: Category property

// 3. Update the `createItem` function to accept a category parameter:
//    - Add category parameter with default value of Category.Other

// 4. Create a function called `getCategoryLabel` that takes a Category and returns a string:
//    - Category.Electronics -> "Electronics"
//    - Category.Clothing -> "Clothing"
//    - Category.Books -> "Books"
//    - Category.Food -> "Food"
//    - Category.Other -> "Other"

// 5. Test the functions with precise test cases:
//    Test Case 1: Create electronics item "Smartphone" with stock 15
//    Expected: Item: Smartphone - Category: Electronics
//
//    Test Case 2: Create clothing item "T-Shirt" with stock 50
//    Expected: Item: T-Shirt - Category: Clothing
//
//    Test Case 3: Create book item "TypeScript Guide" with stock 30 (using default category)
//    Expected: Item: TypeScript Guide - Category: Other

// 💭 Questions to think about:
// - Why use string enums for categories?
// - How do enums help with inventory organization?
// - When should you use default parameter values?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Item: Smartphone - Category: Electronics
// Test Case 2 - Item: T-Shirt - Category: Clothing
// Test Case 3 - Item: TypeScript Guide - Category: Other
// -------------------------

// 👇 Your code here 👇
