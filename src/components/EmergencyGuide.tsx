import React from 'react';
import { AlertTriangle, Flame, Zap, CloudRain, Wind, Droplet, ShieldAlert } from 'lucide-react';

const EmergencyGuide: React.FC = () => {
  const emergencyGuides = [
    {
      title: 'Fire',
      icon: <Flame />,
      color: 'bg-red-500',
      content: "In case of fire, immediately evacuate the building. Activate fire alarms and call emergency services. If the fire is small and you're trained, use an extinguisher. Stay low to avoid smoke, and feel doors for heat before opening. Use stairs, not elevators. Once outside, move to a safe distance. If your clothes catch fire, stop, drop, and roll."
    },
    {
      title: 'Earthquake',
      icon: <Zap />,
      color: 'bg-yellow-500',
      content: "During an earthquake, drop to the ground, take cover under sturdy furniture, and hold on until the shaking stops. Stay away from windows and heavy objects. If indoors, stay there; if outdoors, move to an open area. Be prepared for aftershocks. Check for injuries and listen to emergency broadcasts for information."
    },
    {
      title: 'Flood',
      icon: <CloudRain />,
      color: 'bg-blue-500',
      content: "When flood warnings are issued, move to higher ground immediately. Avoid walking or driving through floodwaters. Stay away from power lines and electrical wires. Be prepared to evacuate quickly. Secure your home by moving essential items to upper floors and disconnecting electrical appliances. Follow official instructions and turn off utilities if advised."
    },
    {
      title: 'Tornado',
      icon: <Wind />,
      color: 'bg-purple-500',
      content: "During a tornado, seek shelter in a basement or interior room on the lowest floor. Stay away from windows and exterior walls. If in a mobile home or vehicle, find the nearest sturdy building. Protect your head and body with blankets or coats. After the tornado, be cautious of debris, fallen power lines, and potential gas leaks."
    },
    {
      title: 'Chemical Spill',
      icon: <Droplet />,
      color: 'bg-green-500',
      content: "If a chemical spill occurs, evacuate the area immediately and call emergency services. Don't touch or walk through the spilled substance. If indoors, open windows for ventilation if safe. Follow instructions from authorities. If exposed, remove contaminated clothing and rinse with water for 15 minutes. Seek medical attention if you experience symptoms."
    },
    {
      title: 'Terrorism',
      icon: <ShieldAlert />,
      color: 'bg-gray-700',
      content: "During a terrorist attack, stay informed through official channels. If you see something suspicious, report it. In an attack, quickly assess how to protect yourself. For active shooters, remember: Run, Hide, Fight. Help others if possible, but don't move the wounded. When authorities arrive, follow their instructions. Call emergency services only when safe. Stay vigilant and report suspicious activities."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-red-50 to-yellow-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-red-700 flex items-center justify-center">
          <AlertTriangle className="mr-2" />
          Emergency Guide
        </h2>
        <p className="text-center text-sm sm:text-base mb-8 sm:mb-12 text-gray-700">
          Be prepared for various emergency situations. This guide provides essential information for different types of emergencies.
        </p>

        <div className="space-y-4 sm:space-y-6">
          {emergencyGuides.map((guide, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`${guide.color} text-white p-3 sm:p-4 flex items-center`}>
                {React.cloneElement(guide.icon, { size: 24, className: 'mr-2' })}
                <h3 className="text-lg sm:text-xl font-bold">{guide.title}</h3>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-sm sm:text-base">{guide.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 bg-yellow-50 border-yellow-200 border rounded-lg p-4">
          <p className="text-center mb-0 text-sm sm:text-base">
            <strong className="text-yellow-600">Remember:</strong> Always follow instructions from local authorities and emergency services during actual emergencies.
            Stay prepared by regularly reviewing these guidelines and keeping your emergency kits up to date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyGuide;