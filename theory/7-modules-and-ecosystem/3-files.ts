// 📘 Lesson: Working with files (read & write)
// In this lesson, you'll learn how to read and write files in TypeScript.

// First - reading from text files

console.log("\n-------------------------")
console.log("📖 Reading from a file")
console.log("-------------------------\n")

// First we need to import the fs (file system) module
import * as fs from "fs"

// Now we can use the fs module to read a file
// We will use fs.readFileSync
// - synchronous method
// - blocks the execution until the file is read
// - returns the file content as a string

const data = fs.readFileSync("theory/7-modules-and-ecosystem/test-data/example.txt", "utf-8")
console.log("File content:")
console.log(data)

console.log("\n-------------------------")
console.log("📖 Reading from a file - error handling")
console.log("-------------------------\n")

// What if file is not found?
// readFileSync will throw an error!
// Uncomment the following line to see the error:
// const data = fs.readFileSync("data/non-existent.txt", "utf-8") // ❌ Error reading file: Error: ENOENT: no such file or directory

// We need to handle this error using try-catch:

try {
    const data = fs.readFileSync("data/non-existent.txt", "utf-8")
    console.log("File content:")
    console.log(data)
} catch (error) {
    console.error("Error reading file:")
    console.error(error)
}

console.log("\n-------------------------")
console.log("📖 Reading from a file - finding the path")
console.log("-------------------------\n")

// If we want to find the absolute path to the test-data file, we can use the path module

import path from "path"
import { fileURLToPath } from "url"

// resolve current module directory (works in ESM)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Now we build a path to the test-data file relative to this script
const examplePath = path.join(__dirname, "test-data", "example.txt")

// when the file is in the same directory as the script
const data2 = fs.readFileSync(examplePath, "utf-8")
console.log("File content:")
console.log(data2)

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
