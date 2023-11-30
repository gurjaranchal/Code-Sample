// Task class represents individual tasks
class Task {
    constructor(description, completed = false) {
        this.description = description;
        this.completed = completed;
    }
}

// TaskManager class manages a list of tasks
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Add a new task to the task manager
    addTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask);
    }

    // Mark a task as completed based on its description
    completeTask(description) {
        const task = this.tasks.find(task => task.description === description);

        if (task) {
            task.completed = true;
        }
    }

    // List all tasks in the task manager
    listTasks() {
        console.log('Tasks:');
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - ${task.completed ? 'Completed' : 'Incomplete'}`);
        });
    }
}

// Example usage
const taskManager = new TaskManager();

taskManager.addTask('JavaScript code sample');

taskManager.listTasks();

taskManager.completeTask('Programming language');

console.log('\nAfter marking a task as completed:\n');
taskManager.listTasks();
