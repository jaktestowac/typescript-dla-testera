// Solution: Exercise 6.2 — Classes and Access Modifiers
// Description:
// Demonstrates use of private, readonly and public members in a class. Each exercise
// step is implemented and labeled.

export {}

// Step 1: Create class `Counter` with a private property `count` (number) initialized to 0.
// Step 2: Add a public method `increment()` that increases `count` by 1.
// Step 3: Add a public method `getCount()` that returns the current count.
// Step 4: Add a readonly property `id` set via constructor parameter.
// Step 5: Create an instance and call increment a few times, then print `getCount()` and `id`.

// 📤 Expected output (example):
// 3
// "counter-1"

// 👇 Your code here 👇

class Counter {
  // Step 1: private count
  private count: number = 0

  // Step 4: readonly id
  readonly id: string

  constructor(id: string) {
    this.id = id
  }

  // Step 2: increment method
  increment(): void {
    this.count += 1
  }

  // Step 3: getCount method
  getCount(): number {
    return this.count
  }
}

// Step 5: create instance and validate behavior
const c = new Counter('counter-1')
// increment 3 times
c.increment()
c.increment()
c.increment()

// expected 3
console.log(c.getCount())
// expected 'counter-1'
console.log(c.id)

// Note: `c.count` is private and cannot be accessed here — TypeScript will error if attempted.
