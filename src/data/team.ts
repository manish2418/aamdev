export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  photo: string;
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Manish Kumar",
    position: "Founder & CEO",
    bio: "Full-stack developer with 3+ years of experience building enterprise solutions for global clients.",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQE4x8LK43tlxg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1673523035529?e=1750896000&v=beta&t=mJ4-RLl4t1vCO9M8OL2OOmStRwjb1CdCJXI5ERzryaU",
    social: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 2,
    name: "Anand Kumar",
    position: "Founder & CEO",
    bio: "Cloud architecture specialist with expertise in AWS, Azure, and GCP.",
    photo:
      "https://media.licdn.com/dms/image/v2/D5635AQF0Wg89rCYmRw/profile-framedphoto-shrink_200_200/B56ZX3xnsQGcAg-/0/1743618735262?e=1746190800&v=beta&t=z1K6Dqs1h36pBs9Mfsb-2CxHpN2AsnRcohAsErfeTK8",
    social: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 3,
    name: "Anand Tiwari",
    position: "Founder & CEO",
    bio: "Database and API specialist with strong experience in performance optimization and scalable architectures.",
    photo:
      "https://media.licdn.com/dms/image/v2/D5635AQGlF_X40GDq-A/profile-framedphoto-shrink_200_200/B56ZXspxwVGoAY-/0/1743432129906?e=1746190800&v=beta&t=PUME11FbdFObO-M5s6g2ciSiHw87nIie5M8Rb7LJ7NQ",
    social: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
  // {
  //   id: 4,
  //   name: "Rajesh Kumar",
  //   position: "Backend Lead",
  //   bio: "Database and API specialist with strong experience in performance optimization and scalable architectures.",
  //   photo:
  //     "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   social: {
  //     linkedin: "https://linkedin.com/",
  //     github: "https://github.com/",
  //     twitter: "https://twitter.com/",
  //   },
  // },
];
