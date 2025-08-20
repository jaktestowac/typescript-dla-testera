// 📘 Lesson: Classes and Inheritance

// What is inheritance in TypeScript?
// Inheritance is a fundamental concept in object-oriented programming.
// It allows a class to inherit properties and methods from another class.
// This promotes code reuse and establishes a relationship between classes.

// In simple terms, inheritance allows you to create a new class that is based on an existing class.
// The new class, called a subclass or derived class, can add new properties and methods,

// -------------------------
// 🧬 Inheritance
// -------------------------
// A class can extend another class to reuse and customize behavior.

console.log("\n-------------------------")
console.log("🧬 Inheritance - simple example")
console.log("-------------------------\n")

class Animal {
    name: string;

    constructor() {
        console.log("An animal is created!")
    }

    speak() {
        console.log("This animal makes a sound.")
    }
}

class Dog extends Animal {
    // The Dog class inherits from Animal
    // You can override the speak method
    speak() {
        console.log("Woof! Woof!")
    }

    // You can also add new methods
    fetch() {
        console.log("Fetching the ball!")
    } 
}

const genericAnimal = new Animal() // An animal is created!
genericAnimal.speak() // This animal makes a sound.

const dog = new Dog()
dog.speak() // Woof! Woof!
dog.fetch() // Fetching the ball!

console.log("\n-------------------------")
console.log("🧬 Inheritance - using super")
console.log("-------------------------\n")

class Cat extends Animal {
    // The Cat class also inherits from Animal
    constructor() {
        super() // Call the parent class constructor 
        // This ensures the Animal constructor runs first
        // and initializes the properties of the Animal class.
        this.name = "Cat"
        console.log("A new cat is created!")
    }

    speak() {
        // You can call the parent class method using super
        super.speak() // This animal makes a sound.
        console.log("Meow! Meow! And my name is " + this.name)
    }
}

const cat = new Cat()
cat.speak() // This animal makes a sound. Meow! Meow!

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
