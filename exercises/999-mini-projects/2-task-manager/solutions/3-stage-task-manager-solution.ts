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

enum Priority {
    Low,
    Medium,
    High
}

interface Task {
    id: number
    title: string
    completed: boolean
    priority: Priority
    dueDate?: Date
}

let taskIdCounter = 1

function createTask(title: string, priority: Priority = Priority.Medium, dueDate?: Date): Task {
    const task: Task = {
        id: taskIdCounter++,
        title: title,
        completed: false,
        priority: priority,
        dueDate: dueDate
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

// Testing the functions with structured test cases
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)

const task1 = createTask("Submit report", Priority.High, tomorrow)
console.log(
    `Test Case 1 - Task: ${task1.title} - Overdue: ${isOverdue(task1)} - Days until due: ${getDaysUntilDue(task1)}`
)
// Should print "Test Case 1 - Task: Submit report - Overdue: false - Days until due: 1"

const task2 = createTask("Fix bug", Priority.High, yesterday)
console.log(
    `Test Case 2 - Task: ${task2.title} - Overdue: ${isOverdue(task2)} - Days until due: ${getDaysUntilDue(task2)}`
)
// Should print "Test Case 2 - Task: Fix bug - Overdue: true - Days until due: -1"

const task3 = createTask("Learn TypeScript", Priority.Medium)
console.log(
    `Test Case 3 - Task: ${task3.title} - Overdue: ${isOverdue(task3)} - Days until due: ${getDaysUntilDue(task3)}`
)
// Should print "Test Case 3 - Task: Learn TypeScript - Overdue: false - Days until due: null"
