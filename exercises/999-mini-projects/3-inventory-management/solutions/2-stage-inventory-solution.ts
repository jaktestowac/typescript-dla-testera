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

// 5. Test the functions with console.log:
//    - Create an electronics item "Smartphone" with stock 15
//    - Create a clothing item "T-Shirt" with stock 50
//    - Create a book item "TypeScript Guide" with stock 30 (using default category)
//    - Log each item with its category label

// 💭 Questions to think about:
// - Why use string enums for categories?
// - How do enums help with inventory organization?
// - When should you use default parameter values?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Item: Smartphone - Category: Electronics
// Item: T-Shirt - Category: Clothing
// Item: TypeScript Guide - Category: Other
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
}

let itemIdCounter = 1

function createItem(name: string, stock: number, category: Category = Category.Other): Item {
    const item: Item = {
        id: itemIdCounter++,
        name: name,
        stock: stock,
        category: category
    }
    return item
}

function updateStock(item: Item, newStock: number): void {
    item.stock = newStock
}

function getCategoryLabel(category: Category): string {
    return category
}

// Testing the functions with precise test cases
const smartphone = createItem("Smartphone", 15, Category.Electronics)
console.log(`Test Case 1 - Item: ${smartphone.name} - Category: ${getCategoryLabel(smartphone.category)}`)
// Should print "Test Case 1 - Item: Smartphone - Category: Electronics"

const tshirt = createItem("T-Shirt", 50, Category.Clothing)
console.log(`Test Case 2 - Item: ${tshirt.name} - Category: ${getCategoryLabel(tshirt.category)}`)
// Should print "Test Case 2 - Item: T-Shirt - Category: Clothing"

const book = createItem("TypeScript Guide", 30) // Uses default Category.Other
console.log(`Test Case 3 - Item: ${book.name} - Category: ${getCategoryLabel(book.category)}`)
// Should print "Test Case 3 - Item: TypeScript Guide - Category: Other"
