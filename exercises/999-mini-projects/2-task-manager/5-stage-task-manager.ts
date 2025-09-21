// 🧪 Exercise 5: Task Manager Stage 5 - TaskManager Class with Advanced Features
// This exercise will help you practice creating a comprehensive task management class with advanced functionality.
// We'll build this step by step to make it easier to understand.

// -------------------------
// ✅ Exercise: TaskManager Class with Advanced Features ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. First, create the TaskManager class with basic task storage:
//    - Create class `TaskManager`
//    - Add private property `tasks: Task[] = []` to store all tasks
//    - Add method `addTask(title: string, priority?: Priority, dueDate?: Date, category?: Category): Task`
//      * Create a new task and add it to the tasks array
//      * Return the created task

// 2. Add task retrieval methods:
//    - Add method `getAllTasks(): Task[]` that returns all tasks
//    - Add method `getTaskById(id: number): Task | undefined` that finds a task by ID
//    - Add method `getTasksCount(): number` that returns total number of tasks

// 3. Add task modification methods:
//    - Add method `completeTask(id: number): boolean` that marks a task as completed
//    - Add method `deleteTask(id: number): boolean` that removes a task by ID
//    - Add method `updateTaskPriority(id: number, priority: Priority): boolean` that updates task priority

// 4. Add advanced filtering methods:
//    - Add method `getTasksByCategory(category: Category): Task[]`
//    - Add method `getTasksByPriority(priority: Priority): Task[]`
//    - Add method `getOverdueTasks(): Task[]` that returns only overdue tasks
//    - Add method `getCompletedTasks(): Task[]` that returns only completed tasks

// 5. Add search and statistics methods:
//    - Add method `searchTasks(query: string): Task[]` that searches tasks by title
//    - Add method `getTaskStatistics(): object` that returns statistics like:
//      * totalTasks: number
//      * completedTasks: number
//      * overdueTasks: number
//      * tasksByPriority: { high: number, medium: number, low: number }
//      * tasksByCategory: { work: number, personal: number, ... }

// 6. Add sorting methods:
//    - Add method `sortTasksByPriority(): Task[]` that returns tasks sorted by priority (High first)
//    - Add method `sortTasksByDueDate(): Task[]` that returns tasks sorted by due date (soonest first)

// 7. Add utility methods:
//    - Add method `clearCompletedTasks(): number` that removes all completed tasks and returns count removed
//    - Add method `exportTasks(): string` that returns a JSON string of all tasks

// 8. Test your TaskManager class with precise test cases:
//    Input Data (5 tasks to add):
//    1. "Fix critical bug" - High priority, due 2025-09-08, Work category
//    2. "Learn TypeScript" - High priority, due 2025-09-10, Learning category
//    3. "Buy groceries" - Medium priority, due 2025-09-07, Personal category
//    4. "Update documentation" - Low priority, due 2025-09-12, Work category
//    5. "Go to gym" - Low priority, due 2025-09-09, Health category
//
//    Test Case 1: Create TaskManager and add 5 tasks
//    Expected: TaskManager created, 5 tasks added
//
//    Test Case 2: Complete first task
//    Expected: Task completed successfully
//
//    Test Case 3: Filter tasks by Work category
//    Expected: 2 tasks returned
//
//    Test Case 4: Filter tasks by High priority
//    Expected: 2 tasks returned
//
//    Test Case 5: Get task statistics
//    Expected: Statistics with totalTasks: 5, completedTasks: 1, etc.
//
//    Test Case 6: Sort tasks by priority
//    Expected: Tasks sorted High -> Medium -> Low
//
//    Test Case 7: Search tasks by title
//    Expected: 1 task returned for 'learn'

// 💭 Questions to think about:
// - How do classes help organize related functionality?
// - What does 'private' mean for class properties?
// - Why is encapsulation important in class design?
// - How do you balance having many methods vs having fewer but more complex methods?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - TaskManager created with 5 tasks
// Test Case 2 - Completed 1 task
// Test Case 3 - Found 2 work tasks
// Test Case 4 - Found 2 high priority tasks
// Test Case 5 - Statistics: totalTasks: 5, completedTasks: 1, overdueTasks: 0
// Test Case 6 - Tasks sorted by priority: Fix critical bug (High), Learn TypeScript (High), Buy groceries (Medium), Update documentation (Low), Go to gym (Low)
// Test Case 7 - Search results for 'learn': 1 task
// -------------------------
