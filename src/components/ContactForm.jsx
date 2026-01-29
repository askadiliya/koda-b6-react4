import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedData);
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newContacts = [...contacts, formData];
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Carter"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@youremail.com"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="123-456-7890"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Ex: Careers"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm p-3"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Send message
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-4">Data Tersimpan</h2>

        {contacts.length === 0 && (
          <p className="text-gray-400">Belum ada data</p>
        )}

        {contacts.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded mb-3 text-white">
            <p>
              <b>Name:</b> {item.name}
            </p>
            <p>
              <b>Email:</b> {item.email}
            </p>
            <p>
              <b>Phone:</b> {item.phone}
            </p>
            <p>
              <b>Subject:</b> {item.subject}
            </p>
            <p>
              <b>Message:</b> {item.message}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactForm;
