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
// Average temperature: 16.6°C
// Extreme temperatures: { highest: 28, lowest: -5 }
// Sunny readings: [ { temp: 28, condition: 'Sunny' }, { temp: 25, condition: 'Sunny' } ]
// Condition counts: { Sunny: 2, Rainy: 1, Snowy: 1, Cloudy: 1 }
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
    if (reading.temperature < -50 || reading.temperature > 60) {
        return false
    }
    if (reading.humidity < 0 || reading.humidity > 100) {
        return false
    }
    return true
}

function getReadingAge(reading: WeatherReading): number {
    const now = new Date()
    const timeDiff = now.getTime() - reading.timestamp.getTime()
    const hoursDiff = timeDiff / (1000 * 60 * 60)
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

function calculateAverageTemperature(readings: WeatherReading[]): number {
    if (readings.length === 0) return 0

    const sum = readings.reduce((total, reading) => total + reading.temperature, 0)
    return sum / readings.length
}

function findExtremeTemperatures(readings: WeatherReading[]): { highest: number; lowest: number } {
    if (readings.length === 0) return { highest: 0, lowest: 0 }

    let highest = readings[0].temperature
    let lowest = readings[0].temperature

    for (const reading of readings) {
        if (reading.temperature > highest) highest = reading.temperature
        if (reading.temperature < lowest) lowest = reading.temperature
    }

    return { highest, lowest }
}

function filterReadingsByCondition(readings: WeatherReading[], condition: WeatherCondition): WeatherReading[] {
    return readings.filter((reading) => reading.condition === condition)
}

function filterReadingsByTimeRange(readings: WeatherReading[], startDate: Date, endDate: Date): WeatherReading[] {
    return readings.filter((reading) => reading.timestamp >= startDate && reading.timestamp <= endDate)
}

function countReadingsByCondition(readings: WeatherReading[]): Record<string, number> {
    const counts: Record<string, number> = {}

    for (const reading of readings) {
        const condition = reading.condition
        counts[condition] = (counts[condition] || 0) + 1
    }

    return counts
}

// Testing the functions with precise test cases
// Input Data (5 readings):
// 1. Sunny: 28°C, 45% humidity
// 2. Rainy: 15°C, 85% humidity
// 3. Snowy: -5°C, 70% humidity
// 4. Sunny: 25°C, 50% humidity
// 5. Cloudy: 20°C, 60% humidity

const readings: WeatherReading[] = []

// Create readings with fixed timestamps for consistent testing
const today = new Date(2025, 8, 7, 12, 0, 0) // September 7, 2025, 12:00:00
const yesterday = new Date(2025, 8, 6, 12, 0, 0) // September 6, 2025, 12:00:00

readings.push(createWeatherReading(28, 45, WeatherCondition.Sunny, today))
readings.push(createWeatherReading(15, 85, WeatherCondition.Rainy, today))
readings.push(createWeatherReading(-5, 70, WeatherCondition.Snowy, yesterday))
readings.push(createWeatherReading(25, 50, WeatherCondition.Sunny, yesterday))
readings.push(createWeatherReading(20, 60, WeatherCondition.Cloudy, today))

const averageTemp = calculateAverageTemperature(readings)
console.log(`Test Case 1 - Average temperature: ${averageTemp.toFixed(1)}°C`)
// Should print "Test Case 1 - Average temperature: 16.6°C"

const extremes = findExtremeTemperatures(readings)
console.log("Test Case 2 - Extreme temperatures:", extremes)
// Should print "Test Case 2 - Extreme temperatures: { highest: 28, lowest: -5 }"

const sunnyReadings = filterReadingsByCondition(readings, WeatherCondition.Sunny)
console.log(
    "Test Case 3 - Sunny readings:",
    sunnyReadings.map((r) => ({ temp: r.temperature, condition: r.condition }))
)
// Should print "Test Case 3 - Sunny readings: [ { temp: 28, condition: 'Sunny' }, { temp: 25, condition: 'Sunny' } ]"

const conditionCounts = countReadingsByCondition(readings)
console.log("Test Case 4 - Condition counts:", conditionCounts)
// Should print "Test Case 4 - Condition counts: { Sunny: 2, Rainy: 1, Snowy: 1, Cloudy: 1, Stormy: 0, Foggy: 0 }"
