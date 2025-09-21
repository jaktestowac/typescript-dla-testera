// 🧪 Exercise 1: Inventory Management Stage 1 - Basic Item Creation
// This exercise will help you practice creating a simple inventory management system with basic item functionality.

// -------------------------
// ✅ Exercise: Basic Item Creation ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an Item interface with properties:
//    - id: number
//    - name: string
//    - stock: number

// 2. Create a function called `createItem` that takes a name and stock quantity:
//    - Generate a unique id (you can use a simple counter starting from 1)
//    - Return an Item object

// 3. Create a function called `updateStock` that takes an Item and a new stock quantity:
//    - Update the stock property of the item

// 4. Test the functions with console.log:
//    - Create an item "Laptop" with stock 10
//    - Create an item "Mouse" with stock 25
//    - Update Laptop stock to 8
//    - Log both items

// 💭 Questions to think about:
// - How do interfaces help define data structures for inventory?
// - Why use functions to create and modify items?
// - How does object mutability work in inventory management?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Item created: { id: 1, name: 'Laptop', stock: 10 }
// Item created: { id: 2, name: 'Mouse', stock: 25 }
// Stock updated: { id: 1, name: 'Laptop', stock: 8 }
// -------------------------

// 👇 Your code here 👇

interface Item {
    id: number
    name: string
    stock: number
}

let itemIdCounter = 1

function createItem(name: string, stock: number): Item {
    const item: Item = {
        id: itemIdCounter++,
        name: name,
        stock: stock
    }
    return item
}

function updateStock(item: Item, newStock: number): void {
    item.stock = newStock
}

// Testing the functions with precise test cases
const laptop = createItem("Laptop", 10)
console.log("Test Case 1 - Item created:", laptop) // Should print { id: 1, name: 'Laptop', stock: 10 }

const mouse = createItem("Mouse", 25)
console.log("Test Case 2 - Item created:", mouse) // Should print { id: 2, name: 'Mouse', stock: 25 }

updateStock(laptop, 8)
console.log("Test Case 3 - Stock updated:", laptop) // Should print { id: 1, name: 'Laptop', stock: 8 }
