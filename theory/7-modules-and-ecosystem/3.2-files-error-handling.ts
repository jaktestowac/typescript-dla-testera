// 📘 Lesson: Working with files (read & write)
// In this lesson, you'll learn how to read and write files in TypeScript.

console.log("\n-------------------------")
console.log("📖 Reading from a file - error handling")
console.log("-------------------------\n")

// First we need to import the fs (file system) module
import * as fs from "fs"

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


console.log("👉 Script is still working!")