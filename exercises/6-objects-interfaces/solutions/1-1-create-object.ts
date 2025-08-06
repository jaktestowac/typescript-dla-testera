// 🧪 Exercise 1.1: Create object
// This exercise will help you practice creating objects.

// -------------------------
// ✅ Exercise: Create object ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an object called `person` using object literal syntax
// 2. Add properties: name (string), age (number), city (string)
// 3. Access the name property using dot notation: person.name
// 4. Access the age property using dot notation: person.age
// 5. Create a message using template literals or string concatenation
// 6. Print the message using console.log()

// 💭 Questions to think about:
// - What happens if you try to access a property that doesn't exist?
// - How would you add a new property to the object?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Hello, my name is John and I'm 25 years old"
// -------------------------

// 👇 Your code here 👇 
const person = { // Step 1: Create object
  name: "John", // Step 2: Add properties
  age: 25,
  city: "New York"
}
const message = `Hello, my name is ${person.name} and I'm ${person.age} years old` // Step 5: Create message
console.log(message) // Step 6: Print message 