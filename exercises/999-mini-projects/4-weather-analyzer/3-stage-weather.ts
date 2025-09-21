// 🧪 Exercise 3: Weather Data Analyzer Stage 3 - Time-Series Data
// This exercise will help you practice adding timestamp functionality and data validation to weather readings.

// -------------------------
// ✅ Exercise: Time-Series Data ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Update the WeatherReading interface to include timestamp:
//    - Add timestamp: Date property

// 2. Update the `createWeatherReading` function to accept an optional timestamp parameter:
//    - Add optional timestamp?: Date parameter
//    - Use current date/time if not provided

// 3. Create a function called `isValidReading` that takes a WeatherReading and returns a boolean:
//    - Return false if temperature is outside reasonable range (-50°C to 60°C)
//    - Return false if humidity is outside range (0-100%)
//    - Return true if all validations pass

// 4. Create a function called `getReadingAge` that takes a WeatherReading and returns the age in hours:
//    - Calculate hours since the reading was taken
//    - Return the age as a number

// 5. Create a function called `formatReadingTime` that takes a WeatherReading and returns a formatted string:
//    - Format as "YYYY-MM-DD HH:MM"

// 6. Test the functions with precise test cases:
//    Test Case 1: Create valid reading (25°C, 60% humidity) with fixed timestamp
//    Expected: Valid reading created: true
//
//    Test Case 2: Create invalid reading (100°C, 60% humidity)
//    Expected: Invalid reading validation: false
//
//    Test Case 3: Check formatted time for valid reading
//    Expected: Reading time: 2025-09-07 14:30 (Age: 0 hours)

// 💭 Questions to think about:
// - Why are timestamps important in weather data collection?
// - How does data validation prevent errors in scientific measurements?
// - What are the challenges of working with temporal data?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Valid reading created: true
// Test Case 2 - Invalid reading validation: false
// Test Case 3 - Reading time: 2025-09-07 14:30 (Age: 0 hours)
// -------------------------

// 👇 Your code here 👇
