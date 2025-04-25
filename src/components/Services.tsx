import React from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  TrendingUp, 
  BarChart 
} from 'lucide-react';
import Section from './common/Section';
import ServiceCard from './common/ServiceCard';
import { services } from '../data/services';

const serviceIcons = {
  webDevelopment: <Globe className="h-8 w-8" />,
  mobileDevelopment: <Smartphone className="h-8 w-8" />,
  customSoftware: <Code className="h-8 w-8" />,
  databaseSolutions: <Database className="h-8 w-8" />,
  cloudServices: <Cloud className="h-8 w-8" />,
  cybersecurity: <Shield className="h-8 w-8" />,
  digitalTransformation: <TrendingUp className="h-8 w-8" />,
  businessIntelligence: <BarChart className="h-8 w-8" />
};

const Services: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="Our Services" 
      subtitle="Comprehensive Software Solutions Tailored to Your Needs"
      className="bg-gray-50"
    >
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id}
            icon={serviceIcons[service.iconKey as keyof typeof serviceIcons]}
            title={service.title}
            description={service.description}
            features={service.features}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure what you need?
            </h3>
            <p className="text-blue-100 mb-6">
              Our team of experts will analyze your business requirements and recommend the perfect solution for your unique challenges.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-blue-50 transition duration-300">
              Get Free Consultation
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Code className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;