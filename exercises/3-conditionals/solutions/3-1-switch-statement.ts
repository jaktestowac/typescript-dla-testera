// 🧪 Exercise 6.1: Switch statement in functions
// This exercise will help you practice using switch statements within functions.

// -------------------------
// ✅ Exercise: Switch statement in functions ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a function called `getDayName` that takes a number parameter (1-7)
// 2. Use a switch statement inside the function to return the day name:
//    - 1: "Monday"
//    - 2: "Tuesday"
//    - 3: "Wednesday"
//    - 4: "Thursday"
//    - 5: "Friday"
//    - 6: "Saturday"
//    - 7: "Sunday"
//    - default: "Invalid day"
// 3. Create a function called `getSeason` that takes a month number (1-12)
// 4. Use a switch statement to return the season:
//    - 12, 1, 2: "Winter"
//    - 3, 4, 5: "Spring"
//    - 6, 7, 8: "Summer"
//    - 9, 10, 11: "Autumn"
//    - default: "Invalid month"
// 5. Test both functions and print the results (e.g. use parameters 3 and 6 for testing)

// 💭 Questions to think about:
// - What happens if you forget the break statement in a switch?
// - How is using return statements different from using break?
// - When would you prefer switch over if-else in functions?
// - How can you group multiple cases together?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Day 3 is Wednesday"
// "Month 6 is Summer"
// -------------------------

// 👇 Your code here 👇 

function getDayName(day: number): string { // Step 1: Create function getDayName
  switch (day) { // Step 2: Use switch statement
    case 1: return "Monday"
    case 2: return "Tuesday"
    case 3: return "Wednesday"
    case 4: return "Thursday"
    case 5: return "Friday"
    case 6: return "Saturday"
    case 7: return "Sunday"
    default: return "Invalid day"
  }
}

function getSeason(month: number): string { // Step 3: Create function getSeason
  switch (month) { // Step 4: Use switch statement for seasons
    case 12:
    case 1:
    case 2:
      return "Winter"
    case 3:
    case 4:
    case 5:
      return "Spring"
    case 6:
    case 7:
    case 8:
      return "Summer"
    case 9:
    case 10:
    case 11:
      return "Autumn"
    default:
      return "Invalid month"
  }
}

console.log(`Day 3 is ${getDayName(3)}`) // Step 5: Test and print
console.log(`Month 6 is ${getSeason(6)}`) 