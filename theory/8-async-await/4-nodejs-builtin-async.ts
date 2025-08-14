// 📘 Lesson: Node.js Built-in Async Functions
// In this lesson, you'll learn how to use Node.js built-in async functions
// for file operations, HTTP requests, and other common tasks.

// -------------------------
// 🤔 Why Node.js Built-in Async Functions?
// -------------------------
// Node.js provides many built-in modules that work asynchronously.
// These functions are essential for:
// • Reading and writing files
// • Making HTTP requests
// • Working with databases
// • Processing data streams

// Think of it like this:
// 📁 File operations → takes time to read/write
// 🌐 Network requests → takes time to get data from internet
// 💾 Database queries → takes time to fetch data

// -------------------------
// 📁 File System Operations (fs.promises)
// -------------------------

import { promises as fs } from 'fs'

console.log("\n-------------------------")
console.log("📁 File System Operations")
console.log("-------------------------\n")

// ✅ Reading a file asynchronously
async function readFileExample(): Promise<void> {
    try {
        // Create a test file first
        await fs.writeFile('test.txt', 'Hello from Node.js!')
        console.log('✅ File created successfully')
        
        // Read the file back
        const content = await fs.readFile('test.txt', 'utf8')
        console.log('📖 File content:', content)
        
        // Delete the file
        await fs.unlink('test.txt')
        console.log('🗑️ File deleted successfully')
        
    } catch (error) {
        console.error('❌ Error:', error)
    }
}

// -------------------------
// 📁 More File Operations
// -------------------------
console.log("\n-------------------------")
console.log("📁 More File Operations")
console.log("-------------------------\n")

async function fileOperationsExample(): Promise<void> {
    try {
        // Write multiple lines to a file
        const data = `Line 1: Hello
Line 2: World
Line 3: From TypeScript!`
        
        await fs.writeFile('data.txt', data, 'utf8')
        console.log('✅ Data file created')
        
        // Read file as buffer (binary data)
        const buffer = await fs.readFile('data.txt')
        console.log('📦 Buffer size:', buffer.length, 'bytes')
        
        // Read file as string
        const text = await fs.readFile('data.txt', 'utf8')
        console.log('📖 Text content:', text)
        
        // Check if file exists
        try {
            await fs.access('data.txt')
            console.log('✅ File exists')
        } catch {
            console.log('❌ File does not exist')
        }
        
        // Get file stats
        const stats = await fs.stat('data.txt')
        console.log('📊 File size:', stats.size, 'bytes')
        console.log('📅 Created:', stats.birthtime)
        console.log('📅 Modified:', stats.mtime)
        
        // Copy file
        await fs.copyFile('data.txt', 'data-backup.txt')
        console.log('📋 File copied')
        
        // List directory contents
        const files = await fs.readdir('.')
        console.log('📁 Directory contents:', files.filter(f => f.endsWith('.txt')))
        
        // Clean up
        await fs.unlink('data.txt')
        await fs.unlink('data-backup.txt')
        console.log('🧹 Files cleaned up')
        
    } catch (error) {
        console.error('❌ Error:', error)
    }
}

// -------------------------
// 🌐 HTTP Requests (using fetch)
// -------------------------
console.log("\n-------------------------")
console.log("🌐 HTTP Requests")
console.log("-------------------------\n")

async function httpExample(): Promise<void> {
    try {
        // Make a GET request
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        console.log('📡 API Response:', data.title)
        
    } catch (error) {
        console.error('❌ HTTP Error:', error)
    }
}

// -------------------------
// 🔄 Working with JSON files
// -------------------------
console.log("\n-------------------------")
console.log("🔄 Working with JSON files")
console.log("-------------------------\n")

async function jsonFileExample(): Promise<void> {
    try {
        // Create a JSON object
        const userData = {
            name: "Alice",
            age: 30,
            email: "alice@example.com",
            hobbies: ["reading", "coding", "hiking"]
        }
        
        // Write JSON to file
        await fs.writeFile('user.json', JSON.stringify(userData, null, 2))
        console.log('✅ JSON file created')
        
        // Read and parse JSON
        const jsonContent = await fs.readFile('user.json', 'utf8')
        const parsedData = JSON.parse(jsonContent)
        console.log('📖 Parsed JSON:', parsedData.name)
        
        // Update JSON data
        parsedData.age = 31
        parsedData.hobbies.push('swimming')
        
        // Write updated JSON
        await fs.writeFile('user.json', JSON.stringify(parsedData, null, 2))
        console.log('✅ JSON file updated')
        
        // Clean up
        await fs.unlink('user.json')
        console.log('🧹 JSON file cleaned up')
        
    } catch (error) {
        console.error('❌ JSON Error:', error)
    }
}

// -------------------------
// ⚠️ Error Handling Best Practices
// -------------------------
console.log("\n-------------------------")
console.log("⚠️ Error Handling Best Practices")
console.log("-------------------------\n")

async function errorHandlingExample(): Promise<void> {
    try {
        // Try to read a non-existent file
        await fs.readFile('nonexistent.txt', 'utf8')
    } catch (error) {
        if (error instanceof Error) {
            console.log('❌ Error type:', error.constructor.name)
            console.log('❌ Error message:', error.message)
            
            // Check for specific error types
            if (error.message.includes('ENOENT')) {
                console.log('📝 This is a "file not found" error')
            }
        }
    }
}

// -------------------------
// 🧠 Key Takeaways:
// -------------------------
// 1. Node.js built-in modules provide async versions of common operations
// 2. fs.promises gives you Promise-based file operations
// 3. HTTP requests can use fetch() in newer Node.js versions
// 4. Always handle errors with try-catch in async functions
// 5. Use JSON.stringify() to write objects to files
// 6. Use JSON.parse() to read objects from files
// 7. Check file existence with fs.access()
// 8. Get file information with fs.stat()

// -------------------------
// 📚 Related Documentation:
// -------------------------
// • Node.js File System: https://nodejs.org/api/fs.html
// • Node.js HTTP/HTTPS: https://nodejs.org/api/https.html
// • Node.js Util: https://nodejs.org/api/util.html
// • Promisify: https://nodejs.org/api/util.html#utilpromisifyoriginal
// • Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}