// Solution: Exercise 6.1 — Simple Classes
// Description:
// This solution demonstrates how to create a class with properties, a constructor
// and an instance method. Each step from the exercise is marked and implemented.

export {}

// Step 1: Create a class called `Person` with two properties: name (string) and age (number).
// Step 2: Add a constructor that accepts name and age and assigns them to the instance.
// Step 3: Add a method `greet()` that returns: `Hello, my name is <name> and I'm <age> years old`.
// Step 4: Create an instance of `Person` and print the result of `greet()`.

// -------------------------
// 📤 Expected Output (example):
// -------------------------
// "Hello, my name is Anna and I'm 30 years old"
// -------------------------

// 👇 Your code here 👇

class Person {
  // properties
  name: string
  age: number

  // Step 2: constructor
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // Step 3: instance method
  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old`
  }
}

// Step 4: create an instance and use the method
const p = new Person('Anna', 30)
console.log(p.greet()) // Expected: "Hello, my name is Anna and I'm 30 years old"
