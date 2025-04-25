import React, { useState } from 'react';
import Section from './common/Section';
import ProjectCard from './common/ProjectCard';
import { projects } from '../data/projects';

type Category = 'all' | 'web' | 'mobile' | 'enterprise' | 'ecommerce';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const categories: {id: Category, label: string}[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'ecommerce', label: 'E-Commerce' }
  ];
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);
    
  return (
    <Section
      id="projects"
      title="Our Projects"
      subtitle="Exceptional Software Solutions We've Delivered"
    >
      <div className="flex flex-wrap justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 m-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === category.id
                ? 'bg-blue-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            category={project.category}
            description={project.description}
            technologies={project.technologies}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="inline-flex items-center px-6 py-3 border border-blue-800 text-base font-medium rounded-md text-blue-800 bg-white hover:bg-blue-50 transition duration-300">
          View All Projects
        </button>
      </div>
    </Section>
  );
};

export default Projects;