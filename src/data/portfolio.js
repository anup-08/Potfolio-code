// ============================================
// PORTFOLIO DATA - EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================

export const personalInfo = {
  name: "Anup kumar",
  title: "Java Full Stack Developer",
  tagline: "Building scalable applications with modern technologies",
  // 📸 TO CHANGE YOUR PHOTO: Replace this URL with your own image URL
  // Recommended size: 400x400px (square), formats: .jpg, .png, .webp
  // photo: "/photo.jpg",
  // alias for components expecting `personalInfo.image`
  image: "/photo.jpg",
  email: "kumaranup31082004@gmail.com",
  phone: "+91 8252058094",
  location: "Ramgarh , Jharkhand India",
  linkedin: "https://www.linkedin.com/in/anup-kumar2004/",
  github: "https://github.com/anup-08",
  leetcode: "https://leetcode.com/u/anup_31/",
  // 📄 TO ADD YOUR RESUME: Upload your resume and paste the URL here
  // Or use Google Drive/Dropbox direct download link
  resume: "https://drive.google.com/drive/folders/1a1N6j54kpp62r1SUsfTk7F6mSyymdDCL?usp=sharing",
  openToWork: true
};

export const aboutMe = {
  description: "I’m a backend-focused Computer Science undergraduate with strong hands-on experience in building scalable and secure applications using Spring Boot and microservices. I enjoy designing clean RESTful APIs, implementing authentication systems, and continuously improving my problem-solving skills through real-world projects and DSA practice.",
  highlights: [
    "Strong foundation in Java, Spring Boot, and REST API development",
    "Hands-on experience with microservices, Kafka, and Keycloak security",
    "Solved 350+ DSA problems using Java with consistent practice",
    "Experience working with MySQL, MongoDB, and backend system design",
    "Self-driven learner with real project-based development experience"
  ]
};


export const skills = {
  backend: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Security",
    "Hibernate",
    "JPA",
    "REST APIs",
    "Microservices",
    "Spring Cloud",
    "Spring AI",
    "JWT",
    "Maven",
    
  ],
  frontend: [
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS"
  ],
  database: [
    "MySQL",
    "MongoDB"
  ],
  tools: [
    "Git",
    "Docker",
    "Apache Kafka",
    "Kubernetes",
    "IntelliJ IDEA",
    "Postman",
    "Redis"
  ]
};


export const projects = [
  {
    id: 1,
    title: "AI-Fitness Platform",
    description: "AI-powered fitness platform built using a microservices architecture. Designed secure REST APIs for user management and workout tracking, implemented role-based authentication with Keycloak, and enabled asynchronous communication using Apache Kafka for activity updates.",
    image: "/aifitness.jpg",
    technologies: ["Java","Spring Boot","Microservices","Keycloak","Spring Security","Apache Kafka","REST APIs","MySQL",
    "MongoDB"],
    github: "https://github.com/anup-08/AI-Fitness-Using-MicroServices",
    
  },
  {
    id: 2,
    title: "Smart Job Referral",
    description: "Role-based job referral platform supporting Admin, Employee, and Job Seeker roles. Enables job posting, candidate referrals, and application management through secure REST APIs built with Spring Boot and Spring Security. Features a responsive React-based interface for smooth user interaction and efficient job tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    technologies: ["Java","Spring Boot","Spring Security","REST APIs","React","Tailwind CSS","MySQL"],
    github: "https://github.com/anup-08/Smart-Job-Referral",
    
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "Web-based e-learning platform designed to manage online exams, user enrollment, and learning progress. Built secure REST APIs using Spring Boot for course management, authentication, and user operations, with role-based access control to protect learning resources.",
    image: "/elearning.png",
    technologies: ["Java",
    "Spring Boot",
    "Spring Security",
    "REST APIs",
    "MySQL",
    "React"],
    github: "https://github.com/anup-08/E-Learning",
    
  },
  {
    id: 4,
    title: "Online Voting System",
    description: "Secure online voting application designed to manage elections, candidates, and voters through a structured workflow. Implemented authentication and authorization to ensure valid voting, prevent duplicate votes, and maintain data integrity using Spring Boot–based REST APIs.",
    image: "/onlinevote.jpg",
    technologies: ["Java",
    "Spring Boot",
    "Spring Security",
    "REST APIs",
    "MySQL"],
    github: "https://github.com/anup-08/onlineVoting",
    
  },
  {
    id: 5,
    title: "Quiz App",
    description: "Interactive web quiz application built to test users’ knowledge with multiple-choice questions, live score tracking, and instant feedback. Designed with a clean and responsive UI using core web technologies.",
    image: "/quiz.jpg",
    technologies: [ "HTML",
    "CSS",
    "JavaScript"],
    github: "https://github.com/anup-08/Quiz-App",
    
  },
  {
    id: 6,
    title: "Weather App",
    description: "Interactive weather application that lets users search current weather conditions by city using the OpenWeatherMap API. Displays real-time temperature, humidity, wind speed, and weather status with dynamic icons, built with core web technologies and API integration.",
    image: "/weather.jpg",
    technologies: ["HTML",
    "CSS",
    "JavaScript",
    "OpenWeatherMap API"],
    github: "#",
    demo: "#"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Programming Using JAVA",
    year: "2022",
    description: "Completed foundational Java programming covering object-oriented concepts, syntax, and core libraries."
  },
  {
    id: 2,
    title: "DSA using JAVA",
    year: "2023",
    description: "Focused on data structures and algorithms using Java, including problem-solving, complexity analysis, and coding practice."
  },
  {
    id: 3,
    title: "Android Development",
    year: "2024",
    description: "Learned Android application development fundamentals, including UI design, activities, and basic app architecture."
  },
  {
    id: 4,
    title: "Database Management system",
    year: "2024",
    description: "Studied database concepts such as relational models, SQL queries, normalization, and transaction management."
  }
];
