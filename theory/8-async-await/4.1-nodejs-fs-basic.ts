// -------------------------
// 📁 File System Operations (fs.promises)
// -------------------------
console.log("\n-------------------------")
console.log("📁 File System Operations")
console.log("-------------------------\n")

import { promises as fs } from "fs"

export async function readFileExample(): Promise<void> {
    try {
        // Create a test file first
        await fs.writeFile("test.txt", "Hello from Node.js!")
        console.log("✅ File created successfully")

        // Read the file back
        const content = await fs.readFile("test.txt", "utf8")
        console.log("📖 File content:", content)

        // Delete the file
        await fs.unlink("test.txt")
        console.log("🗑️ File deleted successfully")
    } catch (error) {
        console.error("❌ Error:", error)
    }
}

// Lets test the file operations

await readFileExample()

// On console:
// ✅ File created successfully
// 📖 File content: Hello from Node.js!
// 🗑️ File deleted successfully
