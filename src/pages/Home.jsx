import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <Navbar />
                <h1 className="text-5xl font-bold mt-10">Welcome Home</h1>
                <p className="mt-4">This is the main landing page.</p>
            </div>
        </div>
    );
};

export default Home;
