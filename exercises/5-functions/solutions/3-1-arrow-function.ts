// 🧪 Exercise 3.1: Arrow function
// This exercise will help you practice arrow functions.

// -------------------------
// ✅ Exercise: Arrow function ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an arrow function called `double` using const
// 2. Add a parameter called `num` of type number
// 3. Use the arrow syntax: const double = (num: number) => { ... }
// 4. Inside the function, return num * 2
// 5. Call the function with argument 7
// 6. Store the result and print the message

// 💭 Questions to think about:
// - What's the difference between arrow functions and regular functions?
// - Can you write this as a one-liner without curly braces?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Double of 7 is 14"
// -------------------------

// 👇 Your code here 👇 
const double = (num: number): number => { // Step 1-4: Create arrow function
  return num * 2
}
const result = double(7) // Step 5: Call the function
console.log(`Double of 7 is ${result}`) // Step 6: Print the result 