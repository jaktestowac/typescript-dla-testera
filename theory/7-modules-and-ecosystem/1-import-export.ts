// 📘 Lesson: Import and Export in TypeScript
// In this lesson, you'll learn how to reuse code across files using `export` and `import`.

// -------------------------
// 🔄 Why use modules?
// -------------------------
// Modules let you split your code into smaller, reusable pieces.
// This keeps your code cleaner and easier to manage.

// You can export functions, variables, constants, or entire objects from one file
// and import them into another file.

// -------------------------
// 📥 Importing from another file
// -------------------------

// Import specific things from the module
import { add, multiply } from "./helpers/math-utils"

console.log("\n-------------------------")
console.log("📥 Importing functions from math-utils")
console.log("-------------------------\n")

console.log("5 + 3 =", add(5, 3)) // 8
console.log("4 x 7 =", multiply(4, 7)) // 28

// You can also import a constant or variable
import { siteName } from "./helpers/user"

console.log("\n-------------------------")
console.log("📥 Importing a constant")
console.log("-------------------------\n")

console.log("Welcome to:", siteName) // "Welcome to: TypeScript Portal"

// -------------------------
// 📤 Expected Output:
// -------------------------
// 5 + 3 = 8
// 4 x 7 = 28
// Welcome to: TypeScript Portal

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Modules: https://www.typescriptlang.org/docs/handbook/2/modules.html
// • Module Resolution: https://www.typescriptlang.org/docs/handbook/2/module-resolution.html
// • Declaration Files: https://www.typescriptlang.org/docs/handbook/2/declaration-files/introduction.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
