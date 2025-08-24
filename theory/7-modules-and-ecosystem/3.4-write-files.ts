// 📘 Lesson: Working with files (read & write)
// In this lesson, you'll learn how to read and write files in TypeScript.

// First we need to import the fs (file system) module
import * as fs from "fs"

console.log("\n-------------------------")
console.log("📖 Writing to a file")
console.log("-------------------------\n")

// We can use fs.writeFileSync to write to a file
// - synchronous method
// - blocks the execution until the file is written

const outputPath = "theory/7-modules-and-ecosystem/test-data/output.txt"

fs.writeFileSync(outputPath, "Hello, world!", "utf-8")
console.log("File written successfully.")

// Now check the output.txt file!

// Also now we can read the content of the output.txt file
const outputData = fs.readFileSync(outputPath, "utf-8")
console.log("Output file content:")
console.log(outputData)

// -------------------------
// 🧠 Summary:
// -------------------------
// - File system operations are essential for reading and writing data
// - Use `fs.readFileSync` to read files synchronously
// - Use `fs.writeFileSync` to write files synchronously
// - Always handle errors using try-catch
// - Use absolute paths to avoid issues with relative paths!

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • File System: https://www.typescriptlang.org/docs/handbook/2/file-system.html
// • Node.js File System: https://nodejs.org/api/fs.html
// • Path Module: https://nodejs.org/api/path.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
