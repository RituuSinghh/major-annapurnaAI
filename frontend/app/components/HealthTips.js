'use client';

import { Droplet, Sun, Moon, Wind, Flame, Mountain } from 'lucide-react';

export default function HealthTips() {
  const tips = [
    {
      icon: Sun,
      title: 'Morning Routine',
      description: 'Start your day with warm water and lemon to cleanse your system',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Droplet,
      title: 'Stay Hydrated',
      description: 'Drink warm water throughout the day for better digestion',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Flame,
      title: 'Digestive Fire',
      description: 'Eat your largest meal at midday when digestive fire is strongest',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Wind,
      title: 'Breathwork',
      description: 'Practice pranayama daily to balance your doshas and calm the mind',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Moon,
      title: 'Evening Wind Down',
      description: 'Establish a calming bedtime routine for quality sleep',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Mountain,
      title: 'Mindful Living',
      description: 'Connect with nature and practice gratitude daily',
      color: 'bg-teal-100',
      iconColor: 'text-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ayurveda-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-ayurveda-secondary/20 text-ayurveda-secondary px-4 py-2 rounded-full text-sm font-semibold">
              Daily Wellness
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ayurveda-primary mb-4">
            Ayurvedic Health Tips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple practices to incorporate ancient wisdom into your modern lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-ayurveda-light"
              >
                <div className={`${tip.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${tip.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-ayurveda-primary mb-3 group-hover:text-ayurveda-secondary transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
