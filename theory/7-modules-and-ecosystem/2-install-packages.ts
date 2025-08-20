// 📘 Lesson: Installing Packages in TypeScript
// In this lesson, you'll learn how to:
// - Install a third-party package
// - Import and use it in your code

// -------------------------
// 📦 What are packages?
// -------------------------
// Packages are reusable pieces of code created by other developers.
// You can use them to add extra features without writing everything from scratch.
// Example: generating fake data, handling dates, making HTTP requests, etc.

// TypeScript supports packages from npm (Node Package Manager).

// First try running this script.
// You might see an error like this:
// Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@faker-js/faker' imported from

// This means you need to install the package first!

// -------------------------
// ✅ Step-by-step: Install faker
// -------------------------

// Where to find packages?
// You can find packages on npm (Node Package Manager) at https://www.npmjs.com/

// 💡 TIP: While looking for packages, always check if they have TypeScript support.
// Many popular libraries have TypeScript definitions, which help with type checking and autocompletion.

// 💡 TIP: While looking for packages:
// - check their popularity (stars, downloads)
// - read the documentation
// - see if they are actively maintained

// Search for "faker" to find the package we will use.
// Faker is a library that helps you generate fake data like names, addresses, and more.
// It is very useful for testing and development.

// Run this command in your terminal:
// 👉 npm install @faker-js/faker

// This installs the faker library into your project.
// In Your project, you will have a `node_modules` folder with the package files.
// You can check your `package.json` file to see the installed packages.

// -------------------------
// 🔍 Check your package.json
// -------------------------

// Now you can import it and use it:

import { faker } from "@faker-js/faker"

// -------------------------
// 🎉 Using faker to generate fake data
// -------------------------

const randomName = faker.person.fullName()
const randomEmail = faker.internet.email()
const randomCity = faker.location.city()

console.log("Fake name:", randomName)
console.log("Fake email:", randomEmail)
console.log("Fake city:", randomCity)

// -------------------------
// 📤 Expected Output (example):
// -------------------------
// Fake name: Jane Doe
// Fake email: jane.doe42@gmail.com
// Fake city: San Francisco

// -------------------------
// 🧠 Summary:
// -------------------------
// - Use `npm install` to add external libraries
// - Many libraries work with both JavaScript and TypeScript
// - Use `import` to bring features into your file
// - Faker is great for generating fake test data!

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • npmjs - package registry: https://www.npmjs.com/
// • NPM and TypeScript: https://www.typescriptlang.org/docs/handbook/2/modules.html#working-with-other-javascript-libraries
// • Type Definitions: https://www.typescriptlang.org/docs/handbook/2/type-declarations.html
// • DefinitelyTyped: https://definitelytyped.org/

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
