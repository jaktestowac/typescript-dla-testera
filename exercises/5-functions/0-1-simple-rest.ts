// 🧪 Exercise 0.1: Simple Rest Parameters (Beginner Friendly)
// This exercise will help you understand what rest parameters are in simple terms.

// -------------------------
// ✅ Exercise: Simple Rest Parameters ✅
// -------------------------

export {} // Ignore this line

// -------------------------
// 🎯 Your Task: Work with existing rest parameter functions
// -------------------------

// We've created some functions that use rest parameters for you to work with
// Rest parameters syntax: ...parameterName: type[]
// This collects all remaining arguments into an array
const calculateAverage = (...numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
};

const createFullName = (...nameParts: string[]): string => {
    return nameParts.join(' ');
};

const findMax = (...values: number[]): number => {
    return Math.max(...values);
};

// Steps:
// 1. Call `calculateAverage` with numbers: 85, 92, 78, 96
// 2. Print: "Average score: [result]"
// 3. Call `createFullName` with: "Dr.", "John", "Smith", "Jr."
// 4. Print: "Full name: [result]"
// 5. Call `findMax` with numbers: 23, 45, 12, 67, 34
// 6. Print: "Highest number: [result]"

// 💭 Questions to think about:
// - What are rest parameters? (Hint: ...numbers means "collect all remaining arguments into an array")
// - Why use rest parameters instead of arrays? (More flexible - can pass any number of arguments)
// - What happens if you call these functions with no arguments? (numbers.length will be 0)
// - How would you create your own rest parameter function? (function myFunc(...args: type[]) { })

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Average score: 87.75"
// "Full name: Dr. John Smith Jr."
// "Highest number: 67"
// -------------------------

// 👇 Your code here 👇 