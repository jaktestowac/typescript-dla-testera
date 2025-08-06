// 🧪 Exercise 4.1: Reassigning values
// This exercise will help you understand how the `any` type works.

// -------------------------
// ✅ Exercise: Reassigning values ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable called `item` with explicit `any` type: let item: any
// 2. Assign it a string value (e.g., "Book")
// 3. Use console.log() to print "Item (string): " + item
// 4. Reassign it to a number value (e.g., 123)
// 5. Print "Item (number): " + item
// 6. Reassign it to a boolean value (e.g., true)
// 7. Print "Item (boolean): " + item

// 💭 Questions to think about:
// - What happens if you don't specify the `any` type?
// - Why might using `any` be problematic in TypeScript?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Item (string): Book"
// "Item (number): 123"
// "Item (boolean): true"
// -------------------------

// 👇 Your code here 👇
let item: any // Step 1: Create a variable called `item` with explicit `any` type
item = "Book" // Step 2: Assign it a string value
console.log("Item (string): " + item) // Step 3: Print the string value
item = 123 // Step 4: Reassign it to a number value
console.log("Item (number): " + item) // Step 5: Print the number value
item = true // Step 6: Reassign it to a boolean value
console.log("Item (boolean): " + item) // Step 7: Print the boolean value
