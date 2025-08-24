// 📘 Lesson: Working with files (read & write)
// In this lesson, you'll learn how to read and write files in TypeScript.

console.log("\n-------------------------")
console.log("📖 Reading from a file - finding the path")
console.log("-------------------------\n")

// If we want to find the absolute path to the test-data file, we can use the path module

import * as fs from "fs"
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

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
