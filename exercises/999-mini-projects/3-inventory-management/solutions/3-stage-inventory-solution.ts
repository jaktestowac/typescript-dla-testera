// 🧪 Exercise 3: Inventory Management Stage 3 - Price Tracking
// This exercise will help you practice adding price functionality and financial calculations to inventory items.

// -------------------------
// ✅ Exercise: Price Tracking ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Update the Item interface to include price:
//    - Add price: number property

// 2. Update the `createItem` function to accept a price parameter:
//    - Add price parameter (required)

// 3. Create a function called `calculateItemValue` that takes an Item and returns the total value:
//    - Return stock * price

// 4. Create a function called `updatePrice` that takes an Item and a new price:
//    - Update the price property of the item

// 5. Create a function called `applyDiscount` that takes an Item and a discount percentage:
//    - Calculate new price after discount (e.g., 20% discount means price * 0.8)
//    - Update the item price

// 6. Test the functions with console.log:
//    - Create an item "Laptop" with stock 5 and price 1000
//    - Calculate and log the total value
//    - Apply 10% discount and log the new price
//    - Calculate and log the new total value

// 💭 Questions to think about:
// - How do financial calculations work in inventory management?
// - Why is price a required parameter for inventory items?
// - What are the challenges of price updates in inventory systems?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Item: Laptop - Price: $1000 - Stock: 5 - Total Value: $5000
// After 10% discount: Laptop - Price: $900 - Stock: 5 - Total Value: $4500
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

// Testing the functions with precise test cases
const laptop = createItem("Laptop", 5, Category.Electronics, 1000)
console.log(
    `Test Case 1 - Item: ${laptop.name} - Price: $${laptop.price} - Stock: ${laptop.stock} - Total Value: $${calculateItemValue(laptop)}`
)
// Should print "Test Case 1 - Item: Laptop - Price: $1000 - Stock: 5 - Total Value: $5000"

applyDiscount(laptop, 10) // Apply 10% discount
console.log(
    `Test Case 2 - After 10% discount: ${laptop.name} - Price: $${laptop.price} - Stock: ${laptop.stock} - Total Value: $${calculateItemValue(laptop)}`
)
// Should print "Test Case 2 - After 10% discount: Laptop - Price: $900 - Stock: 5 - Total Value: $4500"
