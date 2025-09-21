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

// 6. Test the functions with console.log:
//    - Create item "Laptop" with stock 5, Electronics category, price 1200
//    - Create item "Mouse" with stock 8, Electronics category, price 25
//    - Create item "T-Shirt" with stock 15, Clothing category, price 20
//    - Create item "Book" with stock 12, Books category, price 30
//    - Create item "Apple" with stock 20, Food category, price 2
//    - filterItemsByCategory(items, Category.Electronics) should return 2 items
//    - filterItemsByPriceRange(items, 10, 100) should return 3 items
//    - filterLowStockItems(items, 10) should return 2 items
//    - isLowStock(laptop, 10) should return true
//    - isOutOfStock(mouse) should return false

// 💭 Questions to think about:
// - Why are stock alerts important in inventory management?
// - How do different filtering functions help with inventory analysis?
// - When should you use different filtering approaches?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Electronics items: [
//   { name: 'Laptop', category: 'Electronics' },
//   { name: 'Mouse', category: 'Electronics' }
// ]
// Items in price range $10-$100: [
//   { name: 'Mouse', price: 25 },
//   { name: 'T-Shirt', price: 20 },
//   { name: 'Book', price: 30 }
// ]
// Low stock items (threshold: 10): [
//   { name: 'Laptop', stock: 5 },
//   { name: 'Mouse', stock: 8 }
// ]
// Stock alerts: Laptop is low on stock! (5 remaining)
// Stock alerts: Mouse is low on stock! (8 remaining)
// -------------------------

// 👇 Your code here 👇

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

// Testing the functions with precise test cases
// Input Data (5 items):
// 1. Laptop: stock 5, Electronics category, price 1200
// 2. Mouse: stock 8, Electronics category, price 25
// 3. T-Shirt: stock 15, Clothing category, price 20
// 4. Book: stock 12, Books category, price 30
// 5. Apple: stock 20, Food category, price 2

const items: Item[] = []
items.push(createItem("Laptop", 5, Category.Electronics, 1200))
items.push(createItem("Mouse", 8, Category.Electronics, 25))
items.push(createItem("T-Shirt", 15, Category.Clothing, 20))
items.push(createItem("Book", 12, Category.Books, 30))
items.push(createItem("Apple", 20, Category.Food, 2))

const electronicsItems = filterItemsByCategory(items, Category.Electronics)
console.log(`Test Case 1 - Electronics items: ${electronicsItems.length}`)

const priceRangeItems = filterItemsByPriceRange(items, 10, 100)
console.log(`Test Case 2 - Items in price range $10-$100: ${priceRangeItems.length}`)

const lowStockItems = filterLowStockItems(items, 10)
console.log(`Test Case 3 - Low stock items (threshold: 10): ${lowStockItems.length}`)

// Test Case 4: Check stock alerts
const laptop = items.find((item) => item.name === "Laptop")
const mouse = items.find((item) => item.name === "Mouse")
const alerts: string[] = []
if (laptop && isLowStock(laptop, 10)) alerts.push(`${laptop.name} (${laptop.stock})`)
if (mouse && isLowStock(mouse, 10)) alerts.push(`${mouse.name} (${mouse.stock})`)
console.log(`Test Case 4 - Stock alerts: ${alerts.join(", ")}`)
