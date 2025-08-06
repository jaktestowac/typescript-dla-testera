// 📘 Lesson: JSON
// In this lesson, you'll learn about JSON (JavaScript Object Notation),
// a lightweight data interchange format that's easy to read and write.
// - What is JSON?
// - How to work with JSON in TypeScript
// - Parsing JSON strings
// - Stringifying objects to JSON

// -------------------------
// 👉 What is JSON?
// JSON (JavaScript Object Notation) is a lightweight data format
// - JSON is a universal format for data exchange (it works in many languages).
// - Keys must be in double quotes.
// - Values can be strings, numbers, booleans, null, objects, or arrays.
// - Use JSON.parse and JSON.stringify in JavaScript and TypeScript to work with JSON.

console.log("-------------------------")
console.log("👉 What is JSON?")
console.log("-------------------------")

const jsonString = '{"name": "Alice", "age": 30, "isTester": true}'
console.log("JSON String:", jsonString)

// -------------------------
// 🔍 Parsing JSON Strings
// To parse a JSON string into a JavaScript object, use JSON.parse().
// - It converts a JSON string into an object.
console.log("-------------------------")
console.log("🔍 Parsing JSON Strings")
console.log("-------------------------")

const jsonString2 = '{"title": "TypeScript Guide", "author": "John Doe", "published": 2023}'
const jsonObject2 = JSON.parse(jsonString2)
console.log("Parsed JSON Object:", jsonObject2)

// Now you can access properties like a regular object
console.log("Title:", jsonObject2.title) // "TypeScript Guide"
console.log("Author:", jsonObject2.author) // "John Doe"
console.log("Published:", jsonObject2.published) // 2023

// -------------------------
// 📦 Stringifying Objects to JSON
// To convert a JavaScript object into a JSON string, use JSON.stringify().

console.log("-------------------------")
console.log("📦 Stringifying Objects to JSON")
console.log("-------------------------")

const jsonObject3 = {
    title: "TypeScript Guide",
    author: "John Doe",
    published: 2023
}

const jsonString3 = JSON.stringify(jsonObject3)
console.log("Stringified JSON:", jsonString3)
// This converts the object into a JSON string

console.log("-------------------------")
console.log("👀 Formatting JSON Strings")
console.log("-------------------------")

// You can also format the JSON string for better readability
const prettyJsonString = JSON.stringify(jsonObject3, null, 2)
console.log("Pretty JSON String:\n", prettyJsonString)
// This adds indentation for better readability

// error handling
console.log("-------------------------")
console.log("⚠️ Error Handling in JSON Parsing")
console.log("-------------------------")

// When parsing JSON, it's important to handle errors gracefully.
const invalidJsonString = '{"name": "Alice", "age": 30, "isTester": true' // Missing closing brace

try {
    const jsonObject4 = JSON.parse(invalidJsonString)
    console.log("Parsed JSON Object:", jsonObject4)
} catch (error) {
    console.error("Error parsing JSON:", error)
}
// This will catch any errors that occur during parsing and log them
// Always validate JSON strings before parsing to avoid runtime errors.

// -------------------------
// 🧠 Summary:
// - JSON is a lightweight data format for data exchange.
// - Use JSON.parse() to convert JSON strings into JavaScript objects.
// - Use JSON.stringify() to convert JavaScript objects into JSON strings.
// - JSON keys must be in double quotes.
// - JSON values can be strings, numbers, booleans, null, objects, or arrays.
// - JSON is widely used in APIs and data storage.
// - Always validate JSON strings before parsing to avoid errors.
// - Use try-catch blocks to handle parsing errors gracefully.
// - JSON is language-independent, making it suitable for data interchange between different programming languages.

// -------------------------
// 📚 Related TypeScript Documentation:
// - JSON in TypeScript: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#json
// - JSON.parse() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// - JSON.stringify() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// - JSON format specification: https://www.json.org/json-en.html

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
