// -------------------------
// 📁 More File Operations
// -------------------------
console.log("\n-------------------------")
console.log("📁 More File Operations")
console.log("-------------------------\n")

import { promises as fs } from "fs"

export async function fileOperationsExample(): Promise<void> {
    try {
        // Write multiple lines to a file
        const data = `Line 1: Hello
Line 2: World
Line 3: From TypeScript!`

        await fs.writeFile("data.txt", data, "utf8")
        console.log("✅ Data file created")

        // Read file as buffer (binary data)
        const buffer = await fs.readFile("data.txt")
        console.log("📦 Buffer size:", buffer.length, "bytes")

        // Read file as string
        const text = await fs.readFile("data.txt", "utf8")
        console.log("📖 Text content:", text)

        // Check if file exists
        try {
            await fs.access("data.txt")
            console.log("✅ File exists")
        } catch {
            console.log("❌ File does not exist")
        }

        // Get file stats
        const stats = await fs.stat("data.txt")
        console.log("📊 File size:", stats.size, "bytes")
        console.log("📅 Created:", stats.birthtime)
        console.log("📅 Modified:", stats.mtime)

        // Copy file
        await fs.copyFile("data.txt", "data-backup.txt")
        console.log("📋 File copied")

        // List directory contents
        const files = await fs.readdir(".")
        console.log(
            "📁 Directory contents:",
            files.filter((f) => f.endsWith(".txt"))
        )

        // Clean up
        await fs.unlink("data.txt")
        await fs.unlink("data-backup.txt")
        console.log("🧹 Files cleaned up")
    } catch (error) {
        console.error("❌ Error:", error)
    }
}

// Lets test the file operations

await fileOperationsExample()

// On console:
// ✅ Data file created
// 📦 Buffer size: 56 bytes
// 📖 Text content: Line 1: Hello
// Line 2: World
// Line 3: From TypeScript!
// ✅ File exists
// 📊 File size: 56 bytes
// 📅 Created: <date>
// 📅 Modified: <date>
// 📋 File copied
// 📁 Directory contents: [ 'data.txt', 'data-backup.txt' ]
// 🧹 Files cleaned up
