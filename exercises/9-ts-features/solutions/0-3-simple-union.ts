// 🧪 Exercise 0.3: Simple Union Types (Beginner Friendly)
// This exercise will help you understand what union types are in simple terms.

// -------------------------
// ✅ Exercise: Simple Union Types ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a type called `Answer` using union types: `type Answer = 'yes' | 'no'`
// 2. Create a variable called `userAnswer` of type Answer
// 3. Assign it the value 'yes'
// 4. Print "User answered: " + userAnswer

// 💭 Questions to think about:
// - What is a union type? (Think of it like "this OR that")
// - Why use union types? (To limit what values a variable can have)

// -------------------------
// 📤 Expected Output:
// -------------------------
// "User answered: yes"
// -------------------------

// 👇 Your code here 👇 
type Answer = 'yes' | 'no' // Step 1: Create union type
let userAnswer: Answer = 'yes' // Step 2-3: Create variable and assign value
console.log("User answered: " + userAnswer) // Step 4: Print 