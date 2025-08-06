// 🧪 Exercise 0.1: Simple Enum (Beginner Friendly)
// This exercise will help you understand what an enum is in simple terms.

// -------------------------
// ✅ Exercise: Simple Enum ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a simple enum called `Season` using: enum Season { ... }
// 2. Add only two values: Summer, Winter
// 3. Create a variable called `currentSeason` of type Season
// 4. Assign it the value Season.Summer
// 5. Print "Current season is " + currentSeason

// 💭 Questions to think about:
// - What is an enum? (Think of it like a list of choices)
// - Why use an enum? (To limit what values a variable can have)

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Current season is Summer"
// -------------------------

// 👇 Your code here 👇 

enum Season { // Step 1: Create enum
  Summer, // Step 2: Add values
  Winter
}

let currentSeason: Season = Season.Summer // Step 3-4: Create variable and assign value
console.log("Current season is " + Season[currentSeason]) // Step 5: Print season name 