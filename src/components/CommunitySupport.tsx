import React from 'react';
import { Users, MessageSquare, Heart, Phone } from 'lucide-react';

const CommunitySupport: React.FC = () => {
  const supportGroups = [
    {
      name: "Emergency Response Team",
      description: "Volunteer group trained in basic emergency response and first aid.",
      members: 50
    },
    {
      name: "Neighborhood Watch",
      description: "Community-led group focused on local safety and crime prevention.",
      members: 75
    },
    {
      name: "Crisis Support Network",
      description: "Provides emotional support and resources during emergencies.",
      members: 30
    },
    {
      name: "Disaster Relief Volunteers",
      description: "Assists in relief efforts during natural disasters and major emergencies.",
      members: 100
    }
  ];

  const supportResources = [
    {
      title: "Emergency Preparedness Guide",
      description: "Comprehensive guide on preparing for various emergency situations."
    },
    {
      title: "Community Emergency Response Training (CERT)",
      description: "Free training program on basic disaster response skills."
    },
    {
      title: "Mental Health First Aid Course",
      description: "Learn how to identify, understand and respond to signs of mental illnesses."
    },
    {
      title: "Local Emergency Alerts System",
      description: "Sign up for real-time emergency notifications in your area."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-400 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">Community Support</h2>
        <p className="text-center text-sm sm:text-base mb-8 sm:mb-12 text-white">
          Connect with local support groups and access community resources to enhance emergency preparedness and response.
        </p>

        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Local Support Groups</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {supportGroups.map((group, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{group.name}</h4>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{group.description}</p>
              <p className="text-sm sm:text-base text-gray-600">Members: {group.members}</p>
              <div className="mt-4 flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                <button className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm sm:text-base">
                  <Users className="inline-block mr-2" size={16} />
                  Join Group
                </button>
                <button className="bg-gray-200 text-gray-700 px-3 sm:px-4 py-2 rounded hover:bg-gray-300 transition-colors text-sm sm:text-base">
                  <MessageSquare className="inline-block mr-2" size={16} />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Community Resources</h3>
        <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {supportResources.map((resource, index) => (
            <li key={index} className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-2 sm:mb-0">
                <h4 className="text-base sm:text-lg font-semibold">{resource.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{resource.description}</p>
              </div>
              <button className="text-blue-500 hover:text-blue-600 transition-colors text-sm sm:text-base">
                Access Resource
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunitySupport;