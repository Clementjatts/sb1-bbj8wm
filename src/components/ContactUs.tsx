import React from 'react';
import { Mail, User, Phone, MessageSquare, Send } from 'lucide-react';

const ContactUs: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted');
    // Add your form submission logic here
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-400 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Get in Touch</h2>
            <p className="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                  <textarea
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    id="message"
                    rows={4}
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
                type="submit"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 bg-blue-600 text-white p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-4" size={20} />
                <span className="text-sm sm:text-base">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4" size={20} />
                <span className="text-sm sm:text-base">info@citizenshield.com</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="mr-4" size={20} />
                <span className="text-sm sm:text-base">@CitizenShield</span>
              </div>
            </div>
            <div className="mt-8 sm:mt-12">
              <h4 className="text-lg sm:text-xl font-semibold mb-4">Office Hours</h4>
              <p className="text-sm sm:text-base">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-sm sm:text-base">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-sm sm:text-base">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;