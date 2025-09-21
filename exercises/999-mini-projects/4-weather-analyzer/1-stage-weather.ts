// 🧪 Exercise 1: Weather Data Analyzer Stage 1 - Basic Weather Reading
// This exercise will help you practice creating a simple weather data analysis system with basic measurements.
// You'll learn about TypeScript interfaces and functions by building a weather reading system.

// -------------------------
// ✅ Exercise: Basic Weather Reading ✅
// -------------------------

export {} // Ignore this line

// **What you'll learn:**
// - How to create TypeScript interfaces
// - How to create and use functions
// - How to work with objects and properties

// Steps:
// 1. Create a WeatherReading interface with properties:
//    - id: number (unique identifier for each reading)
//    - temperature: number (temperature in Celsius)
//    - humidity: number (humidity as percentage 0-100)

// 2. Create a function called `createWeatherReading` that takes temperature and humidity:
//    - Use a counter variable to generate unique IDs (start from 1)
//    - Create and return a WeatherReading object with the provided values

// 3. Create a function called `updateTemperature` that takes a WeatherReading and a new temperature:
//    - Find the reading object and update its temperature property
//    - This function doesn't return anything (void)

// 4. Test your functions with precise test cases:
//    Test Case 1: Create reading with temperature 25°C and humidity 60%
//    Expected: { id: 1, temperature: 25, humidity: 60 }
//
//    Test Case 2: Create reading with temperature 18°C and humidity 75%
//    Expected: { id: 2, temperature: 18, humidity: 75 }
//
//    Test Case 3: Update first reading temperature to 28°C
//    Expected: { id: 1, temperature: 28, humidity: 60 }

// 💭 Questions to think about:
// - How do interfaces help define the structure of data?
// - Why use functions to create and modify objects?
// - How does a unique ID help track different readings?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Reading created: { id: 1, temperature: 25, humidity: 60 }
// Test Case 2 - Reading created: { id: 2, temperature: 18, humidity: 75 }
// Test Case 3 - Temperature updated: { id: 1, temperature: 28, humidity: 60 }
// -------------------------

// 👇 Your code here 👇
