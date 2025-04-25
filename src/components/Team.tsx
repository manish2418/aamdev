import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Section from './common/Section';
import { team } from '../data/team';

const Team: React.FC = () => {
  return (
    <Section
      id="team"
      title="Our Team"
      subtitle="Meet the Experts Behind AAM Developer"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {team.map((member, index) => (
          <div 
            key={member.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-end justify-center">
                <div className="p-4 flex space-x-4 mb-4">
                  <a href={member.social.linkedin} className="text-white hover:text-blue-200 transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.github} className="text-white hover:text-blue-200 transition-colors duration-300">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-white hover:text-blue-200 transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-800 text-sm mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals passionate about creating exceptional software solutions. Check out our current openings or send us your resume.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 transition duration-300">
              View Open Positions
            </button>
          </div>
          <div className="md:w-1/3 md:pl-12 flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-blue-100 rounded-full w-48 h-48 blur-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration" 
                className="rounded-xl shadow-lg w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Team;