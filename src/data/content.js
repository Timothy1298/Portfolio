const content = {
  name: "Timothy Kuria",
  title: "Software Developer | Network Specialist | AI & Finance Enthusiast",
  summary:
    "I am a results-driven IT professional with experience in networking, ISP systems, full-stack web development, and AI-driven financial technologies. Passionate about building scalable applications, smart systems, and automation that solve real-world challenges.",
  heroCTA: [
    { label: "Hire Me", href: "mailto:Tkuria30@gmail.com" },
    { label: "Download CV", href: "/assets/Timothy_Kuria_CV.pdf", download: true },
  ],
  about: {
    bio: "With a strong background in computer science and hands-on experience in networking, software development, and financial systems, I specialize in creating innovative digital solutions. I combine technical expertise with analytical problem-solving to deliver impactful results.",
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
        company: "Blackie Networks Company",
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
  projects: [
    {
      id: "pfm",
      title: "AI-Powered Personal Finance Management System",
      summary:
        "Empowering users to take control of their finances, this platform leverages AI to predict expenses, automate categorization, and generate insightful financial reports. It has helped individuals and small businesses make smarter budgeting decisions, reduce unnecessary spending, and achieve financial goals with confidence.",
      tags: ["PHP", "MySQL", "Tailwind", "AI"],
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920222.png", // Finance/AI icon
      link: "https://www.mint.com/", // Mint: Real personal finance management
    },
    {
      id: "svms",
      title: "Smart Visitor Management System",
      summary:
        "Transforming the way organizations handle guest check-ins, this system uses QR codes and OCR for seamless, secure entry. Real-time notifications and analytics have improved security, reduced wait times, and provided actionable insights for facility managers. It has modernized visitor experiences in offices, schools, and events.",
      tags: ["React", "Spring Boot", "OCR", "Twilio"],
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Visitor/ID icon
      link: "https://www.greetly.com/", // Greetly: Real visitor management system
    },
    {
      id: "scmus",
      title: "Smart Campus Management & Utility System",
      summary:
        "A comprehensive campus platform that streamlines GPA tracking, attendance, fee payments, hostel allocation, and provides AI-powered assistance. It has enhanced student engagement, simplified administrative tasks, and fostered a smarter, more connected campus environment for both students and staff.",
      tags: ["React", "TypeScript", "MySQL", "AI"],
      image: "https://cdn-icons-png.flaticon.com/512/167/167707.png", // Campus/education icon
      link: "https://www.blackboard.com/", // Blackboard: Real campus management system
    },
  ],
  testimonials: [
    {
      name: "Enocky Mwema",
      role: "Blockie Networks",
      feedback: "Timothy delivered our AI analytics project ahead of schedule and exceeded expectations. Highly recommended!",
        avatar: "https://avatars.dicebear.com/api/initials/JD.svg"
    },
    {
      name: "Pius Musomi",
      role: "Network Administrator",
      feedback: "Professional, reliable, and a true expert in networking and software development.",
        avatar: "https://avatars.dicebear.com/api/initials/JS.svg"
    }
  ],
  email: "Tkuria30@gmail.com",
  phone: "+254-748-386-783",
  linkedin: "https://linkedin.com/in/timothy-kuria",
  github: "https://github.com/Timothy1298",
  blog: [
    {
      id: "ai-finance-tutorial",
      title: "Getting Started with AI in Finance",
      date: "2025-08-10",
      summary: "A practical guide to integrating AI tools into financial systems for smarter analytics and automation.",
      tags: ["AI", "Finance", "Tutorial"],
      link: "#"
    },
    {
      id: "react-networking",
      title: "Building Real-Time Networking Apps with React",
      date: "2025-07-22",
      summary: "Step-by-step walkthrough for creating scalable, real-time web apps using React and WebSockets.",
      tags: ["React", "Networking", "Case Study"],
      link: "#"
    },
    {
      id: "automation-case-study",
      title: "Automation Success: A Startup Case Study",
      date: "2025-06-15",
      summary: "How automation tools helped a startup save time and resources, with practical implementation tips.",
      tags: ["Automation", "Startup", "Case Study"],
      link: "#"
    }
  ],
};

export default content;
// For Node.js ES module compatibility
export { content };