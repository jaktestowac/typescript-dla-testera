// 🧪 Exercise 4: Weather Data Analyzer Stage 4 - Statistical Analysis
// This exercise will help you practice adding statistical calculations and data filtering to weather readings.

// -------------------------
// ✅ Exercise: Statistical Analysis ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `calculateAverageTemperature` that takes an array of WeatherReading and returns the average temperature:
//    - Sum all temperatures and divide by count
//    - Return 0 if array is empty

// 2. Create a function called `findExtremeTemperatures` that takes an array of WeatherReading:
//    - Return an object with highest and lowest temperatures
//    - Return { highest: 0, lowest: 0 } if array is empty

// 3. Create a function called `filterReadingsByCondition` that takes an array of readings and a condition:
//    - Return only readings that match the specified condition

// 4. Create a function called `filterReadingsByTimeRange` that takes an array of readings, startDate, and endDate:
//    - Return only readings within the specified date range (inclusive)

// 5. Create a function called `countReadingsByCondition` that takes an array of readings:
//    - Return an object with counts for each weather condition

// 6. Test the functions with precise test cases:
//    Input Data (5 readings):
//    1. Sunny: 28°C, 45% humidity
//    2. Rainy: 15°C, 85% humidity
//    3. Snowy: -5°C, 70% humidity
//    4. Sunny: 25°C, 50% humidity
//    5. Cloudy: 20°C, 60% humidity
//
//    Test Case 1: Calculate average temperature
//    Expected: Average temperature: 16.6°C
//
//    Test Case 2: Find extreme temperatures
//    Expected: Extreme temperatures: { highest: 28, lowest: -5 }
//
//    Test Case 3: Filter by Sunny condition
//    Expected: Sunny readings: [ { temp: 28, condition: 'Sunny' }, { temp: 25, condition: 'Sunny' } ]
//
//    Test Case 4: Count readings by condition
//    Expected: Condition counts: { Sunny: 2, Rainy: 1, Snowy: 1, Cloudy: 1 }

// 💭 Questions to think about:
// - Why are statistical calculations important in weather analysis?
// - How do different filtering functions help with data analysis?
// - What are the benefits of analyzing weather patterns over time?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Average temperature: 16.6°C
// Test Case 2 - Extreme temperatures: { highest: 28, lowest: -5 }
// Test Case 3 - Sunny readings: [ { temp: 28, condition: 'Sunny' }, { temp: 25, condition: 'Sunny' } ]
