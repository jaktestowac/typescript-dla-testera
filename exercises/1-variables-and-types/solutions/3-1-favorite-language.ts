// 🧪 Exercise 3.1: Favorite language
// This exercise will help you understand how TypeScript automatically assigns types.

// -------------------------
// ✅ Exercise: Favorite language ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable called `language` using const (without type annotation)
// 2. Assign it a string value (e.g., "TypeScript")
// 3. Let TypeScript automatically infer the type as string
// 4. Use console.log() to print "My favorite language is " + language
// 5. Try using template literals: `My favorite language is ${language}`

// 💭 Questions to think about:
// - What happens if you assign a number to this variable later?
// - How does TypeScript know this is a string type?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "My favorite language is TypeScript"
// "My favorite language is TypeScript"
// -------------------------

// 👇 Your code here 👇
const language = "TypeScript" // Step 1: Create a variable called `language`; // Step 2: Assign it a string value; // Step 3: TypeScript infers the type as string
console.log("My favorite language is " + language) // Step 4: Print using string concatenation
console.log(`My favorite language is ${language}`) // Step 5: Print using template literals
