import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Book, AlertTriangle, Users, MapPin, Stethoscope } from 'lucide-react';

const Home: React.FC = () => {
  const emergencyCards = [
    { title: 'Emergency Contacts', icon: <Phone />, link: '/emergency-contacts', color: 'bg-red-500' },
    { title: 'Emergency Guide', icon: <Book />, link: '/emergency-guide', color: 'bg-blue-500' },
    { title: 'Report Incident', icon: <AlertTriangle />, link: '/report-incident', color: 'bg-yellow-500' },
    { title: 'Community Support', icon: <Users />, link: '/community-support', color: 'bg-green-500' },
    { title: 'Safe Locations', icon: <MapPin />, link: '/safe-locations', color: 'bg-purple-500' },
    { title: 'First Aid Tips', icon: <Stethoscope />, link: '/first-aid-tips', color: 'bg-teal-500' },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-400 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 text-white">Welcome to CitizenShield</h1>
        <p className="text-center text-base sm:text-lg mb-6 sm:mb-12 text-white">
          Your comprehensive emergency preparedness and response platform. 
          Stay informed, connected, and safe with our cutting-edge features.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {emergencyCards.map((card, index) => (
            <Link key={index} to={card.link} className="block">
              <div className={`${card.color} text-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center h-28 sm:h-36 flex flex-col justify-center items-center`}>
                {React.cloneElement(card.icon, { size: 24, className: 'mb-2' })}
                <h2 className="text-xs sm:text-sm font-semibold">{card.title}</h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:mt-12 bg-white bg-opacity-90 border border-blue-200 rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">Emergency Preparedness Tip</h3>
          <p className="text-sm sm:text-base mb-4">
            Always keep an emergency kit ready with essential items such as water, non-perishable food, 
            first-aid supplies, flashlights, and batteries. Regularly check and update your kit to ensure 
            all items are in good condition and not expired.
          </p>
          <Link to="/emergency-guide" className="inline-block bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base">
            Learn More Safety Tips
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;