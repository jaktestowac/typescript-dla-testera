// 🧪 Exercise 1: Todo List Stage 1 - Basic Task Management
// This exercise will help you practice creating a simple todo list with basic task management functionality.

// -------------------------
// ✅ Exercise: Basic Todo List ✅
// -------------------------

export {} // Ignore this line

// Steps:
// 1. Create an interface called `Task` with properties: id (number), title (string), completed (boolean)
// 2. Create a class called `TodoList` with:
//    - A private property `tasks` as an array of Task
//    - A method `addTask(title: string)` that adds a new task with auto-incrementing id and completed = false
//    - A method `removeTask(id: number)` that removes a task by id
//    - A method `getTasks()` that returns all tasks
// 3. Test your class with precise test cases:
//    Test Case 1: Add task "Buy groceries" and check if it exists
//    Expected: Task with id 1, title "Buy groceries", completed false
//
//    Test Case 2: Add another task "Clean room" and check both tasks
//    Expected: Two tasks with correct ids and titles
//
//    Test Case 3: Remove task with id 1 and check remaining tasks
//    Expected: Only task with id 2 should remain

// 💭 Questions to think about:
// - How do interfaces help define data structures?
// - Why use classes for managing collections of data?

// -------------------------
// 📤 Expected Output:
// -------------------------
// Task added: Buy groceries (ID: 1)
// Task added: Clean room (ID: 2)
// All tasks: [{"id":1,"title":"Buy groceries","completed":false},{"id":2,"title":"Clean room","completed":false}]
// Task removed: 1
// Remaining tasks: [{"id":2,"title":"Clean room","completed":false}]
// -------------------------

// 👇 Your code here 👇

interface Task {
    id: number
    title: string
    completed: boolean
}

class TodoList {
    private tasks: Task[] = []
    private nextId: number = 1

    addTask(title: string): void {
        const newTask: Task = {
            id: this.nextId++,
            title,
            completed: false
        }
        this.tasks.push(newTask)
        console.log(`Task added: ${title} (ID: ${newTask.id})`)
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

    getTasks(): Task[] {
        return [...this.tasks]
    }
}

// Testing the TodoList class
const todoList = new TodoList()

todoList.addTask("Buy groceries")
todoList.addTask("Clean room")

console.log("All tasks:", JSON.stringify(todoList.getTasks()))

todoList.removeTask(1)

console.log("Remaining tasks:", JSON.stringify(todoList.getTasks()))
