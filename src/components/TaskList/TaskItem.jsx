import React from 'react';
import { Check, Trash2 } from 'lucide-react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
    return (
        <li className="bg-white rounded-lg shadow p-4 mb-2 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        onClick={() => onToggleComplete(task.id)}
                        className={`mr-3 p-1 rounded-full ${task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
                        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                        <Check size={18} />
                    </button>
                    <span
                        className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                    >
                        {task.title}
                    </span>
                </div>
                <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                    aria-label="Delete task"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;