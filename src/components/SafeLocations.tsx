import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const SafeLocations: React.FC = () => {
  const safeLocations = [
    {
      name: "City Community Center",
      address: "123 Main St, Cityville",
      phone: "(555) 123-4567",
      hours: "24/7 during emergencies",
      services: ["Shelter", "Food", "Medical"],
    },
    {
      name: "Central High School",
      address: "456 Oak Ave, Cityville",
      phone: "(555) 987-6543",
      hours: "Open during major emergencies",
      services: ["Shelter", "Food"],
    },
    {
      name: "Memorial Hospital",
      address: "789 Elm St, Cityville",
      phone: "(555) 246-8135",
      hours: "24/7",
      services: ["Medical", "Trauma Care"],
    },
    {
      name: "Police Station",
      address: "101 Safety Rd, Cityville",
      phone: "(555) 911-9111",
      hours: "24/7",
      services: ["Security", "Information"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-400 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">Safe Locations</h2>
        <p className="text-center text-sm sm:text-base mb-8 sm:mb-12 text-white">
          Find nearby safe locations for shelter, medical assistance, and information during emergencies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {safeLocations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  <MapPin className="inline-block mr-2" size={16} />
                  {location.address}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  <Phone className="inline-block mr-2" size={16} />
                  {location.phone}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  <span className="font-semibold">Hours:</span> {location.hours}
                </p>
                <div className="mb-4 flex flex-wrap">
                  {location.services.map((service, idx) => (
                    <span key={idx} className="inline-block bg-blue-100 text-blue-800 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold mr-2 mb-2">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm sm:text-base">
                    <MapPin className="inline-block mr-2" size={16} />
                    Directions
                  </button>
                  <a href={`tel:${location.phone}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center text-sm sm:text-base">
                    <Phone className="inline-block mr-2" size={16} />
                    Call
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-white">
          <strong>Note:</strong> Always check the official channels or contact the locations directly for the most up-to-date information during emergencies.
        </p>
      </div>
    </div>
  );
};

export default SafeLocations;