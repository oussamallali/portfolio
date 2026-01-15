// Mock data for Frontend Developer Portfolio

export const personalInfo = {
  name: "Oussama Allali",
  title: "Frontend Developer Web & Mobile",
  tagline: "Creating responsive and visually appealing web and mobile interfaces with modern technologies",
  bio: "Experienced front-end developer skilled in creating responsive and visually appealing web and mobile interfaces. Proficient in HTML, CSS, JavaScript, and frameworks like React and React Native. Dedicated to delivering user-friendly experiences and staying updated on industry trends.",
  email: "oussamallali@gmail.com",
  phone: "0792653823",
  location: "Alger, Algeria",
  available: true,
  languages: ["Arabic", "French", "English"]
};

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  portfolio: "https://portfolio.example.com"
};

export const projects = [
  {
    id: 1,
    title: "Mooshir - Immobilier & Services",
    description: "A comprehensive real estate and services mobile application available on iOS, Android, and Huawei AppGallery. Features property listings, map integration, service providers, and advanced search functionality for the Algerian market.",
    image: "https://customer-assets.emergentagent.com/job_378106a0-dff7-49cf-b1f3-77a5b86be6f6/artifacts/an1k6xl4_mockup-hero.e47658e2b305ddd896cb.webp",
    tech: ["React Native", "JavaScript", "Maps API", "Cross-Platform"],
    links: {
      website: "https://www.mooshir.com/",
      googlePlay: "https://play.google.com/store/apps/details?id=com.mooshir&pli=1",
      appStore: "https://apps.apple.com/us/app/mooshir-immobilier-services/id6453938369",
      huawei: "https://appgallery.huawei.com/app/C108820629"
    },
    demo: "https://www.mooshir.com/",
    featured: true
  }
];

export const skills = [
  { name: "React", category: "framework" },
  { name: "React Native", category: "framework" },
  { name: "JavaScript", category: "language" },
  { name: "HTML5", category: "language" },
  { name: "CSS3", category: "styling" },
  { name: "Responsive Design", category: "design" },
  { name: "Git", category: "tools" },
  { name: "Xcode", category: "tools" },
  { name: "Android Studio", category: "tools" },
  { name: "Mobile Development", category: "specialization" },
  { name: "Cross-Platform Apps", category: "specialization" },
  { name: "UI/UX Implementation", category: "design" },
  { name: "API Integration", category: "backend" },
  { name: "Performance Optimization", category: "optimization" },
  { name: "User Experience", category: "design" }
];

export const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Fenovation SPAS",
    period: "October 2021 - Present",
    description: "As a Front-end React Native Developer, responsible for designing and implementing user interfaces for mobile applications. Collaborating with cross-functional teams, translating design wireframes into code, and ensuring optimal performance and responsiveness. Proficiency in React Native and JavaScript."
  },
  {
    id: 2,
    role: "IT Help Desk",
    company: "Actemium SPA",
    period: "January 2019 - October 2021",
    description: "Responded to IT support requests and provided timely resolution. Assisted users with hardware and software-related problems, offering guidance and troubleshooting assistance. Installed, configured, and maintained computer systems and applications. Collaborated with IT team members to implement solutions and updates."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Project Manager",
    role: "Team Lead",
    company: "Fenovation SPAS",
    content: "Oussama is a dedicated developer who consistently delivers high-quality mobile applications. His expertise in React Native and attention to user experience makes him a valuable team member.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Technical Director",
    role: "Head of Engineering",
    company: "Fenovation SPAS",
    content: "Working with Oussama has been excellent. He has a strong understanding of mobile development and always ensures optimal performance and responsiveness in his work.",
    avatar: "https://i.pravatar.cc/150?img=2"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master RO (Mathematics & Computer Science)",
    institution: "USTHB, Babezzour",
    period: "September 2010 - June 2015",
    description: "Completed Master's degree in Mathematics and Computer Science with focus on theoretical and applied computing."
  },
  {
    id: 2,
    degree: "Baccalaureate (Technical Mathematics)",
    institution: "High School Abdelmoumen, Bouzareah",
    period: "September 2007 - June 2010",
    description: "Completed secondary education with specialization in technical mathematics."
  }
];