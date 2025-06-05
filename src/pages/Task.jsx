import React, { useState } from 'react';
import AddTask from '../components/AddTask/AddTask';
import TaskItem from '../components/TaskList/TaskItem';
import Header from '../components/header/Header';


const initialTasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
];

const HomePage = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (title) => {
        setTasks([
            ...tasks,
            { id: Date.now(), title, completed: false },
        ]);
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
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto p-4 max-w-2xl">
                <AddTask onAddTask={addTask} />
                <TaskItem
                    tasks={tasks}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTask}
                />
            </main>
        </div>
    );
};

export default HomePage;