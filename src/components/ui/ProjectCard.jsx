import React from 'react';
import { ExternalLink } from 'lucide-react';
import Simulator from '../../assets/images/simulator.PNG'

const ProjectCard = ({ project, onOpenModal }) => {
  const { title, description, tech, color } = project;

  return (
    <div className="group relative">
      <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-300`} />
      <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 h-full transform group-hover:-translate-y-2 transition duration-300">
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <img
            src={Simulator}
            alt={title}
            className="rounded-lg object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
        >
          Voir les détails <ExternalLink className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;