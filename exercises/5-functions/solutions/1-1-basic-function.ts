// 🧪 Exercise 1.1: Basic function
// This exercise will help you practice creating functions.

// -------------------------
// ✅ Exercise: Basic function ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `greet` using the function keyword
// 2. Add a parameter called `name` of type string
// 3. Inside the function, return the string "Hello, " + name + "!"
// 4. Call the function with the argument "Alice"
// 5. Store the result in a variable and print it

// 💭 Questions to think about:
// - What happens if you don't pass any arguments to the function?
// - What if you pass a number instead of a string?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Hello, Alice!"
// -------------------------

// 👇 Your code here 👇 
function greet(name: string): string { // Step 1-3: Create function with parameter and return greeting
  return "Hello, " + name + "!"
}
const message = greet("Alice") // Step 4: Call the function
console.log(message) // Step 5: Print the result 