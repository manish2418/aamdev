import React from 'react';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import Button from './common/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-300 to-teal-300" />
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-400 filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-600 filter blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 mb-6 animate-fadeIn">
              <Zap className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Innovative Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Transforming Ideas into <span className="text-blue-800">Powerful</span> Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              AAM Developers crafts custom software solutions that empower businesses to overcome challenges and achieve their full potential.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <Button 
                href="#contact" 
                variant="primary"
                className="flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                href="#services" 
                variant="secondary"
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-lg bg-blue-100 flex items-center justify-center animate-float">
                <Code className="h-8 w-8 text-blue-800" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-teal-100 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Globe className="h-10 w-10 text-teal-600" />
              </div>
              <div className="bg-gradient-to-tr from-blue-800 to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Software Development Team" 
                  className="w-full h-96 object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white text-center">Your Vision, Our Code</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn" style={{ animationDelay: '1s' }}>
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '10+', label: 'Projects Completed' },
            { value: '5+', label: 'Happy Clients' },
            { value: '6', label: 'Expert Developers' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;