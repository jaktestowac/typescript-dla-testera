// 🧪 Exercise 4: Inventory Management Stage 4 - Stock Alerts and Filtering
// This exercise will help you practice adding stock monitoring and filtering functionality to inventory items.

// -------------------------
// ✅ Exercise: Stock Alerts and Filtering ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `isLowStock` that takes an Item and a threshold:
//    - Return true if item stock is below or equal to threshold
//    - Return false otherwise

// 2. Create a function called `isOutOfStock` that takes an Item:
//    - Return true if item stock is 0
//    - Return false otherwise

// 3. Create a function called `filterItemsByCategory` that takes an array of items and a category:
//    - Return only items that match the specified category

// 4. Create a function called `filterItemsByPriceRange` that takes an array of items, minPrice, and maxPrice:
//    - Return only items with price between minPrice and maxPrice (inclusive)

// 5. Create a function called `filterLowStockItems` that takes an array of items and a threshold:
//    - Return only items that are low on stock

// 6. Test the functions with precise test cases:
//    Input Data (5 items):
//    1. Laptop: stock 5, Electronics category, price 1200
//    2. Mouse: stock 8, Electronics category, price 25
//    3. T-Shirt: stock 15, Clothing category, price 20
//    4. Book: stock 12, Books category, price 30
//    5. Apple: stock 20, Food category, price 2
//
//    Test Case 1: Filter by Electronics category
//    Expected: Electronics items: 2 items
//
//    Test Case 2: Filter by price range $10-$100
//    Expected: Items in price range $10-$100: 3 items
//
//    Test Case 3: Filter low stock items (threshold: 10)
//    Expected: Low stock items (threshold: 10): 2 items
//
//    Test Case 4: Check stock alerts
//    Expected: Laptop is low on stock! (5 remaining), Mouse is low on stock! (8 remaining)

// 💭 Questions to think about:
// - Why are stock alerts important in inventory management?
// - How do different filtering functions help with inventory analysis?
// - When should you use different filtering approaches?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Electronics items: 2
// Test Case 2 - Items in price range $10-$100: 3
// Test Case 3 - Low stock items (threshold: 10): 2
// Test Case 4 - Stock alerts: Laptop (5), Mouse (8)
// -------------------------

// 👇 Your code here 👇
