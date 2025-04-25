export interface Project {
  id: number;
  title: string;
  category: 'web' | 'mobile' | 'enterprise' | 'ecommerce';
  description: string;
  image: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'ecommerce',
    description: 'A fully responsive e-commerce platform with inventory management, payment integration, and analytics dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS']
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'enterprise',
    description: 'A comprehensive healthcare management system for clinics to manage patients, appointments, and medical records.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure', 'HIPAA Compliant']
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'mobile',
    description: 'A mobile application that helps users track workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Firebase', 'Redux', 'Google Fit API', 'Apple HealthKit']
  },
  {
    id: 4,
    title: 'Real Estate Portal',
    category: 'web',
    description: 'A web platform for real estate listings, property management, and agent-client communication.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'ElasticSearch', 'Google Maps API']
  },
  {
    id: 5,
    title: 'Supply Chain Management',
    category: 'enterprise',
    description: 'An enterprise solution for tracking inventory, managing suppliers, and optimizing logistics operations.',
    image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes']
  },
  {
    id: 6,
    title: 'Food Delivery App',
    category: 'mobile',
    description: 'A food delivery application connecting restaurants with customers, featuring real-time order tracking and payment processing.',
    image: 'https://images.pexels.com/photos/6169036/pexels-photo-6169036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Stripe', 'Google Maps API']
  }
];