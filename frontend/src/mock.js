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
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management platform with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tech: ["React", "Redux", "Node.js", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather metrics.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    tech: ["React", "API Integration", "CSS Animations"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Modern social networking platform with posts, comments, likes, and real-time messaging functionality.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tech: ["React", "Firebase", "Material-UI", "PWA"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    id: 5,
    title: "Portfolio Builder",
    description: "Interactive portfolio builder tool allowing users to create and customize their professional portfolios with drag-and-drop interface.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: false
  }
];

export const skills = [
  { name: "React", category: "framework" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Next.js", category: "framework" },
  { name: "Vue.js", category: "framework" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "CSS/SASS", category: "styling" },
  { name: "Redux", category: "state" },
  { name: "Git", category: "tools" },
  { name: "Webpack", category: "tools" },
  { name: "REST APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Responsive Design", category: "design" },
  { name: "Performance Optimization", category: "optimization" },
  { name: "Testing (Jest, RTL)", category: "testing" },
  { name: "Accessibility (A11y)", category: "design" }
];

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern UI/UX patterns."
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed responsive web applications using React and TypeScript, collaborated with design teams to implement pixel-perfect interfaces."
  },
  {
    id: 3,
    role: "Junior Frontend Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description: "Built reusable components, fixed bugs, and contributed to the development of the company's main product."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Innovations Inc.",
    content: "John is an exceptional frontend developer. His attention to detail and ability to translate designs into pixel-perfect implementations is outstanding.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Designer",
    company: "Digital Solutions Ltd.",
    content: "Working with John was a pleasure. He understands design principles and always delivers clean, maintainable code.",
    avatar: "https://i.pravatar.cc/150?img=2"
  }
];