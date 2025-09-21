// 🧪 Exercise 2: Weather Data Analyzer Stage 2 - Weather Conditions System
// This exercise will help you practice adding weather condition classification using enums.

// -------------------------
// ✅ Exercise: Weather Conditions System ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `WeatherCondition` with values: Sunny, Cloudy, Rainy, Snowy, Stormy, Foggy
//    (Use string enums for better readability)

// 2. Update the WeatherReading interface to include condition:
//    - Add condition: WeatherCondition property

// 3. Update the `createWeatherReading` function to accept a condition parameter:
//    - Add condition parameter with default value of WeatherCondition.Sunny

// 4. Create a function called `getConditionDescription` that takes a WeatherCondition and returns a string:
//    - WeatherCondition.Sunny -> "Clear and sunny skies"
//    - WeatherCondition.Cloudy -> "Partly or fully cloudy"
//    - WeatherCondition.Rainy -> "Precipitation expected"
//    - WeatherCondition.Snowy -> "Snowfall conditions"
//    - WeatherCondition.Stormy -> "Severe weather with storms"
//    - WeatherCondition.Foggy -> "Reduced visibility due to fog"

// 5. Test the functions with precise test cases:
//    Test Case 1: Create sunny reading (28°C, 45% humidity, Sunny)
//    Expected: Reading: Sunny - 28°C, 45% humidity - Clear and sunny skies
//
//    Test Case 2: Create rainy reading (15°C, 85% humidity, Rainy)
//    Expected: Reading: Rainy - 15°C, 85% humidity - Precipitation expected
//
//    Test Case 3: Create snowy reading (-5°C, 70% humidity, Snowy) using default
//    Expected: Reading: Snowy - -5°C, 70% humidity - Snowfall conditions

// 💭 Questions to think about:
// - Why use string enums for weather conditions?
// - How do enums help with meteorological data classification?
// - When should you use default parameter values in data collection?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Reading: Sunny - 28°C, 45% humidity - Clear and sunny skies
// Reading: Rainy - 15°C, 85% humidity - Precipitation expected
// Reading: Snowy - -5°C, 70% humidity - Snowfall conditions
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
}

let readingIdCounter = 1

function createWeatherReading(
    temperature: number,
    humidity: number,
    condition: WeatherCondition = WeatherCondition.Sunny
): WeatherReading {
    const reading: WeatherReading = {
        id: readingIdCounter++,
        temperature: temperature,
        humidity: humidity,
        condition: condition
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

// Testing the functions with precise test cases
const reading1 = createWeatherReading(28, 45, WeatherCondition.Sunny)
console.log(
    `Test Case 1 - Reading: ${reading1.condition} - ${reading1.temperature}°C, ${reading1.humidity}% humidity - ${getConditionDescription(reading1.condition)}`
)
// Should print "Test Case 1 - Reading: Sunny - 28°C, 45% humidity - Clear and sunny skies"

const reading2 = createWeatherReading(15, 85, WeatherCondition.Rainy)
console.log(
    `Test Case 2 - Reading: ${reading2.condition} - ${reading2.temperature}°C, ${reading2.humidity}% humidity - ${getConditionDescription(reading2.condition)}`
)
// Should print "Test Case 2 - Reading: Rainy - 15°C, 85% humidity - Precipitation expected"

const reading3 = createWeatherReading(-5, 70, WeatherCondition.Snowy)
console.log(
    `Test Case 3 - Reading: ${reading3.condition} - ${reading3.temperature}°C, ${reading3.humidity}% humidity - ${getConditionDescription(reading3.condition)}`
)
// Should print "Test Case 3 - Reading: Snowy - -5°C, 70% humidity - Snowfall conditions"
