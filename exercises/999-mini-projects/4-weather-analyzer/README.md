# 🌤️ Weather Data Analyzer Mini-Project

This mini-project teaches you how to build a simple weather monitoring system in TypeScript. You'll learn to store, organize, and analyze weather data using classes and data structures.

> [!TIP]
> Start with Stage 1 and build each stage on top of the previous one. Copy working code from earlier stages to save time!

## What You'll Build

A **WeatherStation** class that can:

- Store weather readings (temperature, humidity, conditions)
- Find and update specific readings
- Calculate basic statistics (averages, extremes)
- Export data as JSON

## Stages

### Stage 1: Basic Weather Reading (`1-stage-weather.ts`)

**Goal**: Learn to create and display weather data

- Create a `WeatherReading` interface with temperature and humidity
- Build a function to create new readings
- Learn about TypeScript interfaces and objects

### Stage 2: Weather Conditions (`2-stage-weather.ts`)

**Goal**: Add weather types using enums

- Create a `WeatherCondition` enum (Sunny, Cloudy, Rainy, etc.)
- Update the interface to include weather conditions
- Learn about enums and categorical data

### Stage 3: Time & Validation (`3-stage-weather.ts`)

**Goal**: Add timestamps and data checking

- Add timestamp to weather readings
- Create validation functions for temperature/humidity ranges
- Learn about Date objects and data validation

### Stage 4: Basic Statistics (`4-stage-weather.ts`)

**Goal**: Calculate weather statistics

- Find average temperature across readings
- Identify highest and lowest temperatures
- Filter readings by weather condition
- Learn about array methods and calculations

### Stage 5: WeatherStation Class (`5-stage-weather.ts`)

**Goal**: Build a complete weather monitoring class

- Create a `WeatherStation` class to manage readings
- Add methods to store, find, and update readings
- Calculate statistics for all stored data
- Export readings as JSON data
- Learn about classes, methods, and data management

## How to Use

1. **Start Small**: Begin with Stage 1 and implement just the basic functions
2. **Test Each Step**: Run your code and check that the output matches the expected results
3. **Build Up**: Copy working code from Stage 1 to Stage 2, then add new features
4. **Compare Solutions**: Check the `solutions/` folder to see how others solved each stage

## Test Case Format

Each stage includes **numbered test cases** with:

- **Clear input data** specification
- **Expected output** for each test case
- **Step-by-step verification** instructions

Example:

```
Test Case 1 - Reading created: { id: 1, temperature: 25, humidity: 60 }
Test Case 2 - Reading created: { id: 2, temperature: 18, humidity: 75 }
Test Case 3 - Temperature updated: { id: 1, temperature: 28, humidity: 60 }
```

## Learning Objectives

- ✅ Create TypeScript interfaces and enums
- ✅ Work with arrays and objects
- ✅ Build classes with methods
- ✅ Calculate basic statistics
- ✅ Validate and process data
- ✅ Export data as JSON

## Expected Output

Each stage includes test cases with specific expected results. Your console output should match these exactly to verify your implementation works correctly.
