import React from 'react';

const SkillCard = ({ skill }) => {
  const { icon: Icon, title, desc, technologies } = skill;

  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl opacity-50 blur group-hover:opacity-75 transition duration-300" />
      <div className="relative bg-gray-900 p-6 rounded-xl border border-gray-800 transform group-hover:-translate-y-2 transition duration-300">
        <div className="flex items-center space-x-3 mb-4">
          <Icon className="w-8 h-8 text-violet-400" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6">{desc}</p>
        
        {/* Barres de progression */}
        <div className="space-y-3">
          {technologies.map((tech, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">{tech.name}</span>
                <span className="text-violet-400 font-medium">{tech.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;