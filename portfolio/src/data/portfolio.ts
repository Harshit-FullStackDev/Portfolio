import type { Experience, Project, Skill, Education, SocialLink } from '../types';

export const personalInfo = {
  name: "Harshit Soni",
  title: "Java Full Stack Developer",
  subtitle: "Building scalable web applications with cutting-edge technologies",
  bio: "Passionate Java Full Stack Developer with expertise in Spring Boot, React, and cloud technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems. Currently pursuing Master's in Computer Applications with specialization in AI-ML.",
  email: "harshitsonii2001@gmail.com",
  phone: "+91 8302027480",
  location: "Gurgaon, India",
  resumeUrl: "/harshit_updated_r.pdf"
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Orange Mantra",
    position: "Java Developer Intern",
    duration: "July 2025 - Sept 2025",
    location: "Gurgaon, India",
    description: [
      "Developed and maintained scalable Java-based web applications using Spring Boot, Hibernate, JWT, Azure and RESTful APIs",
      "Developed an OTT streaming platform leveraging FFmpeg for video encoding, transcoding, and adaptive streaming across devices, also integrated LLM for AI technology",
      "Designed and maintained RESTful APIs, integrated third-party services, and ensured secure, high-performance systems",
      "Developed carpool applications for corporate using web sockets, Azure, Kafka, Spring Boot",
      "Worked on Client projects such as Hero Motocorp, DTDC maintaining SSO, payment gateway and APIs"
    ],
    technologies: ["Java", "Spring Boot", "Azure", "JWT", "RESTful APIs", "Hibernate", "Kafka", "WebSockets", "FFmpeg"]
  },
  {
    id: "2",
    company: "Lucenta Solutions",
    position: "Python Developer Intern",
    duration: "July 2024 - August 2024",
    location: "Jaipur, Rajasthan",
    description: [
      "Developed dynamic Python scripts using Selenium and Beautiful Soup to scrape data from travel agency, hospitality and consultancy websites",
      "Designed the scripts to be fully automated and adaptable to various site structures and changes",
      "Integrated scraped data with MySQL, enabling structured storage and easy data retrieval for analysis",
      "Built robust data processing pipelines for handling large-scale web scraping operations"
    ],
    technologies: ["Python", "Selenium", "Beautiful Soup", "MySQL", "Data Scraping", "Automation"]
  },
  {
    id: "3",
    company: "DUCAT",
    position: "Full Stack Java Development Course",
    duration: "March 2025 - May 2025",
    location: "Gurgaon, Haryana",
    description: [
      "Completed comprehensive internship and training in full stack Java development",
      "Gained hands-on experience with Java, Spring Boot, REST APIs, frontend technologies, and database integration",
      "Developed skills in building end-to-end web applications following best coding practices and design patterns",
      "Built multiple projects demonstrating proficiency in enterprise-level development"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "Frontend Technologies", "Database Integration"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Cubicle Ride: Smart Employee Carpooling Platform",
    description: "Built and launched a tech-enabled carpooling platform to streamline employee commutes and reduce carbon footprint. Led end-to-end product development, from ideation and MVP to deployment across web and mobile platforms.",
    technologies: ["Spring Boot", "Azure", "ReactJS", "Kafka", "WebSockets", "Microservices"],
    githubUrl: "https://github.com/harshitsoni01/cubicle-ride",
    liveUrl: "https://cubicle-ride-demo.com",
    featured: true
  },
  {
    id: "2",
    title: "Gate Pass Management System",
    description: "Designed and developed a full-stack gate pass system to manage student movement authorization within a college campus. Implemented secure login and role-based access using Spring Security and JWT.",
    technologies: ["Spring Boot", "Spring Security", "JWT", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/harshitsoni01/gate-pass-system",
    liveUrl: "https://gate-pass-demo.com",
    featured: true
  },
  {
    id: "3",
    title: "SCANTIX - Event Booking Website",
    description: "Built a full-stack event booking web app with admin and user roles. Implemented Spring Security with JWT for secure authentication and authorization. Designed responsive frontend using React.",
    technologies: ["Spring Boot", "Spring Security", "JWT", "React", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/harshitsoni01/scantix",
    liveUrl: "https://scantix-demo.com",
    featured: true
  },
  {
    id: "4",
    title: "Employee Management System",
    description: "Engineered a backend system for HR operations including employee onboarding, attendance, payroll, and department management. Developed modular REST APIs for managing employees, roles, leaves, and salary components.",
    technologies: ["Spring Boot", "Spring Security", "JWT", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/harshitsoni01/employee-management",
    featured: false
  },
  {
    id: "5",
    title: "Framework for Retinal Disease Classification",
    description: "Developed an AI-driven framework for automated retinal disease detection using CNNs, RNNs, and Transformer architectures. Processed and analyzed large-scale medical image datasets leveraging Pandas and NumPy.",
    technologies: ["Python", "TensorFlow", "CNN", "RNN", "Transformers", "Pandas", "NumPy"],
    githubUrl: "https://github.com/harshitsoni01/retinal-disease-classification",
    featured: false
  },
  {
    id: "6",
    title: "OTT Streaming Platform",
    description: "Developed an OTT streaming platform leveraging FFmpeg for video encoding, transcoding, and adaptive streaming across devices. Integrated LLM for AI technology to enhance user experience.",
    technologies: ["Spring Boot", "FFmpeg", "Azure", "LLM", "Video Processing", "Adaptive Streaming"],
    githubUrl: "https://github.com/harshitsoni01/ott-platform",
    featured: true
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "HTML5", "CSS3", "SQL"]
  },
  {
    category: "Backend Technologies",
    items: ["Spring Boot", "Spring Security", "Hibernate", "REST APIs", "Microservices", "Kafka", "WebSockets"]
  },
  {
    category: "Frontend Technologies", 
    items: ["ReactJS", "HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "AWS", "JWT Authentication", "CI/CD"]
  },
  {
    category: "AI & Machine Learning",
    items: ["CNN", "RNN", "Transformers", "TensorFlow", "Pandas", "NumPy", "LLM Integration"]
  },
  {
    category: "Tools & Platforms",
    items: ["PowerBI", "Jupyter", "FFmpeg", "Selenium", "Beautiful Soup", "Git", "Maven"]
  },
  {
    category: "Specialized Skills",
    items: ["Video Processing", "Data Scraping", "Payment Gateway Integration", "SSO Implementation", "Medical Image Processing"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Amity University (Online)",
    degree: "Master of Computer Applications",
    field: "Specialization in AI-ML",
    duration: "August 2024 - Current",
    location: "Online",
    gpa: "Ongoing"
  },
  {
    id: "2",
    institution: "Chandigarh University",
    degree: "Bachelor of Computer Applications",
    field: "Computer Applications",
    duration: "July 2021 - July 2024",
    location: "Mohali, Punjab",
    gpa: "7.69 CGPA"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Harshit-FullStackDev",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harshit-sonii/",
    icon: "linkedin"
  }
];