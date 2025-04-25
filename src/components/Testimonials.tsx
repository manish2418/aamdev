import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from './common/Section';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section
      id="testimonials"
      title="Client Testimonials"
      subtitle="What Our Clients Say About Our Work"
    >
      <div className="relative mt-12 max-w-4xl mx-auto px-4">
        <div className="absolute top-0 left-10 -mt-6">
          <Quote className="h-16 w-16 text-blue-100" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
          <div className="flex flex-col items-center">
            <div className="mb-6 w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill={i < testimonials[activeIndex].rating ? 'currentColor' : 'none'} 
                />
              ))}
            </div>
            
            <blockquote className="text-center mb-6">
              <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </p>
            </blockquote>
            
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].name}</div>
              <div className="text-blue-800">{testimonials[activeIndex].company}</div>
              <div className="text-sm text-gray-500 mt-1">{testimonials[activeIndex].position}</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-blue-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Trust', 'Quality', 'Innovation'].map((value, index) => (
          <div 
            key={value} 
            className="bg-white p-8 rounded-xl shadow-md text-center animate-fadeIn"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-800 mb-4">
              {index === 0 && <Shield className="h-8 w-8" />}
              {index === 1 && <Award className="h-8 w-8" />}
              {index === 2 && <Zap className="h-8 w-8" />}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our {value}</h3>
            <p className="text-gray-600">
              {index === 0 && "Building lasting relationships through reliability and transparency."}
              {index === 1 && "Delivering excellence with meticulous attention to detail."}
              {index === 2 && "Pioneering solutions at the forefront of technology."}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Import missing components
function Shield(props: any) {
  return <div {...props} />;
}

function Award(props: any) {
  return <div {...props} />;
}

function Zap(props: any) {
  return <div {...props} />;
}

export default Testimonials;