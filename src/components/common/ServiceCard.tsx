import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6 text-blue-800">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
              </div>
              <span className="ml-3 text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a 
          href="#contact" 
          className="inline-flex items-center text-blue-800 hover:text-blue-700 font-medium transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;