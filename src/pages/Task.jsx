import React, { useState } from 'react';


const initialTasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
];

function Task() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([
            ...tasks,
            { id: Date.now(), title: newTask, completed: false },
        ]);
        setNewTask('');
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

            <div className="flex gap-2 mb-4">
                <input
                    className="border p-2 flex-1"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add new task"
                />
                <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2">Add</button>
            </div>

            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="flex justify-between items-center mb-2">
                        <span
                            onClick={() => toggleComplete(task.id)}
                            className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
                        >
                            {task.title}
                        </span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task;
