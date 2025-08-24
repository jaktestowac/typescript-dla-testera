// -------------------------
// ⚠️ Error Handling Best Practices
// -------------------------
console.log("\n-------------------------")
console.log("⚠️ Error Handling Best Practices")
console.log("-------------------------\n")

import { promises as fs } from "fs"

export async function errorHandlingExample(): Promise<void> {
    try {
        // Try to read a non-existent file
        await fs.readFile("nonexistent.txt", "utf8")
    } catch (error) {
        if (error instanceof Error) {
            console.log("❌ Error type:", error.constructor.name)
            console.log("❌ Error message:", error.message)

            // Check for specific error types
            if (error.message.includes("ENOENT")) {
                console.log('📝 This is a "file not found" error')
            }
        }
    }
}

// Lets test the Error Handling

await errorHandlingExample()

// On console:
// ❌ Error type: TypeError
// ❌ Error message: Cannot read properties of undefined (reading 'name')
// 📝 This is a "file not found" error
