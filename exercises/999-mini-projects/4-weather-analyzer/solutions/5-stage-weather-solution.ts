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
// WeatherStation created
// Added 5 readings
// Updated temperature for reading ID 1
// Total readings: 5
// Average temperature: 16.6°C
// Extreme temperatures: { highest: 28, lowest: -5 }
// Sunny readings: 2
// Exported 5 readings as JSON
// -------------------------

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

function calculateAverageTemperature(readings: WeatherReading[]): number {
    if (readings.length === 0) return 0
    const sum = readings.reduce((total, reading) => total + reading.temperature, 0)
    return sum / readings.length
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

class WeatherStation {
    private readings: WeatherReading[] = []

    // Basic data management
    addReading(
        temperature: number,
        humidity: number,
        condition: WeatherCondition = WeatherCondition.Sunny
    ): WeatherReading {
        const reading = createWeatherReading(temperature, humidity, condition)
        this.readings.push(reading)
        return reading
    }

    getAllReadings(): WeatherReading[] {
        return [...this.readings] // Return a copy to prevent external modification
    }

    getReadingById(id: number): WeatherReading | undefined {
        return this.readings.find((reading) => reading.id === id)
    }

    getReadingsCount(): number {
        return this.readings.length
    }

    // Data modification
    updateReadingTemperature(id: number, temperature: number): boolean {
        const reading = this.getReadingById(id)
        if (reading) {
            reading.temperature = temperature
            return true
        }
        return false
    }

    removeReading(id: number): boolean {
        const index = this.readings.findIndex((reading) => reading.id === id)
        if (index !== -1) {
            this.readings.splice(index, 1)
            return true
        }
        return false
    }

    // Basic analysis methods
    getAverageTemperature(): number {
        if (this.readings.length === 0) return 0
        const sum = this.readings.reduce((total, reading) => total + reading.temperature, 0)
        return Math.round((sum / this.readings.length) * 10) / 10
    }

    getExtremeTemperatures(): { highest: number; lowest: number } {
        if (this.readings.length === 0) {
            return { highest: 0, lowest: 0 }
        }

        let highest = this.readings[0].temperature
        let lowest = this.readings[0].temperature

        for (const reading of this.readings) {
            if (reading.temperature > highest) highest = reading.temperature
            if (reading.temperature < lowest) lowest = reading.temperature
        }

        return { highest, lowest }
    }

    getReadingsByCondition(condition: WeatherCondition): WeatherReading[] {
        return this.readings.filter((reading) => reading.condition === condition)
    }

    // Data export
    exportReadings(): string {
        return JSON.stringify(this.readings, null, 2)
    }
}

// Testing the WeatherStation class with precise test cases
// Input Data (5 readings to add):
// 1. Sunny: 28°C, 45% humidity
// 2. Rainy: 15°C, 85% humidity
// 3. Snowy: -5°C, 70% humidity
// 4. Sunny: 25°C, 50% humidity
// 5. Cloudy: 20°C, 60% humidity

const weatherStation = new WeatherStation()

// Test Case 1: Create WeatherStation and add 5 readings
weatherStation.addReading(28, 45, WeatherCondition.Sunny)
weatherStation.addReading(15, 85, WeatherCondition.Rainy)
weatherStation.addReading(-5, 70, WeatherCondition.Snowy)
weatherStation.addReading(25, 50, WeatherCondition.Sunny)
weatherStation.addReading(20, 60, WeatherCondition.Cloudy)

console.log("Test Case 1 - WeatherStation created")
console.log(`Test Case 1 - Added ${weatherStation.getReadingsCount()} readings`)

// Test Case 2: Update temperature of reading ID 1 to 30°C
const firstReading = weatherStation.getAllReadings()[0]
weatherStation.updateReadingTemperature(firstReading.id, 30)
console.log("Test Case 2 - Updated temperature for reading ID 1")

// Test Case 3: Check total readings count
console.log(`Test Case 3 - Total readings: ${weatherStation.getReadingsCount()}`)

// Test Case 4: Calculate average temperature
console.log(`Test Case 4 - Average temperature: ${weatherStation.getAverageTemperature()}°C`)

// Test Case 5: Find extreme temperatures
const extremes = weatherStation.getExtremeTemperatures()
console.log("Test Case 5 - Extreme temperatures:", extremes)

// Test Case 6: Filter readings by Sunny condition
const sunnyReadings = weatherStation.getReadingsByCondition(WeatherCondition.Sunny)
console.log(`Test Case 6 - Sunny readings: ${sunnyReadings.length}`)

// Test Case 7: Export readings as JSON
const exportedData = weatherStation.exportReadings()
console.log(`Test Case 7 - Exported ${weatherStation.getReadingsCount()} readings as JSON`)
