// 🧪 Exercise 5: Inventory Management Stage 5 - InventoryManager Class with Advanced Features
// This exercise will help you practice creating a comprehensive inventory management class with advanced functionality.
// We'll build this step by step to make it easier to understand.

// -------------------------
// ✅ Exercise: InventoryManager Class with Advanced Features ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. First, create the InventoryManager class with basic item storage:
//    - Create class `InventoryManager`
//    - Add private property `items: Item[] = []` to store all items
//    - Add method `addItem(name: string, stock: number, category?: Category, price: number): Item`
//      * Create a new item and add it to the items array
//      * Return the created item

// 2. Add item retrieval methods:
//    - Add method `getAllItems(): Item[]` that returns all items
//    - Add method `getItemById(id: number): Item | undefined` that finds an item by ID
//    - Add method `getItemsCount(): number` that returns total number of items

// 3. Add item modification methods:
//    - Add method `updateStock(id: number, newStock: number): boolean` that updates item stock
//    - Add method `updatePrice(id: number, newPrice: number): boolean` that updates item price
//    - Add method `removeItem(id: number): boolean` that removes an item by ID

// 4. Add advanced filtering methods:
//    - Add method `getItemsByCategory(category: Category): Item[]`
//    - Add method `getItemsByPriceRange(minPrice: number, maxPrice: number): Item[]`
//    - Add method `getLowStockItems(threshold: number): Item[]`
//    - Add method `getOutOfStockItems(): Item[]` that returns only out of stock items

// 5. Add search and statistics methods:
//    - Add method `searchItems(query: string): Item[]` that searches items by name
//    - Add method `getInventoryStatistics(): object` that returns statistics like:
//      * totalItems: number
//      * totalValue: number
//      * lowStockItems: number
//      * outOfStockItems: number
//      * itemsByCategory: { electronics: number, clothing: number, ... }
//      * averagePrice: number

// 6. Add sorting methods:
//    - Add method `sortItemsByPrice(): Item[]` that returns items sorted by price (lowest first)
//    - Add method `sortItemsByStock(): Item[]` that returns items sorted by stock (highest first)

// 7. Add utility methods:
//    - Add method `applyDiscountToCategory(category: Category, discountPercentage: number): number` that applies discount to all items in category and returns number of items affected
//    - Add method `exportInventory(): string` that returns a JSON string of all items

// 8. Test your InventoryManager class with precise test cases:
//    Input Data (5 items to add):
//    1. Laptop: stock 5, Electronics category, price 1200
//    2. Mouse: stock 8, Electronics category, price 25
//    3. T-Shirt: stock 15, Clothing category, price 20
//    4. Book: stock 12, Books category, price 30
//    5. Apple: stock 20, Food category, price 2
//
//    Test Case 1: Create InventoryManager and add 5 items
//    Expected: InventoryManager created, Added 5 items
//
//    Test Case 2: Update Laptop stock from 5 to 3
//    Expected: Stock updated for 1 item
//
//    Test Case 3: Filter items by Electronics category
//    Expected: Found 2 electronics items
//
//    Test Case 4: Filter low stock items (threshold: 10)
//    Expected: Found 2 low stock items
//
//    Test Case 5: Get inventory statistics
//    Expected: Statistics with totalItems: 5, totalValue: 4500, etc.
//
//    Test Case 6: Sort items by price
//    Expected: Items sorted by price ascending
//
//    Test Case 7: Search items by name
//    Expected: Search results for 'lap': 1 item

// 💭 Questions to think about:
// - How do classes help organize related functionality?
// - What does 'private' mean for class properties?
// - Why is encapsulation important in inventory management?
// - How do you balance having many methods vs having fewer but more complex methods?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - InventoryManager created
// Test Case 1 - Added 5 items
// Test Case 2 - Stock updated for 1 item
// Test Case 3 - Found 2 electronics items
// Test Case 4 - Found 2 low stock items
// Test Case 5 - Statistics: totalItems: 5, totalValue: 4500, averagePrice: 900
// Test Case 6 - Items sorted by price: Apple ($2), T-Shirt ($20), Mouse ($25), Book ($30), Laptop ($1200)
// Test Case 7 - Search results for 'lap': 1 item
// -------------------------
