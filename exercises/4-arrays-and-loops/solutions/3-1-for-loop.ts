// 🧪 Exercise 3.1: For loop
// This exercise will help you practice for loops.

// -------------------------
// ✅ Exercise: For loop ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an array `colors` with values: ["red", "green", "blue"]
// 2. Write a for loop starting from i = 0
// 3. Continue the loop while i < colors.length
// 4. Increment i by 1 in each iteration
// 5. Inside the loop, print: "Color [i]: [colors[i]]"

// 💭 Questions to think about:
// - What happens if you start the loop from i = 1?
// - What if you use <= instead of < in the condition?

// -------------------------
// 📤 Example Output:
// -------------------------
// "Color 0: red"
// "Color 1: green"
// "Color 2: blue"
// -------------------------

// 👇 Your code here 👇 
const colors = ["red", "green", "blue"] // Step 1: Create an array `colors`
for (let i = 0; i < colors.length; i++) { // Step 2-4: Write a for loop
  console.log(`Color ${i}: ${colors[i]}`) // Step 5: Print each color
} 