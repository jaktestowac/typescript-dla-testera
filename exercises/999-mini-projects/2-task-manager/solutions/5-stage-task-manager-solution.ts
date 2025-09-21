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

class TaskManager {
    private tasks: Task[] = []

    // Basic task management
    addTask(
        title: string,
        priority: Priority = Priority.Medium,
        dueDate?: Date,
        category: Category = Category.Other
    ): Task {
        const task = createTask(title, priority, dueDate, category)
        this.tasks.push(task)
        return task
    }

    getAllTasks(): Task[] {
        return [...this.tasks] // Return a copy to prevent external modification
    }

    getTaskById(id: number): Task | undefined {
        return this.tasks.find((task) => task.id === id)
    }

    getTasksCount(): number {
        return this.tasks.length
    }

    // Task modification
    completeTask(id: number): boolean {
        const task = this.getTaskById(id)
        if (task && !task.completed) {
            task.completed = true
            return true
        }
        return false
    }

    deleteTask(id: number): boolean {
        const index = this.tasks.findIndex((task) => task.id === id)
        if (index !== -1) {
            this.tasks.splice(index, 1)
            return true
        }
        return false
    }

    updateTaskPriority(id: number, priority: Priority): boolean {
        const task = this.getTaskById(id)
        if (task) {
            task.priority = priority
            return true
        }
        return false
    }

    // Advanced filtering
    getTasksByCategory(category: Category): Task[] {
        return this.tasks.filter((task) => task.category === category)
    }

    getTasksByPriority(priority: Priority): Task[] {
        return this.tasks.filter((task) => task.priority === priority)
    }

    getOverdueTasks(): Task[] {
        return this.tasks.filter((task) => isOverdue(task))
    }

    getCompletedTasks(): Task[] {
        return this.tasks.filter((task) => task.completed)
    }

    // Search and statistics
    searchTasks(query: string): Task[] {
        const lowerQuery = query.toLowerCase()
        return this.tasks.filter((task) => task.title.toLowerCase().includes(lowerQuery))
    }

    getTaskStatistics() {
        const totalTasks = this.tasks.length
        const completedTasks = this.tasks.filter((task) => task.completed).length
        const overdueTasks = this.getOverdueTasks().length

        const tasksByPriority = {
            high: this.tasks.filter((task) => task.priority === Priority.High).length,
            medium: this.tasks.filter((task) => task.priority === Priority.Medium).length,
            low: this.tasks.filter((task) => task.priority === Priority.Low).length
        }

        const tasksByCategory = {
            work: this.tasks.filter((task) => task.category === Category.Work).length,
            personal: this.tasks.filter((task) => task.category === Category.Personal).length,
            learning: this.tasks.filter((task) => task.category === Category.Learning).length,
            health: this.tasks.filter((task) => task.category === Category.Health).length,
            other: this.tasks.filter((task) => task.category === Category.Other).length
        }

        return {
            totalTasks,
            completedTasks,
            overdueTasks,
            tasksByPriority,
            tasksByCategory
        }
    }

    // Sorting methods
    sortTasksByPriority(): Task[] {
        return [...this.tasks].sort((a, b) => b.priority - a.priority) // High priority first
    }

    sortTasksByDueDate(): Task[] {
        return [...this.tasks]
            .filter((task) => task.dueDate) // Only tasks with due dates
            .sort((a, b) => {
                if (!a.dueDate || !b.dueDate) return 0
                return a.dueDate.getTime() - b.dueDate.getTime() // Soonest first
            })
    }

    // Utility methods
    clearCompletedTasks(): number {
        const initialCount = this.tasks.length
        this.tasks = this.tasks.filter((task) => !task.completed)
        return initialCount - this.tasks.length
    }

    exportTasks(): string {
        return JSON.stringify(this.tasks, null, 2)
    }
}

// Testing the TaskManager with structured test cases
const taskManager = new TaskManager()

// Test Case 1: Create TaskManager and add 5 tasks
taskManager.addTask("Fix critical bug", Priority.High, new Date("2025-09-08"), Category.Work)
taskManager.addTask("Learn TypeScript", Priority.High, new Date("2025-09-10"), Category.Learning)
taskManager.addTask("Buy groceries", Priority.Medium, new Date("2025-09-07"), Category.Personal)
taskManager.addTask("Update documentation", Priority.Low, new Date("2025-09-12"), Category.Work)
taskManager.addTask("Go to gym", Priority.Low, new Date("2025-09-09"), Category.Health)

console.log(`Test Case 1 - TaskManager created with ${taskManager.getTasksCount()} tasks`)

// Test Case 2: Complete first task
taskManager.completeTask(1)
console.log("Test Case 2 - Completed 1 task")

// Test Case 3: Filter tasks by Work category
const workTasks = taskManager.getTasksByCategory(Category.Work)
console.log(`Test Case 3 - Found ${workTasks.length} work tasks`)

// Test Case 4: Filter tasks by High priority
const highPriorityTasks = taskManager.getTasksByPriority(Priority.High)
console.log(`Test Case 4 - Found ${highPriorityTasks.length} high priority tasks`)

// Test Case 5: Get task statistics
const stats = taskManager.getTaskStatistics()
console.log(
    `Test Case 5 - Statistics: totalTasks: ${stats.totalTasks}, completedTasks: ${stats.completedTasks}, overdueTasks: ${stats.overdueTasks}`
)

// Test Case 6: Sort tasks by priority
const sortedByPriority = taskManager.sortTasksByPriority()
const sortedNames = sortedByPriority.map((t) => `${t.title} (${getPriorityLabel(t.priority)})`).join(", ")
console.log(`Test Case 6 - Tasks sorted by priority: ${sortedNames}`)

// Test Case 7: Search tasks by title
const searchResults = taskManager.searchTasks("learn")
console.log(`Test Case 7 - Search results for 'learn': ${searchResults.length} task`)
