export interface Service {
  id: number;
  iconKey: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    iconKey: 'webDevelopment',
    title: 'Web Development',
    description: 'We create responsive, high-performance web applications tailored to your business needs.',
    features: [
      'Custom web application development',
      'Progressive Web Apps (PWA)',
      'E-commerce solutions',
      'CMS development and integration',
      'API development and integration'
    ]
  },
  // {
  //   id: 2,
  //   iconKey: 'mobileDevelopment',
  //   title: 'Mobile App Development',
  //   description: 'Build powerful, intuitive mobile experiences for iOS and Android platforms.',
  //   features: [
  //     'Native iOS and Android development',
  //     'Cross-platform solutions (React Native, Flutter)',
  //     'UI/UX design and prototyping',
  //     'App performance optimization',
  //     'App store deployment and management'
  //   ]
  // },
  {
    id: 3,
    iconKey: 'customSoftware',
    title: 'Custom Software',
    description: 'Tailored software solutions designed to address your unique business challenges.',
    features: [
      'Enterprise software development',
      'Desktop application development',
      'Legacy system modernization',
      'Software integration services',
      'Custom CRM and ERP solutions'
    ]
  },
  {
    id: 4,
    iconKey: 'databaseSolutions',
    title: 'Database Solutions',
    description: 'Design, implementation, and management of efficient database systems for your business.',
    features: [
      'Database design and architecture',
      'SQL & NoSQL database implementation',
      'Data migration and transformation',
      'Performance tuning and optimization',
      'Database administration and monitoring'
    ]
  },
  {
    id: 5,
    iconKey: 'cloudServices',
    title: 'Cloud Services',
    description: 'Leverage the power of cloud computing to scale your business and reduce operational costs.',
    features: [
      'Cloud migration strategy',
      'AWS, Azure, and GCP solutions',
      'Serverless architecture implementation',
      'DevOps and CI/CD pipeline setup',
      'Cloud infrastructure management'
    ]
  },
  // {
  //   id: 6,
  //   iconKey: 'cybersecurity',
  //   title: 'Cybersecurity',
  //   description: 'Protect your business and customer data with comprehensive security solutions.',
  //   features: [
  //     'Security assessments and audits',
  //     'Secure application development',
  //     'Vulnerability management',
  //     'Compliance (GDPR, HIPAA, PCI DSS)',
  //     'Security training and awareness'
  //   ]
  // }
];