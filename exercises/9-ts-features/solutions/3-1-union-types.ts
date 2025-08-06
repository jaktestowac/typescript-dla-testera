// 🧪 Exercise 3.1: Union types
// This exercise will help you practice using union types.

// -------------------------
// ✅ Exercise: Union types ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a type called `Status` using union types: `type Status = 'loading' | 'success' | 'error'`
// 2. Create a function called `getStatusMessage` that takes a Status parameter
// 3. Use if-else or switch statement to return different messages based on status
// 4. Call the function with each status value and print the results
// 5. Use console.log() to print each message

// 💭 Questions to think about:
// - What happens if you try to pass a string that's not in the union type?
// - How does TypeScript help prevent invalid status values?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Please wait..."
// "Operation completed successfully!"
// "Something went wrong!"
// -------------------------

// 👇 Your code here 👇
type Status = "loading" | "success" | "error" // Step 1: Create union type

function getStatusMessage(status: Status): string {
    // Step 2: Create function
    switch (
        status // Step 3: Use switch
    ) {
        case "loading":
            return "Please wait..."
        case "success":
            return "Operation completed successfully!"
        case "error":
            return "Something went wrong!"
    }
}

console.log(getStatusMessage("loading")) // Step 4-5: Call and print
console.log(getStatusMessage("success"))
console.log(getStatusMessage("error"))
