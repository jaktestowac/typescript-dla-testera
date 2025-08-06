// 🧪 Exercise 4.2: Inferred vs any
// This exercise will help you understand the difference between inferred types and `any`.

// -------------------------
// ✅ Exercise: Inferred vs any ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable called `inferredText` without type annotation: let inferredText
// 2. Assign it a string value (e.g., "Hello")
// 3. Try to reassign it to a number value (e.g., 42)
// 4. Observe the TypeScript error
// 5. Create another variable called `anyText` with explicit `any` type: let anyText: any
// 6. Assign it a string
// 7. Reassign it to a number (this should work)

// 💭 Questions to think about:
// - What TypeScript error do you see when reassigning the inferred variable?
// - Why does the explicit `any` variable allow type changes?
// - What's the difference between type inference and explicit typing?

// -------------------------
// 📤 Expected Output:
// -------------------------
// ❌ Compile-time error: "Type 'number' is not assignable to type 'string'"
// ✅ anyText variable allows reassignment without errors
// -------------------------

// 👇 Your code here 👇
