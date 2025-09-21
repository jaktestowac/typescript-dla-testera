// 🧪 Exercise 2: Todo List Stage 2 - Task Completion
// This exercise will help you practice marking tasks as completed in your todo list.

// -------------------------
// ✅ Exercise: Task Completion ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Extend the `Task` interface from Stage 1 (or redefine it if needed)
// 2. Extend the `TodoList` class with:
//    - A method `markCompleted(id: number)` that marks a task as completed
//    - A method `getCompletedTasks()` that returns only completed tasks
//    - A method `getPendingTasks()` that returns only pending tasks
// 3. Test your class with precise test cases:
//    Test Case 1: Add two tasks, mark first as completed
//    Expected: First task completed: true, second task completed: false
//
//    Test Case 2: Get completed tasks
//    Expected: Array with only the completed task
//
//    Test Case 3: Get pending tasks
//    Expected: Array with only the pending task

// 💭 Questions to think about:
// - How do you filter arrays in TypeScript?
// - Why separate completed and pending tasks?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Task added: Buy groceries (ID: 1)
// Task added: Clean room (ID: 2)
// Task marked as completed: 1
// Completed tasks: [{"id":1,"title":"Buy groceries","completed":true}]
// Pending tasks: [{"id":2,"title":"Clean room","completed":false}]
// -------------------------

// 👇 Your code here 👇
