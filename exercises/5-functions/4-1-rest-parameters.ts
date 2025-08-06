// 🧪 Exercise 4.1: Rest parameters
// This exercise will help you practice rest parameters.

// -------------------------
// ✅ Exercise: Rest parameters ✅
// -------------------------

export {} // Ignore this line

// 📚 Sample Rest Parameters Implementation (for reference):
// -------------------------
// function multiplyAll(...numbers: number[]): number {
//     return numbers.reduce((product, num) => product * num, 1);
// }
// 
// function formatAddress(...parts: string[]): string {
//     return parts.filter(part => part.trim() !== '').join(', ');
// }
// 
// console.log(multiplyAll(2, 3, 4)); // 24
// console.log(formatAddress("123 Main St", "Apt 4B", "New York", "NY")); // "123 Main St, Apt 4B, New York, NY"
// -------------------------

// 🎯 Your Task: Create and use rest parameter functions
// -------------------------

// We've created some utility functions for you to study
const calculateTotal = (...prices: number[]): number => {
    return prices.reduce((total, price) => total + price, 0);
};

const buildSentence = (...words: string[]): string => {
    return words.join(' ') + '.';
};

// Steps:
// 1. Create a function called `sumAll` using the function keyword
// 2. Use rest parameters: `...numbers` to accept any number of arguments
// 3. Inside the function, use a for loop to iterate through the numbers array
// 4. Add each number to a running total
// 5. Return the final sum
// 6. Call your `sumAll` function with arguments: 10, 20, 30, 40, 50
// 7. Print: "Sum of all numbers: [result]"
// 8. Call the existing `calculateTotal` function with: 15.99, 24.50, 8.75
// 9. Print: "Total cost: $[result]"
// 10. Call the existing `buildSentence` function with: "TypeScript", "is", "awesome"
// 11. Print: "Sentence: [result]"

// 💭 Questions to think about:
// - What happens if you call the function with no arguments?
// - Can you use rest parameters with other parameters?
// - What's the difference between rest parameters and spread operator?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Sum of all numbers: 150"
// "Total cost: $49.24"
// "Sentence: TypeScript is awesome."
// -------------------------

// 👇 Your code here 👇 