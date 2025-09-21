// 🧪 Exercise 2: Task Manager Stage 2 - Task Priority System
// This exercise will help you practice adding priority levels to tasks using enums.

// -------------------------
// ✅ Exercise: Task Priority System ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an enum called `Priority` with values: Low, Medium, High
//    (Use numeric enums for easy comparison)

// 2. Update the Task interface to include priority:
//    - Add priority: Priority property

// 3. Update the `createTask` function to accept a priority parameter:
//    - Add priority parameter with default value of Priority.Medium

// 4. Create a function called `getPriorityLabel` that takes a Priority and returns a string:
//    - Priority.Low -> "Low Priority"
//    - Priority.Medium -> "Medium Priority"
//    - Priority.High -> "High Priority"

// 5. Test your functions with precise test cases:
//    Test Case 1: Create high priority task "Fix critical bug"
//    Expected: Task with priority High, label "High Priority"
//
//    Test Case 2: Create low priority task "Update documentation"
//    Expected: Task with priority Low, label "Low Priority"
//
//    Test Case 3: Create medium priority task "Refactor code" (using default)
//    Expected: Task with priority Medium, label "Medium Priority"

// 💭 Questions to think about:
// - Why use enums instead of strings for priority?
// - How do numeric enums help with comparisons?
// - When should you use default parameter values?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Test Case 1 - Task: Fix critical bug - High Priority
// Test Case 2 - Task: Update documentation - Low Priority
// Test Case 3 - Task: Refactor code - Medium Priority
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
}

let taskIdCounter = 1

function createTask(title: string, priority: Priority = Priority.Medium): Task {
    const task: Task = {
        id: taskIdCounter++,
        title: title,
        completed: false,
        priority: priority
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

// Testing the functions with structured test cases
const task1 = createTask("Fix critical bug", Priority.High)
console.log(`Test Case 1 - Task: ${task1.title} - ${getPriorityLabel(task1.priority)}`)

const task2 = createTask("Update documentation", Priority.Low)
console.log(`Test Case 2 - Task: ${task2.title} - ${getPriorityLabel(task2.priority)}`)

const task3 = createTask("Refactor code") // Uses default Priority.Medium
console.log(`Test Case 3 - Task: ${task3.title} - ${getPriorityLabel(task3.priority)}`)
