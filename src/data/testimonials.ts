export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Shubham Kumar",
    position: "Manager",
    company: "DeHaat",
    quote:
      "AAM Developers played a key role in optimizing our dispatch system’s workflow, ensuring seamless operations and real-time tracking. Their contribution significantly improved efficiency..",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  // {
  //   id: 2,
  //   name: "Priya Singh",
  //   position: "CTO",
  //   company: "HealthTech Solutions",
  //   quote:
  //     "Working with AAM Developer was a game-changer for our healthcare platform. They delivered a secure, HIPAA-compliant solution on time and within budget. Their technical expertise is impressive.",
  //   rating: 5,
  //   avatar:
  //     "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  // },
  // {
  //   id: 3,
  //   name: "Vikram Malhotra",
  //   position: "Operations Director",
  //   company: "LogiTrack",
  //   quote:
  //     "The supply chain management system developed by AAM Developer revolutionized our logistics operations. We have reduced operational costs by 30% and improved delivery times significantly.",
  //   rating: 4,
  //   avatar:
  //     "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  // },
  // {
  //   id: 4,
  //   name: "Neha Gupta",
  //   position: "Marketing Head",
  //   company: "RetailPlus",
  //   quote:
  //     "Our e-commerce platform by AAM Developer has been instrumental in our digital growth. The intuitive UI and robust backend have helped us scale our online business by 200% in just one year.",
  //   rating: 5,
  //   avatar:
  //     "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  // },
];
