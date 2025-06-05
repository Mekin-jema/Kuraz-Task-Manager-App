// src/pages/HomePage.jsx
import React, { useState } from 'react';
import AddTask from '../components/AddTask/AddTask';
import Header from '../components/header/Header';
import TaskList from '../components/TaskList/TaskLIst';


const initialTasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
];

const HomePage = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (title) => {
        setTasks([...tasks, { id: Date.now(), title, completed: false }]);
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
        <>
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-2xl">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Task Manager</h1>
                    <AddTask onAddTask={addTask} />
                    <TaskList
                        tasks={tasks}
                        onToggleComplete={toggleComplete}
                        onDelete={deleteTask}
                    />
                </div>
            </main>
        </>
    );
};

export default HomePage;