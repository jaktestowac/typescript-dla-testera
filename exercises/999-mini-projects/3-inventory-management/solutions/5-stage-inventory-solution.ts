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

enum Category {
    Electronics = "Electronics",
    Clothing = "Clothing",
    Books = "Books",
    Food = "Food",
    Other = "Other"
}

interface Item {
    id: number
    name: string
    stock: number
    category: Category
    price: number
}

let itemIdCounter = 1

function createItem(name: string, stock: number, category: Category = Category.Other, price: number): Item {
    const item: Item = {
        id: itemIdCounter++,
        name: name,
        stock: stock,
        category: category,
        price: price
    }
    return item
}

function updateStock(item: Item, newStock: number): void {
    item.stock = newStock
}

function getCategoryLabel(category: Category): string {
    return category
}

function calculateItemValue(item: Item): number {
    return item.stock * item.price
}

function updatePrice(item: Item, newPrice: number): void {
    item.price = newPrice
}

function applyDiscount(item: Item, discountPercentage: number): void {
    const discount = item.price * (discountPercentage / 100)
    item.price = item.price - discount
}

function isLowStock(item: Item, threshold: number): boolean {
    return item.stock <= threshold
}

function isOutOfStock(item: Item): boolean {
    return item.stock === 0
}

function filterItemsByCategory(items: Item[], category: Category): Item[] {
    return items.filter((item) => item.category === category)
}

function filterItemsByPriceRange(items: Item[], minPrice: number, maxPrice: number): Item[] {
    return items.filter((item) => item.price >= minPrice && item.price <= maxPrice)
}

function filterLowStockItems(items: Item[], threshold: number): Item[] {
    return items.filter((item) => isLowStock(item, threshold))
}

class InventoryManager {
    private items: Item[] = []

    // Basic inventory management
    addItem(name: string, stock: number, category: Category = Category.Other, price: number): Item {
        const item = createItem(name, stock, category, price)
        this.items.push(item)
        return item
    }

    getAllItems(): Item[] {
        return [...this.items] // Return a copy to prevent external modification
    }

    getItemById(id: number): Item | undefined {
        return this.items.find((item) => item.id === id)
    }

    getItemsCount(): number {
        return this.items.length
    }

    // Item modification
    updateStock(id: number, newStock: number): boolean {
        const item = this.getItemById(id)
        if (item) {
            item.stock = newStock
            return true
        }
        return false
    }

    updatePrice(id: number, newPrice: number): boolean {
        const item = this.getItemById(id)
        if (item) {
            item.price = newPrice
            return true
        }
        return false
    }

    removeItem(id: number): boolean {
        const index = this.items.findIndex((item) => item.id === id)
        if (index !== -1) {
            this.items.splice(index, 1)
            return true
        }
        return false
    }

    // Advanced filtering
    getItemsByCategory(category: Category): Item[] {
        return this.items.filter((item) => item.category === category)
    }

    getItemsByPriceRange(minPrice: number, maxPrice: number): Item[] {
        return this.items.filter((item) => item.price >= minPrice && item.price <= maxPrice)
    }

    getLowStockItems(threshold: number): Item[] {
        return this.items.filter((item) => isLowStock(item, threshold))
    }

    getOutOfStockItems(): Item[] {
        return this.items.filter((item) => isOutOfStock(item))
    }

    // Search and statistics
    searchItems(query: string): Item[] {
        const lowerQuery = query.toLowerCase()
        return this.items.filter((item) => item.name.toLowerCase().includes(lowerQuery))
    }

    getInventoryStatistics() {
        const totalItems = this.items.length
        const totalValue = this.items.reduce((sum, item) => sum + calculateItemValue(item), 0)
        const lowStockItems = this.getLowStockItems(10).length
        const outOfStockItems = this.getOutOfStockItems().length

        const itemsByCategory = {
            electronics: this.items.filter((item) => item.category === Category.Electronics).length,
            clothing: this.items.filter((item) => item.category === Category.Clothing).length,
            books: this.items.filter((item) => item.category === Category.Books).length,
            food: this.items.filter((item) => item.category === Category.Food).length,
            other: this.items.filter((item) => item.category === Category.Other).length
        }

        const averagePrice = totalItems === 0 ? 0 : totalValue / totalItems

        return {
            totalItems,
            totalValue,
            lowStockItems,
            outOfStockItems,
            itemsByCategory,
            averagePrice: Math.round(averagePrice * 100) / 100 // Round to 2 decimal places
        }
    }

    // Sorting methods
    sortItemsByPrice(): Item[] {
        return [...this.items].sort((a, b) => a.price - b.price) // Lowest price first
    }

    sortItemsByStock(): Item[] {
        return [...this.items].sort((a, b) => b.stock - a.stock) // Highest stock first
    }

    // Utility methods
    applyDiscountToCategory(category: Category, discountPercentage: number): number {
        const categoryItems = this.getItemsByCategory(category)
        categoryItems.forEach((item) => applyDiscount(item, discountPercentage))
        return categoryItems.length
    }

    exportInventory(): string {
        return JSON.stringify(this.items, null, 2)
    }
}

// Comprehensive testing with structured test cases
const inventoryManager = new InventoryManager()

// Test Case 1: Create InventoryManager and add 5 items
inventoryManager.addItem("Laptop", 5, Category.Electronics, 1200)
inventoryManager.addItem("Mouse", 8, Category.Electronics, 25)
inventoryManager.addItem("T-Shirt", 15, Category.Clothing, 20)
inventoryManager.addItem("Book", 12, Category.Books, 30)
inventoryManager.addItem("Apple", 20, Category.Food, 2)

console.log("Test Case 1 - InventoryManager created")
console.log(`Test Case 1 - Added ${inventoryManager.getItemsCount()} items`)

// Test Case 2: Update Laptop stock from 5 to 3
inventoryManager.updateStock(1, 3)
console.log("Test Case 2 - Stock updated for 1 item")

// Test Case 3: Filter items by Electronics category
const electronicsItems = inventoryManager.getItemsByCategory(Category.Electronics)
console.log(`Test Case 3 - Found ${electronicsItems.length} electronics items`)

// Test Case 4: Filter low stock items (threshold: 10)
const lowStockItems = inventoryManager.getLowStockItems(10)
console.log(`Test Case 4 - Found ${lowStockItems.length} low stock items`)

// Test Case 5: Get inventory statistics
const stats = inventoryManager.getInventoryStatistics()
console.log(
    `Test Case 5 - Statistics: totalItems: ${stats.totalItems}, totalValue: ${stats.totalValue}, averagePrice: ${stats.averagePrice}`
)

// Test Case 6: Sort items by price
const sortedByPrice = inventoryManager.sortItemsByPrice()
const sortedNames = sortedByPrice.map((item) => `${item.name} ($${item.price})`).join(", ")
console.log(`Test Case 6 - Items sorted by price: ${sortedNames}`)

// Test Case 7: Search items by name
const searchResults = inventoryManager.searchItems("lap")
console.log(`Test Case 7 - Search results for 'lap': ${searchResults.length} item`)
