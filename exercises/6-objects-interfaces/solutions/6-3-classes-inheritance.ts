// Solution: Exercise 6.3 — Classes and Inheritance
// Description:
// Shows how to create a base class and extend it. Protecting a member allows subclasses
// to access it while keeping it hidden from outside code.

export {}

// Step 1: Create a class `Animal` with a protected property `species` (string) and a constructor to set it.
// Step 2: Add a method `describe()` that returns `This is a <species>`.
// Step 3: Create a subclass `Dog` that extends `Animal` and adds a method `bark()` returning `Woof!`.
// Step 4: Create an instance of `Dog` with species `dog` and print `describe()` and `bark()`.

// 📤 Expected output:
// "This is a dog"
// "Woof!"

// 👇 Your code here 👇

class Animal {
  // Step 1: protected property
  protected species: string

  constructor(species: string) {
    this.species = species
  }

  // Step 2: describe method
  describe(): string {
    return `This is a ${this.species}`
  }
}

// Step 3: subclass Dog
class Dog extends Animal {
  bark(): string {
    return 'Woof!'
  }
}

// Step 4: create instance and print
const d = new Dog('dog')
console.log(d.describe()) // Expected: "This is a dog"
console.log(d.bark()) // Expected: "Woof!"

// Note: `d.species` is protected; accessing it directly here would be a TypeScript error.
