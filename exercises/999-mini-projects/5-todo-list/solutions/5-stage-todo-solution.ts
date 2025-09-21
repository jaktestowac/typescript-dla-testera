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

enum Priority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}

interface Task {
    id: number
    title: string
    completed: boolean
    priority: Priority
    dueDate?: Date
}

interface TaskSummary {
    total: number
    completed: number
    pending: number
    overdue: number
}

class TodoList {
    private tasks: Task[] = []
    private nextId: number = 1

    addTask(title: string, priority: Priority = Priority.MEDIUM, dueDate?: Date): void {
        const newTask: Task = {
            id: this.nextId++,
            title,
            completed: false,
            priority,
            dueDate
        }
        this.tasks.push(newTask)
        const dueDateStr = dueDate ? dueDate.toISOString().split("T")[0] : "No due date"
        console.log(`Task added: ${title} (ID: ${newTask.id}, Due: ${dueDateStr})`)
    }

    removeTask(id: number): void {
        const index = this.tasks.findIndex((task) => task.id === id)
        if (index !== -1) {
            this.tasks.splice(index, 1)
            console.log(`Task removed: ${id}`)
        } else {
            console.log(`Task with ID ${id} not found`)
        }
    }

    markCompleted(id: number): void {
        const task = this.tasks.find((task) => task.id === id)
        if (task) {
            task.completed = true
            console.log(`Task marked as completed: ${id}`)
        } else {
            console.log(`Task with ID ${id} not found`)
        }
    }

    getTasksSortedByPriority(): Task[] {
        const priorityOrder = { [Priority.HIGH]: 3, [Priority.MEDIUM]: 2, [Priority.LOW]: 1 }
        return [...this.tasks].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
    }

    getTasksSortedByDueDate(): Task[] {
        return [...this.tasks]
            .filter((task) => task.dueDate)
            .sort((a, b) => {
                if (!a.dueDate && !b.dueDate) return 0
                if (!a.dueDate) return 1
                if (!b.dueDate) return -1
                return a.dueDate.getTime() - b.dueDate.getTime()
            })
    }

    searchTasks(query: string): Task[] {
        const lowerQuery = query.toLowerCase()
        return this.tasks.filter((task) => task.title.toLowerCase().includes(lowerQuery))
    }

    getTaskSummary(): TaskSummary {
        const total = this.tasks.length
        const completed = this.tasks.filter((task) => task.completed).length
        const pending = total - completed
        const overdue = this.getOverdueTasks().length

        return { total, completed, pending, overdue }
    }

    getOverdueTasks(): Task[] {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return this.tasks.filter((task) => task.dueDate && task.dueDate < today && !task.completed)
    }

    getTasksDueToday(): Task[] {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        return this.tasks.filter(
            (task) => task.dueDate && task.dueDate >= today && task.dueDate < tomorrow && !task.completed
        )
    }

    getTasksDueSoon(days: number): Task[] {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const futureDate = new Date(today)
        futureDate.setDate(futureDate.getDate() + days)

        return this.tasks.filter(
            (task) => task.dueDate && task.dueDate >= today && task.dueDate <= futureDate && !task.completed
        )
    }

    getTasksByPriority(priority: Priority): Task[] {
        return this.tasks.filter((task) => task.priority === priority)
    }

    getHighPriorityTasks(): Task[] {
        return this.getTasksByPriority(Priority.HIGH)
    }

    getCompletedTasks(): Task[] {
        return this.tasks.filter((task) => task.completed)
    }

    getPendingTasks(): Task[] {
        return this.tasks.filter((task) => !task.completed)
    }

    getTasks(): Task[] {
        return [...this.tasks]
    }
}

// Testing the TodoList class
const todoList = new TodoList()

const today = new Date("2025-09-07")
const tomorrow = new Date("2025-09-08")

todoList.addTask("Buy groceries", Priority.HIGH, tomorrow)
todoList.addTask("Clean room", Priority.MEDIUM, today)
todoList.addTask("Read book", Priority.LOW)

console.log("Tasks sorted by priority:", JSON.stringify(todoList.getTasksSortedByPriority()))
console.log('Search results for "room":', JSON.stringify(todoList.searchTasks("room")))
console.log("Task summary:", JSON.stringify(todoList.getTaskSummary()))
