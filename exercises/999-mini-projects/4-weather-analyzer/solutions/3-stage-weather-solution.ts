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
// Valid reading created: true
// Invalid reading validation: false
// Reading time: 2025-09-07 14:30 (Age: 0 hours)
// -------------------------

// 👇 Your code here 👇

enum WeatherCondition {
    Sunny = "Sunny",
    Cloudy = "Cloudy",
    Rainy = "Rainy",
    Snowy = "Snowy",
    Stormy = "Stormy",
    Foggy = "Foggy"
}

interface WeatherReading {
    id: number
    temperature: number
    humidity: number
    condition: WeatherCondition
    timestamp: Date
}

let readingIdCounter = 1

function createWeatherReading(
    temperature: number,
    humidity: number,
    condition: WeatherCondition = WeatherCondition.Sunny,
    timestamp?: Date
): WeatherReading {
    const reading: WeatherReading = {
        id: readingIdCounter++,
        temperature: temperature,
        humidity: humidity,
        condition: condition,
        timestamp: timestamp || new Date()
    }
    return reading
}

function updateTemperature(reading: WeatherReading, newTemperature: number): void {
    reading.temperature = newTemperature
}

function getConditionDescription(condition: WeatherCondition): string {
    switch (condition) {
        case WeatherCondition.Sunny:
            return "Clear and sunny skies"
        case WeatherCondition.Cloudy:
            return "Partly or fully cloudy"
        case WeatherCondition.Rainy:
            return "Precipitation expected"
        case WeatherCondition.Snowy:
            return "Snowfall conditions"
        case WeatherCondition.Stormy:
            return "Severe weather with storms"
        case WeatherCondition.Foggy:
            return "Reduced visibility due to fog"
        default:
            return "Unknown weather condition"
    }
}

function isValidReading(reading: WeatherReading): boolean {
    // Temperature should be between -50°C and 60°C
    if (reading.temperature < -50 || reading.temperature > 60) {
        return false
    }

    // Humidity should be between 0% and 100%
    if (reading.humidity < 0 || reading.humidity > 100) {
        return false
    }

    return true
}

function getReadingAge(reading: WeatherReading): number {
    const now = new Date()
    const timeDiff = now.getTime() - reading.timestamp.getTime()
    const hoursDiff = timeDiff / (1000 * 60 * 60) // Convert milliseconds to hours
    return Math.floor(hoursDiff)
}

function formatReadingTime(reading: WeatherReading): string {
    const date = reading.timestamp
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")

    return `${year}-${month}-${day} ${hours}:${minutes}`
}

// Testing the functions with precise test cases
// Create a fixed timestamp for consistent testing
const testTimestamp = new Date(2025, 8, 7, 14, 30, 0) // September 7, 2025, 14:30:00

const validReading = createWeatherReading(25, 60, WeatherCondition.Sunny, testTimestamp)
console.log("Test Case 1 - Valid reading created:", isValidReading(validReading))
// Should print "Test Case 1 - Valid reading created: true"

const invalidReading = createWeatherReading(100, 60, WeatherCondition.Sunny) // Invalid temperature
console.log("Test Case 2 - Invalid reading validation:", isValidReading(invalidReading))
// Should print "Test Case 2 - Invalid reading validation: false"

console.log(
    `Test Case 3 - Reading time: ${formatReadingTime(validReading)} (Age: ${getReadingAge(validReading)} hours)`
)
// Should print "Test Case 3 - Reading time: 2025-09-07 14:30 (Age: 0 hours)"
