// 🧪 Exercise 4: Todo List Stage 4 - Due Dates
// This exercise will help you practice adding due dates to your todo list tasks.

// -------------------------
// ✅ Exercise: Task Due Dates ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Extend the `Task` interface to include a `dueDate` property of type Date (optional)
// 2. Update the `TodoList` class:
//    - Update `addTask` method to accept optional dueDate parameter
//    - Add a method `getOverdueTasks()` that returns tasks past their due date
//    - Add a method `getTasksDueToday()` that returns tasks due today
//    - Add a method `getTasksDueSoon(days: number)` that returns tasks due within specified days
// 3. Test your class with precise test cases:
//    Test Case 1: Add tasks with different due dates
//    Expected: Tasks with correct due dates
//
//    Test Case 2: Get tasks due today (simulate current date)
//    Expected: Array with tasks due today
//
//    Test Case 3: Get overdue tasks
//    Expected: Array with tasks past due date

// 💭 Questions to think about:
// - How do you work with dates in TypeScript?
// - Why use optional properties in interfaces?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Task added: Buy groceries (ID: 1, Due: 2025-09-08)
// Task added: Clean room (ID: 2, Due: 2025-09-07)
// Task added: Read book (ID: 3, No due date)
// Tasks due today: [{"id":2,"title":"Clean room","completed":false,"priority":"MEDIUM","dueDate":"2025-09-07T00:00:00.000Z"}]
// Overdue tasks: []
// -------------------------

// 👇 Your code here 👇
