// 🧪 Exercise 1.1: Enums
// This exercise will help you practice using enums.

// -------------------------
// ✅ Exercise: Enums ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `Direction` using the enum keyword
// 2. Define four values: North, South, East, West
// 3. Create a variable called `currentDirection` of type Direction
// 4. Assign it the value Direction.North
// 5. Create a function called `getDirection` that takes a Direction parameter
// 6. Return a string with the direction value
// 7. Call the function and print the result

// 💭 Questions to think about:
// - What happens if you try to assign a string to currentDirection?
// - What are the numeric values of the enum members?

// -------------------------
// 📤 Example Output:
// -------------------------
// "You are heading North"
// -------------------------

// 👇 Your code here 👇

enum Direction {
    // Step 1-2: Create enum
    North,
    South,
    East,
    West
}

let currentDirection: Direction = Direction.North // Step 3-4: Create variable and assign value
function getDirection(dir: Direction): string {
    // Step 5: Create function
    return "You are heading " + Direction[dir] // Step 6: Return string
}

console.log(getDirection(currentDirection)) // Step 7: Call and print
