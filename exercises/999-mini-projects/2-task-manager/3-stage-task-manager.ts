// 🧪 Exercise 3: Task Manager Stage 3 - Task Due Dates
// This exercise will help you practice adding due dates and deadline checking to tasks.

// -------------------------
// ✅ Exercise: Task Due Dates ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Update the Task interface to include dueDate:
//    - Add dueDate?: Date property (optional, since not all tasks need due dates)

// 2. Update the `createTask` function to accept an optional dueDate parameter:
//    - Add optional dueDate?: Date parameter

// 3. Create a function called `isOverdue` that takes a Task and returns a boolean:
//    - Return false if task has no dueDate
//    - Return false if task is already completed
//    - Return true if current date is past the dueDate
//    - Return false if dueDate is in the future

// 4. Create a function called `getDaysUntilDue` that takes a Task and returns a number:
//    - Return null if task has no dueDate
//    - Calculate and return days until due date (can be negative for overdue)

// 5. Test your functions with precise test cases:
//    Input Data:
//    - Current date: Assume today is 2025-09-07
//    - Task 1: "Submit report" due tomorrow (2025-09-08)
//    - Task 2: "Fix bug" due yesterday (2025-09-06)
//    - Task 3: "Learn TypeScript" with no due date
//
//    Test Case 1: Create task due tomorrow and check status
//    Expected: Not overdue, 1 day until due
//
//    Test Case 2: Create task due yesterday and check status
//    Expected: Overdue, -1 day until due
//
//    Test Case 3: Create task with no due date and check status
//    Expected: Not overdue, null days until due

// 💭 Questions to think about:
// - Why use optional properties in interfaces?
// - How do Date objects work in JavaScript/TypeScript?
// - What are the challenges of date calculations?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Task: Submit report - Overdue: false - Days until due: 1
// Test Case 2 - Task: Fix bug - Overdue: true - Days until due: -1
// Test Case 3 - Task: Learn TypeScript - Overdue: false - Days until due: null
// -------------------------

// 👇 Your code here 👇
