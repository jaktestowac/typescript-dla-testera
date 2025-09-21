// 🧪 Exercise 4: Task Manager Stage 4 - Task Categories and Filtering
// This exercise will help you practice adding categories and filtering functionality to tasks.

// -------------------------
// ✅ Exercise: Task Categories and Filtering ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `Category` with values: Work, Personal, Learning, Health, Other
//    (Use string enums for better readability)

// 2. Update the Task interface to include category:
//    - Add category: Category property with default value

// 3. Update the `createTask` function to accept a category parameter:
//    - Add category parameter with default value of Category.Other

// 4. Create a function called `filterTasksByCategory` that takes an array of tasks and a category:
//    - Return only tasks that match the specified category

// 5. Create a function called `filterTasksByPriority` that takes an array of tasks and a priority:
//    - Return only tasks that match the specified priority

// 6. Create a function called `filterTasksByCompletion` that takes an array of tasks and a boolean:
//    - Return only tasks that match the completion status

// 7. Test your functions with precise test cases:
//    Input Data (5 tasks to create):
//    1. "Fix critical bug" - High priority, Work category
//    2. "Update documentation" - Low priority, Work category
//    3. "Learn TypeScript" - High priority, Learning category
//    4. "Buy groceries" - Medium priority, Personal category
//    5. "Plan vacation" - Medium priority, Personal category
//
//    Test Case 1: Create 5 tasks with different categories and priorities
//    Expected: 5 tasks created with correct properties
//
//    Test Case 2: Filter tasks by Work category
//    Expected: 2 tasks returned (Fix critical bug, Update documentation)
//
//    Test Case 3: Filter tasks by High priority
//    Expected: 2 tasks returned (Fix critical bug, Learn TypeScript)
//
//    Test Case 4: Filter tasks by completion status (incomplete)
//    Expected: 5 tasks returned (all incomplete)
//
//    Test Case 5: Complete first task and filter by completion status (complete)
//    Expected: 1 task returned (Fix critical bug)

// 💭 Questions to think about:
// - Why use string enums for categories?
// - How do array filter methods work?
// - When should you use different filtering functions vs one combined function?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - All tasks: 5 tasks created
// Test Case 2 - Work tasks: 2 tasks
// Test Case 3 - High priority tasks: 2 tasks
// Test Case 4 - Incomplete tasks: 5 tasks
// Test Case 5 - Completed tasks: 1 task
// -------------------------

// 👇 Your code here 👇
