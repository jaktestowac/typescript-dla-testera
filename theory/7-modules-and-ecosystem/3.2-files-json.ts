// 📘 Lesson: Working with files (read & write) with json data
// In this lesson, you'll learn how to read and write json files in TypeScript.

// First - reading from json files

console.log("\n-------------------------")
console.log("📖 Reading from a json file")
console.log("-------------------------\n")

import * as fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// resolve current module directory (works in ESM)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Now we build a path to the test-data file relative to this script
const examplePath = path.join(__dirname, "test-data", "example.json")

// when the file is in the same directory as the script
const rawJsonString = fs.readFileSync(examplePath, "utf-8")
console.log("File content as string:")
console.log(rawJsonString)

// Now we can parse the JSON string into an object

const jsonData = JSON.parse(rawJsonString)
console.log("Parsed JSON data:")
console.log(jsonData)

// And now we can access the data as an object
console.log("Accessing JSON data:")
console.log(jsonData.name)
console.log(jsonData.age)
console.log(jsonData.city)

// writing to a json file
console.log("\n-------------------------")
console.log("📖 Writing to a json file")
console.log("-------------------------\n")

const myNewObject = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
}

// We can use fs.writeFileSync to write to a file
// - synchronous method
// - blocks the execution until the file is written

const outputPath = path.join(__dirname, "test-data", "output.json")

// first we need to convert the data to a JSON string
const jsonString = JSON.stringify(myNewObject, null, 2)

fs.writeFileSync(outputPath, jsonString, "utf-8")
console.log("File written successfully!")

// Now check the output.json file in the test-data directory

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
