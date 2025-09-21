// 🧪 Exercise 5: Weather Data Analyzer Stage 5 - WeatherStation Class
// This exercise will help you practice creating a weather station class to manage weather readings.
// You'll build a simple but complete system for storing and analyzing weather data.

// -------------------------
// ✅ Exercise: WeatherStation Class ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create the WeatherStation class:
//    - Add private property `readings: WeatherReading[] = []` to store readings
//    - Add method `addReading(temperature: number, humidity: number, condition?: WeatherCondition): WeatherReading`
//      * Create a new reading and add it to the array
//      * Return the created reading

// 2. Add methods to find readings:
//    - Add method `getAllReadings(): WeatherReading[]` that returns all readings
//    - Add method `getReadingById(id: number): WeatherReading | undefined` that finds reading by ID
//    - Add method `getReadingsCount(): number` that returns total number of readings

// 3. Add methods to modify readings:
//    - Add method `updateReadingTemperature(id: number, temperature: number): boolean`
//      * Find reading by ID and update its temperature
//      * Return true if found and updated, false if not found
//    - Add method `removeReading(id: number): boolean`
//      * Remove reading by ID from the array
//      * Return true if removed, false if not found

// 4. Add basic analysis methods:
//    - Add method `getAverageTemperature(): number` that calculates average of all readings
//    - Add method `getExtremeTemperatures(): { highest: number, lowest: number }`
//      * Return highest and lowest temperatures from all readings
//    - Add method `getReadingsByCondition(condition: WeatherCondition): WeatherReading[]`
//      * Return only readings that match the specified condition

// 5. Add data export method:
//    - Add method `exportReadings(): string` that returns all readings as JSON string

// 6. Test your WeatherStation class with precise test cases:
//    Input Data (5 readings to add):
//    1. Sunny: 28°C, 45% humidity
//    2. Rainy: 15°C, 85% humidity
//    3. Snowy: -5°C, 70% humidity
//    4. Sunny: 25°C, 50% humidity
//    5. Cloudy: 20°C, 60% humidity
//
//    Test Case 1: Create WeatherStation and add 5 readings
//    Expected: WeatherStation created, Added 5 readings
//
//    Test Case 2: Update temperature of reading ID 1 to 30°C
//    Expected: Updated temperature for reading ID 1
//
//    Test Case 3: Check total readings count
//    Expected: Total readings: 5
//
//    Test Case 4: Calculate average temperature
//    Expected: Average temperature: 16.6°C
//
//    Test Case 5: Find extreme temperatures
//    Expected: Extreme temperatures: { highest: 28, lowest: -5 }
//
//    Test Case 6: Filter readings by Sunny condition
//    Expected: Sunny readings: 2
//
//    Test Case 7: Export readings as JSON
//    Expected: Exported 5 readings as JSON

// 💭 Questions to think about:
// - How does a class help organize related data and functions?
// - Why use private properties in a class?
// - How do you find and update items in an array?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - WeatherStation created
// Test Case 1 - Added 5 readings
// Test Case 2 - Updated temperature for reading ID 1
// Test Case 3 - Total readings: 5
// Test Case 4 - Average temperature: 16.6°C
// Test Case 5 - Extreme temperatures: { highest: 28, lowest: -5 }
// Test Case 6 - Sunny readings: 2
// Test Case 7 - Exported 5 readings as JSON
// -------------------------

// 👇 Your code here 👇
