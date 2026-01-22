import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <Navbar />
                <h1 className="text-5xl font-bold mt-10">About Us</h1>
                <p className="mt-4">Learn more about our company here.</p>
            </div>
        </div>
    );
};

export default About;
