// 🧪 Exercise 3.1: Switch statement using variables
// This exercise will help you practice using switch statements.

// -------------------------
// ✅ Exercise: Switch statement ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create a variable `day` with a number value (1-7).
// 2. Use a `switch` statement on `day` to set a `dayName` string:
//    - 1: "Monday"
//    - 2: "Tuesday"
//    - 3: "Wednesday"
//    - 4: "Thursday"
//    - 5: "Friday"
//    - 6: "Saturday"
//    - 7: "Sunday"
//    - default: "Invalid day"
// 3. Create a variable `month` with a number value (1-12).
// 4. Use a `switch` statement on `month` to set a `season` string:
//    - 12, 1, 2: "Winter"
//    - 3, 4, 5: "Spring"
//    - 6, 7, 8: "Summer"
//    - 9, 10, 11: "Autumn"
// 5. Print both results using `console.log` (example: `day = 3`, `month = 6`).

// 💭 Questions to think about:
// - What happens if you forget the `break` statement in a switch?
// - How can you group multiple cases together?

// -------------------------
// 📤 Expected Output:
// -------------------------
// "Day 3 is Wednesday"
// "Month 6 is Summer"
// -------------------------

// 👇 Your code here 👇

const day: number = 3
let dayName: string

switch (day) {
	case 1:
		dayName = "Monday"
		break
	case 2:
		dayName = "Tuesday"
		break
	case 3:
		dayName = "Wednesday"
		break
	case 4:
		dayName = "Thursday"
		break
	case 5:
		dayName = "Friday"
		break
	case 6:
		dayName = "Saturday"
		break
	case 7:
		dayName = "Sunday"
		break
	default:
		dayName = "Invalid day"
}

const month: number = 6
let season: string

switch (month) {
	case 12:
	case 1:
	case 2:
		season = "Winter"
		break
	case 3:
	case 4:
	case 5:
		season = "Spring"
		break
	case 6:
	case 7:
	case 8:
		season = "Summer"
		break
	case 9:
	case 10:
	case 11:
		season = "Autumn"
		break
	default:
		season = "Invalid month"
}

console.log(`Day ${day} is ${dayName}`)
console.log(`Month ${month} is ${season}`)
