// src/components/TaskItem.jsx
import { Check, Trash2 } from 'lucide-react';
import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
    return (
        <li className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
                <button
                    onClick={() => onToggleComplete(task.id)}
                    className={`mr-3 p-2 rounded-full ${task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'} hover:bg-opacity-80 transition-colors`}
                    aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                    <Check size={16} />
                </button>
                <span
                    className={`text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}
                >
                    {task.title}
                </span>
            </div>
            <button
                onClick={() => onDelete(task.id)}
                className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Delete task"
            >
                <Trash2 size={16} />
            </button>
        </li>
    );
};

export default TaskItem;