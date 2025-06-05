import { ClipboardList } from 'lucide-react';
import React from 'react';
import TaskItem from './TaskLIst';

const TaskList = ({ tasks = [], onToggleComplete, onDelete }) => {
    console.log('Rendering TaskList with tasks:', tasks);
    return (
        <div>
            <div className="flex items-center mb-4">
                <ClipboardList className="text-gray-600 mr-2" size={20} />
                <h2 className="text-xl font-semibold text-gray-700">Your Tasks</h2>
            </div>

            {tasks.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500 italic">No tasks yet. Add one above!</p>
                </div>
            ) : (
                <ul className="space-y-3">
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggleComplete={onToggleComplete}
                            onDelete={onDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;