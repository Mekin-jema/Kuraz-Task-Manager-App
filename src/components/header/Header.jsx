import React from 'react';
import { Home, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Task Manager</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="flex items-center hover:underline">
                                <Home className="mr-1" size={20} /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="flex items-center hover:underline">
                                <Info className="mr-1" size={20} /> About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;