// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { Home, Info } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Task Manager</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/"
                                className="flex items-center hover:underline transition-all"
                            >
                                <Home className="mr-1" size={20} />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="flex items-center hover:underline transition-all"
                            >
                                <Info className="mr-1" size={20} />
                                <span>About</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;