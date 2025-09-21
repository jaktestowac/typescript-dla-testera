// 🧪 Exercise 4: Todo List Stage 4 - Due Dates
// This exercise will help you practice adding due dates to your todo list tasks.

// -------------------------
// ✅ Exercise: Task Due Dates ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Extend the `Task` interface to include a `dueDate` property of type Date (optional)
// 2. Update the `TodoList` class:
//    - Update `addTask` method to accept optional dueDate parameter
//    - Add a method `getOverdueTasks()` that returns tasks past their due date
//    - Add a method `getTasksDueToday()` that returns tasks due today
//    - Add a method `getTasksDueSoon(days: number)` that returns tasks due within specified days
// 3. Test your class with precise test cases:
//    Test Case 1: Add tasks with different due dates
//    Expected: Tasks with correct due dates
//
//    Test Case 2: Get tasks due today (simulate current date)
//    Expected: Array with tasks due today
//
//    Test Case 3: Get overdue tasks
//    Expected: Array with tasks past due date

// 💭 Questions to think about:
// - How do you work with dates in TypeScript?
// - Why use optional properties in interfaces?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Task added: Buy groceries (ID: 1, Due: 2025-09-08)
// Task added: Clean room (ID: 2, Due: 2025-09-07)
// Task added: Read book (ID: 3, No due date)
// Tasks due today: [{"id":2,"title":"Clean room","completed":false,"priority":"MEDIUM","dueDate":"2025-09-07T00:00:00.000Z"}]
// Overdue tasks: []
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

// Simulate current date as 2025-09-07 for testing
const today = new Date("2025-09-07")
const tomorrow = new Date("2025-09-08")

todoList.addTask("Buy groceries", Priority.HIGH, tomorrow)
todoList.addTask("Clean room", Priority.MEDIUM, today)
todoList.addTask("Read book", Priority.LOW)

console.log("Tasks due today:", JSON.stringify(todoList.getTasksDueToday()))
console.log("Overdue tasks:", JSON.stringify(todoList.getOverdueTasks()))
