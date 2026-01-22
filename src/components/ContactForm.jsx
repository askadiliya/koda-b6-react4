import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input type="text" id="name" placeholder="John Carter" className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input type="email" id="email" placeholder="example@youremail.com" className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
            <input type="tel" id="phone" placeholder="123-456-7890" className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
            <input type="text" id="subject" placeholder="Ex: Careers" className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
          <textarea id="message" rows="4" placeholder="Type your message here" className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
