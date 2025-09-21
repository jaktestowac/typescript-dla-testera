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
}

class TodoList {
    private tasks: Task[] = []
    private nextId: number = 1

    addTask(title: string, priority: Priority = Priority.MEDIUM): void {
        const newTask: Task = {
            id: this.nextId++,
            title,
            completed: false,
            priority
        }
        this.tasks.push(newTask)
        console.log(`Task added: ${title} (ID: ${newTask.id}, Priority: ${priority})`)
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

todoList.addTask("Buy groceries", Priority.HIGH)
todoList.addTask("Clean room", Priority.MEDIUM)
todoList.addTask("Read book", Priority.LOW)

console.log("Medium priority tasks:", JSON.stringify(todoList.getTasksByPriority(Priority.MEDIUM)))
console.log("High priority tasks:", JSON.stringify(todoList.getHighPriorityTasks()))
