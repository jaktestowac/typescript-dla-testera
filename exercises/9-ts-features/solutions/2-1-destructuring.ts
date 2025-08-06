// 🧪 Exercise 2.1: Destructuring
// This exercise will help you practice destructuring.

// -------------------------
// ✅ Exercise: Destructuring ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an object called `point` with properties: x (number), y (number)
// 2. Use destructuring assignment: const { x, y } = point
// 3. Extract the x and y values into separate variables
// 4. Create a message using the destructured variables
// 5. Print the message using console.log()

// 💭 Questions to think about:
// - What happens if you try to destructure a property that doesn't exist?
// - Can you use different variable names during destructuring?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Point coordinates: x=10, y=20"
// -------------------------

// 👇 Your code here 👇

const point = { x: 10, y: 20 } // Step 1: Create object
const { x, y } = point // Step 2-3: Destructure

const message = `Point coordinates: x=${x}, y=${y}` // Step 4: Create message

console.log(message) // Step 5: Print
