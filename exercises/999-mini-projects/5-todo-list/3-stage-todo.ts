// 🧪 Exercise 3: Todo List Stage 3 - Task Priorities
// This exercise will help you practice adding priority levels to your todo list tasks.

// -------------------------
// ✅ Exercise: Task Priorities ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `Priority` with values: LOW, MEDIUM, HIGH
// 2. Extend the `Task` interface to include a `priority` property of type Priority
// 3. Update the `TodoList` class:
//    - Update `addTask` method to accept priority parameter (default to MEDIUM)
//    - Add a method `getTasksByPriority(priority: Priority)` that returns tasks with specific priority
//    - Add a method `getHighPriorityTasks()` that returns only HIGH priority tasks
// 4. Test your class with precise test cases:
//    Test Case 1: Add tasks with different priorities
//    Expected: Tasks with correct priority values
//
//    Test Case 2: Get tasks by MEDIUM priority
//    Expected: Array with only MEDIUM priority tasks
//
//    Test Case 3: Get high priority tasks
//    Expected: Array with only HIGH priority tasks

// 💭 Questions to think about:
// - How do enums help organize categorical data?
// - Why use default parameters in functions?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Task added: Buy groceries (ID: 1, Priority: HIGH)
// Task added: Clean room (ID: 2, Priority: MEDIUM)
// Task added: Read book (ID: 3, Priority: LOW)
// Medium priority tasks: [{"id":2,"title":"Clean room","completed":false,"priority":"MEDIUM"}]
// High priority tasks: [{"id":1,"title":"Buy groceries","completed":false,"priority":"HIGH"}]
// -------------------------

// 👇 Your code here 👇
