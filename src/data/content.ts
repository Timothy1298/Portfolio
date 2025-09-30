const content = {
  // ----------------- HERO -----------------
  name: "Timothy Kuria",
  title: "Software Developer | Network Specialist | AI & Finance Enthusiast",
  summary:
    "I am a results-driven IT professional with experience in networking, ISP systems, full-stack web development, and AI-driven financial technologies. Passionate about building scalable applications, smart systems, and automation that solve real-world challenges.",

  heroCTA: [
    { label: "Hire Me", href: "mailto:Tkuria30@gmail.com" },
    { label: "Download CV", href: "/assets/Timothy_Kuria_CV.pdf", download: true },
  ],

  // ----------------- ABOUT -----------------
  about: {
    bio: "With a strong background in computer science and hands-on experience in networking, software development, and financial systems, I specialize in creating innovative digital solutions. I combine technical expertise with analytical problem-solving to deliver impactful results.",

    // ✅ NEW: Experience added
    experience: [
      {
        role: "Network & Systems Engineer",
        company: "Mikrotik / ISP Projects",
        year: "2022 – 2024",
        details:
          "Configured and maintained Mikrotik routers, implemented ISP infrastructure, optimized bandwidth allocation, and ensured secure, reliable internet delivery for enterprise clients.",
      },
      {
        role: "Software Development Intern",
        company: "XYZ Company",
        year: "2021",
        details:
          "Contributed to web app development using React, Node.js, and MySQL. Assisted in creating frontend components and APIs while collaborating in agile sprint cycles.",
      },
    ],

    education: [
      {
        degree: "BSc Computer Science",
        school: "Chuka University",
        year: "Expected 2025",
      },
    ],
    certifications: [
      { name: "Cisco Networking (MikroTik, ISP setup)", year: "2023" },
      { name: "Web Development Projects (HTML, CSS, PHP, React)", year: "2024" },
      { name: "AI & Financial Systems (self-learning + projects)", year: "2025" },
    ],
  },

  // ----------------- SKILLS -----------------
  skills: {
    languages: ["JavaScript", "TypeScript", "PHP", "Java", "Python", "C++"],
    frameworks: ["React", "Node.js", "Express", "Spring Boot", "Tailwind CSS"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    others: ["MikroTik", "Linux", "Networking", "Git & GitHub", "AI Tools"],
    stats: [
      { label: "Projects Completed", value: 15 },
      { label: "Happy Clients", value: 8 },
      { label: "Years Experience", value: 3 },
    ],
  },

  // ----------------- PROJECTS -----------------
  projects: [
    {
      id: "pfm",
      title: "AI-Powered Personal Finance Management System",
      summary:
        "A PHP + MySQL platform with AI-based expense prediction, automated categorization, financial reports, and user dashboards.",
      tags: ["PHP", "MySQL", "Tailwind", "AI"],
      image: "/assets/project-pfm.png",
      link: "#",
    },
    {
      id: "svms",
      title: "Smart Visitor Management System",
      summary:
        "React + Spring Boot application for QR code check-ins, OCR ID verification, real-time notifications, and visitor analytics.",
      tags: ["React", "Spring Boot", "OCR", "Twilio"],
      image: "/assets/project-svms.png",
      link: "#",
    },
    {
      id: "scmus",
      title: "Smart Campus Management & Utility System",
      summary:
        "Full-featured campus platform with GPA tracking, QR attendance, fee payment, hostel allocation, and AI assistance.",
      tags: ["React", "TypeScript", "MySQL", "AI"],
      image: "/assets/project-scmus.png",
      link: "#",
    },
  ],

  // ----------------- CONTACT -----------------
  email: "Tkuria30@gmail.com",
  phone: "+254-7XX-XXX-XXX", // replace with your phone
  linkedin: "https://linkedin.com/in/timothy-kuria",
  github: "https://github.com/Timothy1298",
};

export default content;