import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github as GitHub, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-blue-300" />
              <span className="ml-2 text-xl font-bold">AAM DEVELOPER</span>
            </div>
            <p className="text-blue-200 mb-6">
              Transforming ideas into powerful software solutions. We help businesses leverage technology to achieve their goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <GitHub className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Projects', 'Team', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development', 
                'Mobile App Development', 
                'Custom Software', 
                'Database Solutions', 
                'Cloud Services', 
                'Cybersecurity'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-blue-200 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter to receive updates on our latest projects and tech insights.
            </p>
            <form>
              <div className="flex mb-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-blue-300">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AAM Developer. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;