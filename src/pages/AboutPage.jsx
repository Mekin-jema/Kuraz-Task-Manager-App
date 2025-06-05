// src/pages/AboutPage.jsx

import Header from "../components/header/Header";
import React from 'react';

const AboutPage = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-2xl">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About Task Manager</h2>
                    <p className="text-gray-600 mb-4">
                        This is a simple task management application built with React and Tailwind CSS.
                    </p>
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <h3 className="font-semibold text-blue-800 mb-2">Features</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                <li>Add new tasks</li>
                                <li>Mark tasks as completed</li>
                                <li>Delete tasks</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                            <h3 className="font-semibold text-green-800 mb-2">Technologies</h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                <li>React</li>
                                <li>Tailwind CSS</li>
                                <li>React Router</li>
                                <li>Lucide Icons</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutPage;