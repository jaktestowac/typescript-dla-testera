// 📘 Lesson: Classes and Inheritance

// -------------------------
// 🧬 Inheritance
// -------------------------
// A class can extend another class to reuse and customize behavior.

console.log("\n-------------------------")
console.log("🧬 Inheritance - simple example")
console.log("-------------------------\n")

class Animal {
    speak() {
        console.log("This animal makes a sound.")
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof! Woof!")
    }
}

const genericAnimal = new Animal()
genericAnimal.speak() // This animal makes a sound.

const dog = new Dog()
dog.speak() // Woof! Woof!

// -------------------------
// 🧠 Summary:
// -------------------------
// - Inheritance allows code reuse and extension
// - Use `extends` to create a subclass
// - Subclasses can override methods from the parent class
// - Use `super` to call parent class methods if needed

// -------------------------
// 📚 Related TypeScript Documentation:
// -------------------------
// • Inheritance: https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses

// -------------------------
// Ignore the following line
// This is just to ensure the file is treated as a module in TypeScript.
// -------------------------
export {}
