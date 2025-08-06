// 🧪 Exercise 1.2: If-else statement
// This exercise will help you practice if-else statements.

// -------------------------
// ✅ Exercise: If-else statement ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `temperature` and assign it the value 20
// 2. Write an if statement checking if temperature < 0
// 3. Inside the if block, print "It's freezing!"
// 4. Add an else if checking if temperature <= 15
// 5. Inside the else if block, print "It's cold"
// 6. Add another else if checking if temperature <= 25
// 7. Inside this else if block, print "It's pleasant"
// 8. Add an else block that prints "It's hot!"

// 💭 Questions to think about:
// - What happens if temperature is exactly 0?
// - Why is the order of conditions important here?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "It's pleasant"
// -------------------------

// 👇 Your code here 👇 
let temperature = 20 // Step 1: Create a variable `temperature` and assign it the value 20
if (temperature < 0) { // Step 2: Check if temperature < 0
  console.log("It's freezing!") // Step 3: Print if freezing
} else if (temperature <= 15) { // Step 4: else if temperature <= 15
  console.log("It's cold") // Step 5: Print if cold
} else if (temperature <= 25) { // Step 6: else if temperature <= 25
  console.log("It's pleasant") // Step 7: Print if pleasant
} else { // Step 8: else
  console.log("It's hot!") // Print if hot
} 