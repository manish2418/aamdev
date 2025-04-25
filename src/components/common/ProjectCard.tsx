import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  category,
  description,
  technologies,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-0 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href="#" 
            className="inline-flex items-center px-4 py-2 bg-white text-blue-800 rounded-md font-medium transition-colors duration-300 hover:bg-blue-50"
          >
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-800 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;