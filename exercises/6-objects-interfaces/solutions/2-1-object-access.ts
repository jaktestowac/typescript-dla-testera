// 🧪 Exercise 2.1: Object access
// This exercise will help you practice accessing object properties.

// -------------------------
// ✅ Exercise: Object access ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an object called `car` with properties: brand, model, year
// 2. Access the brand property using dot notation: car.brand
// 3. Access the model property using bracket notation: car["model"]
// 4. Access the year property using bracket notation: car["year"]
// 5. Create a message combining all three properties
// 6. Print the message using console.log()

// 💭 Questions to think about:
// - When would you use bracket notation instead of dot notation?
// - What happens if you use a variable as the bracket key?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "I drive a 2020 Toyota Camry"
// -------------------------

// 👇 Your code here 👇
const car = {
    // Step 1: Create object
    brand: "Toyota",
    model: "Camry",
    year: 2020
}

const brand = car.brand // Step 2: Access brand with dot notation
const model = car["model"] // Step 3: Access model with bracket notation
const year = car["year"] // Step 4: Access year with bracket notation
const message = `I drive a ${year} ${brand} ${model}` // Step 5: Create message

console.log(message) // Step 6: Print message
