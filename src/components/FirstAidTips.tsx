import React from 'react';
import { Heart, Stethoscope, Droplet, Flame, Bone } from 'lucide-react';

const FirstAidTips: React.FC = () => {
  const firstAidTips = [
    {
      title: 'CPR (Cardiopulmonary Resuscitation)',
      icon: <Heart />,
      color: 'bg-red-500',
      steps: [
        'Check the scene for safety',
        'Check for responsiveness',
        'Call for help or ask someone to call 911',
        'Open the airway',
        'Check for breathing',
        'Begin chest compressions',
        'Provide rescue breaths',
        'Continue CPR until help arrives'
      ]
    },
    {
      title: 'Choking',
      icon: <Stethoscope />,
      color: 'bg-yellow-500',
      steps: [
        'Encourage coughing',
        'Perform back blows',
        'Perform abdominal thrusts (Heimlich maneuver)',
        'Alternate between back blows and abdominal thrusts',
        'Perform CPR if the person becomes unconscious'
      ]
    },
    {
      title: 'Severe Bleeding',
      icon: <Droplet />,
      color: 'bg-red-600',
      steps: [
        'Apply direct pressure with a clean cloth',
        'Elevate the injured area above the heart if possible',
        'Apply a tourniquet as a last resort for life-threatening limb bleeding',
        'Seek immediate medical attention'
      ]
    },
    {
      title: 'Burns',
      icon: <Flame />,
      color: 'bg-orange-500',
      steps: [
        'Remove the source of the burn',
        'Cool the burn with cool (not cold) running water for at least 10 minutes',
        'Cover the burn with a sterile, non-stick bandage',
        'Do not apply butter, oil, or ice to the burn',
        'Seek medical attention for severe burns'
      ]
    },
    {
      title: 'Fractures',
      icon: <Bone />,
      color: 'bg-blue-500',
      steps: [
        'Do not move the injured person unless absolutely necessary',
        'Stop any bleeding',
        'Immobilize the injured area',
        'Apply cold packs to reduce swelling',
        'Seek medical attention'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-indigo-700 flex items-center justify-center">
          <Stethoscope className="mr-2" />
          First Aid Tips
        </h2>
        <p className="text-center text-sm sm:text-base mb-8 sm:mb-12 text-gray-700">
          Essential first aid techniques to help you respond effectively in emergency situations. 
          Remember, these tips are not a substitute for professional medical training.
        </p>

        <div className="space-y-4 sm:space-y-6">
          {firstAidTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`${tip.color} text-white p-3 sm:p-4 flex items-center`}>
                {React.cloneElement(tip.icon, { size: 24, className: 'mr-2' })}
                <h3 className="text-lg sm:text-xl font-bold">{tip.title}</h3>
              </div>
              <ul className="p-3 sm:p-4 space-y-2">
                {tip.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start text-sm sm:text-base">
                    <span className={`${tip.color} text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5`}>
                      {stepIndex + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 bg-red-50 border-red-200 border rounded-lg p-4">
          <p className="text-center mb-0 text-sm sm:text-base">
            <strong className="text-red-600">Important:</strong> Always call emergency services (911) for serious medical emergencies. 
            These tips are for informational purposes only and should not replace professional medical advice or training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstAidTips;