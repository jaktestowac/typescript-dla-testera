// 🧪 Exercise 5: Todo List Stage 5 - Advanced Features
// This exercise will help you practice advanced filtering and sorting in your todo list.

// -------------------------
// ✅ Exercise: Advanced Todo List Features ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Add advanced methods to the `TodoList` class:
//    - `getTasksSortedByPriority()` - sort tasks by priority (HIGH > MEDIUM > LOW)
//    - `getTasksSortedByDueDate()` - sort tasks by due date (earliest first)
//    - `searchTasks(query: string)` - search tasks by title (case-insensitive)
//    - `getTaskSummary()` - return summary with counts of total, completed, pending, overdue tasks
// 2. Test your class with precise test cases:
//    Test Case 1: Sort tasks by priority
//    Expected: Tasks sorted HIGH, MEDIUM, LOW
//
//    Test Case 2: Search tasks by keyword
//    Expected: Tasks containing the search term
//
//    Test Case 3: Get task summary
//    Expected: Object with task counts

// 💭 Questions to think about:
// - How do you sort arrays in TypeScript?
// - Why use string methods for searching?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Tasks sorted by priority: [{"id":1,"title":"Buy groceries","completed":false,"priority":"HIGH","dueDate":"2025-09-08T00:00:00.000Z"},{"id":2,"title":"Clean room","completed":false,"priority":"MEDIUM","dueDate":"2025-09-07T00:00:00.000Z"},{"id":3,"title":"Read book","completed":false,"priority":"LOW"}]
// Search results for "room": [{"id":2,"title":"Clean room","completed":false,"priority":"MEDIUM","dueDate":"2025-09-07T00:00:00.000Z"}]
// Task summary: {"total":3,"completed":0,"pending":3,"overdue":0}
// -------------------------

// 👇 Your code here 👇
