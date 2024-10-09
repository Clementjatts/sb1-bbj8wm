import React from 'react';
import { AlertTriangle, Send } from 'lucide-react';

const ReportIncident: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Incident reported');
    // Add your form submission logic here
  };

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <AlertTriangle size={40} sm:size={48} className="text-red-500 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">Report an Incident</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Your quick action can make a difference. Report any emergency incidents to help us respond effectively.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700">Incident Type</label>
              <select
                id="incidentType"
                name="incidentType"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-sm sm:text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                required
              >
                <option value="">Select incident type</option>
                <option value="fire">Fire</option>
                <option value="medical">Medical Emergency</option>
                <option value="crime">Crime</option>
                <option value="accident">Accident</option>
                <option value="natural_disaster">Natural Disaster</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                placeholder="Enter the incident location"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                placeholder="Describe the incident in detail"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Your Contact Information (optional)</label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                placeholder="Phone number or email"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <Send className="mr-2" size={18} sm:size={20} />
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportIncident;