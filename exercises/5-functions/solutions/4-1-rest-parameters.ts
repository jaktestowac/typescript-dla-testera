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
    return prices.reduce((total, price) => total + price, 0)
}

const buildSentence = (...words: string[]): string => {
    return words.join(" ") + "."
}

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
function sumAll(...numbers: number[]): number {
    // Step 1-5: Create function with rest parameters
    let total = 0
    for (const n of numbers) {
        total += n
    }
    return total
}
const sum = sumAll(10, 20, 30, 40, 50) // Step 6: Call sumAll
console.log("Sum of all numbers: " + sum) // Step 7: Print result

const totalCost = calculateTotal(15.99, 24.5, 8.75) // Step 8: Call calculateTotal
console.log("Total cost: $" + totalCost.toFixed(2)) // Step 9: Print result

const sentence = buildSentence("TypeScript", "is", "awesome") // Step 10: Call buildSentence
console.log("Sentence: " + sentence) // Step 11: Print result
