// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { Home, Info } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <header >

            <div className="container relative mx-auto  py-4 flex justify-between items-center bg-[#86BC47] min-h-[85px]">
                <div className="absolute left-0 top-0 bottom-0 rounded-tr-lg bg-white">
                    <img src="logo.png" alt="logo image" className='w-[233px]' />

                </div>
                <div className="absolute right-0 top-0 bottom-0 rounded-tl-lg bg-white">
                    <img src="logo2.png" alt="logo image" className='w-[233px]' />

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