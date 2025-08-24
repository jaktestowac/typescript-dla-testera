// -------------------------
// 🌐 HTTP Requests (using fetch)
// -------------------------
console.log("\n-------------------------")
console.log("🌐 HTTP Requests")
console.log("-------------------------\n")

export async function httpExample(): Promise<void> {
    try {
        console.log("🌐 Making HTTP GET request...")

        // Make a GET request
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

        console.log("🌐 HTTP Response status:", response.status)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log("📡 API Response:", data.title)
    } catch (error) {
        console.error("❌ HTTP Error:", error)
    }
}

// Lets test the HTTP request

await httpExample()

// On console:
// 🌐 Making HTTP GET request...
// 🌐 HTTP Response status: 200
// 📡 API Response: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
