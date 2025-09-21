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

enum Priority {
    Low,
    Medium,
    High
}

enum Category {
    Work = "Work",
    Personal = "Personal",
    Learning = "Learning",
    Health = "Health",
    Other = "Other"
}

interface Task {
    id: number
    title: string
    completed: boolean
    priority: Priority
    dueDate?: Date
    category: Category
}

let taskIdCounter = 1

function createTask(
    title: string,
    priority: Priority = Priority.Medium,
    dueDate?: Date,
    category: Category = Category.Other
): Task {
    const task: Task = {
        id: taskIdCounter++,
        title: title,
        completed: false,
        priority: priority,
        dueDate: dueDate,
        category: category
    }
    return task
}

function completeTask(task: Task): void {
    task.completed = true
}

function getPriorityLabel(priority: Priority): string {
    switch (priority) {
        case Priority.Low:
            return "Low Priority"
        case Priority.Medium:
            return "Medium Priority"
        case Priority.High:
            return "High Priority"
        default:
            return "Unknown Priority"
    }
}

function isOverdue(task: Task): boolean {
    if (!task.dueDate || task.completed) {
        return false
    }

    const now = new Date()
    return now > task.dueDate
}

function getDaysUntilDue(task: Task): number | null {
    if (!task.dueDate) {
        return null
    }

    const now = new Date()
    const timeDiff = task.dueDate.getTime() - now.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

    return daysDiff
}

function filterTasksByCategory(tasks: Task[], category: Category): Task[] {
    return tasks.filter((task) => task.category === category)
}

function filterTasksByPriority(tasks: Task[], priority: Priority): Task[] {
    return tasks.filter((task) => task.priority === priority)
}

function filterTasksByCompletion(tasks: Task[], completed: boolean): Task[] {
    return tasks.filter((task) => task.completed === completed)
}

// Testing the functions with structured test cases
const tasks: Task[] = []

// Test Case 1: Create 5 tasks with different categories and priorities
tasks.push(createTask("Fix critical bug", Priority.High, undefined, Category.Work))
tasks.push(createTask("Update documentation", Priority.Low, undefined, Category.Work))
tasks.push(createTask("Learn TypeScript", Priority.High, undefined, Category.Learning))
tasks.push(createTask("Buy groceries", Priority.Medium, undefined, Category.Personal))
tasks.push(createTask("Plan vacation", Priority.Medium, undefined, Category.Personal))

console.log(`Test Case 1 - All tasks: ${tasks.length} tasks created`)

// Test Case 2: Filter tasks by Work category
const workTasks = filterTasksByCategory(tasks, Category.Work)
console.log(`Test Case 2 - Work tasks: ${workTasks.length} tasks`)

// Test Case 3: Filter tasks by High priority
const highPriorityTasks = filterTasksByPriority(tasks, Priority.High)
console.log(`Test Case 3 - High priority tasks: ${highPriorityTasks.length} tasks`)

// Test Case 4: Filter tasks by completion status (incomplete)
const incompleteTasks = filterTasksByCompletion(tasks, false)
console.log(`Test Case 4 - Incomplete tasks: ${incompleteTasks.length} tasks`)

// Test Case 5: Complete first task and filter by completion status (complete)
completeTask(tasks[0])
const completedTasks = filterTasksByCompletion(tasks, true)
console.log(`Test Case 5 - Completed tasks: ${completedTasks.length} task`)
