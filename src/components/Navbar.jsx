import React from 'react';
import { Link } from 'react-router'; 

const Navbar = () => {
    return (
        <header className="flex justify-between items-center mb-12">
            <div className="text-2xl font-bold text-blue-400">DeFi X</div>
            <nav className="flex space-x-6 items-center">
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                <Link to="/contact" className="text-white font-semibold">Contact Us</Link>
                <span className="text-gray-500">Cart(3)</span>
                <Link to="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">Get started</Link>
            </nav>
        </header>
    );
};

export default Navbar;
