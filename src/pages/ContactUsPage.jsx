import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; 

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto mt-4">
        
        <Navbar /> 

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Contact us</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam in est pharetra porttitor libero netus nullo tempor cont.
            </p>
            
            <div className="mt-6">
                <p className="font-semibold mb-3">Follow us</p>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                        <FaFacebookF size={24} /> 
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>

          </div>

          <ContactForm /> 
          
        </div>

        <div className="mt-20 text-center">
            <h2 className="text-2xl font-semibold mb-2">Prefer to reach out directly?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui pex ea commodo consequat.
            </p>
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage;
