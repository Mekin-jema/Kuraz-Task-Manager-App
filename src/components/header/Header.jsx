// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { Home, Info } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <header >

            <div className="container relative mx-auto px-4 py-4 flex justify-between items-center bg-[#86BC47] min-h-[70px]">
                <div className="absolute left-0 top-0 rounded-tr-md bg-white">
                    <img src="logo.png" alt="logo image" />

                </div>
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