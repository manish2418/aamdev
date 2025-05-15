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
      "https://media.licdn.com/dms/image/v2/D5635AQF0Wg89rCYmRw/profile-framedphoto-shrink_400_400/B56ZX3xnsQGcAk-/0/1743618735262?e=1747900800&v=beta&t=zCHoBiw7ee3uaOItcaV5Y0jGf5cNuSvh_RTlmcH9nUA,
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
      "https://media.licdn.com/dms/image/v2/D5635AQGlF_X40GDq-A/profile-framedphoto-shrink_400_400/B56ZXspxwVGoAc-/0/1743432129906?e=1747900800&v=beta&t=KhwWCj6EIDmo6tChq6juDF74czlgW06QejzRguZZmUU,
    social: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
   },
  {
    id: 4,
    name: "Aman Singh",
    position: "Backend Lead",
    bio: "Database and API specialist with strong experience in performance optimization and scalable architectures.",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQHxZZrYqJE84w/profile-displayphoto-shrink_400_400/B56ZVRUkEQGoAg-/0/1740826102355?e=1752710400&v=beta&t=9bVCKsZ9lb5gpwwXenQ2P5Sc5Dld8c-G7mJ442Bxd8A",
    social: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
     },
    },
  {
    id: 5,
    name: "Ritesh Kumar Upadhyay",
    position: "Data Science & ML Expert",
    bio: "Experienced Data Science and Machine Learning expert with a deep understanding of statistical modeling, machine learning algorithms, and data-driven strategy.",
    photo:
      "https://media.licdn.com/dms/image/v2/D4E03AQEg89wbyj3YNA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672306493658?e=1752710400&v=beta&t=keR1dwvrOuZ6Rvpca2a_b-vn42fbG2LZePg8qnvVtwg",
    social: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
   },
  {
    id: 6,
    name: "Utkarsh Maurya",
    position: "Digital Marketing & SEO Expert",
    bio: "Digital Marketing and SEO expert with a strong track record in boosting online visibility, driving targeted traffic, and optimizing conversions through data-driven strategies.",
    photo:
      "https://media.licdn.com/dms/image/v2/D5603AQH57C4dqEreow/profile-displayphoto-shrink_400_400/B56ZVJLCAwHQAg-/0/1740689384478?e=1752710400&v=beta&t=OepcBMZCBf5KJPhmfX-gn2ZqVqM80GZOh-DgDRCrBRw",
    social: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
  
];
