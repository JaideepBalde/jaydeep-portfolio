import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Cloud,
  ShieldCheck,
  Terminal,
  Database,
  Code2,
  Zap,
  CheckCircle,
  ExternalLink,
  Download,
  Menu,
  X,
  ChevronDown,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  Lock,
  Globe,
  FileText,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Star,
  GitBranch,
  Cpu,
  Layers,
  Activity
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Track mouse for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" }
  ];

  // Skills data
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Elasticsearch", level: 70 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 90 },
        { name: "AWS", level: 80 },
        { name: "Jenkins", level: 85 },
        { name: "Nginx", level: 80 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Microservices", level: 80 },
        { name: "RabbitMQ", level: 75 },
        { name: "Testing", level: 85 },
        { name: "Monitoring", level: 80 }
      ]
    }
  ];

  // Experience data
const experiences = [
  {
    role: "Research Intern",
    company: "SP Jain Institute of Management & Research (SPJIMR)",
    period: "Jan 2025 – July 2025",
    description:
      "Worked on academic and applied research focused on understanding learning outcomes from hackathons and technology-driven competitions.",
    achievements: [
      "Conducted surveys with 200+ participants across multiple hackathons",
      "Reviewed and analyzed 100+ high-ranking research papers to identify research gaps",
      "Designed structured questionnaires and data analysis methodology",
      "Produced insights used for academic research and reporting"
    ],
    technologies: ["Data Analysis", "Research Methodology", "Survey Design", "Excel", "Documentation"]
  },
  {
    role: "Independent Backend & Systems Projects",
    company: "Self-Directed",
    period: "2025",
    description:
      "Designed and built multiple backend, system-level, and DevOps-focused projects to strengthen fundamentals in scalable systems and infrastructure.",
    achievements: [
      "Built a multi-database backend supporting MongoDB and PostgreSQL with clean architecture",
      "Implemented JWT-based authentication and role-based access control",
      "Designed a scalable URL shortening service with caching and indexing strategies",
      "Automated CI/CD pipelines using Docker, Jenkins, AWS EC2, and Nginx",
      "Explored system security through CTF challenges and penetration-testing tools"
    ],
    technologies: [
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Jenkins",
      "AWS EC2",
      "Linux",
      "Redis"
    ]
  }
];

 // Projects data (Top 10 – Backend / Systems Focused)
const projects = [
  {
    title: "Enterprise Multi-Database Backend",
    description:
      "Production-grade backend system supporting MongoDB and PostgreSQL with clean architecture, JWT authentication, and environment-based configuration.",
    tech: ["Node.js", "MongoDB", "PostgreSQL", "JWT", "Docker"],
    features: [
      "Multi-database support",
      "Service & repository layer architecture",
      "Centralized error handling",
      "Secure authentication and authorization"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { apis: "50+", response: "<100ms", uptime: "99.9%" }
  },
  {
    title: "Scalable URL Shortening Service",
    description:
      "High-performance URL shortening service designed for scale, incorporating hashing strategies, caching, and database indexing.",
    tech: ["Node.js", "Redis", "MongoDB", "Express"],
    features: [
      "High-throughput redirection",
      "Collision-free hashing",
      "Caching for hot URLs",
      "Analytics-ready architecture"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { redirects: "100K+/day", latency: "<20ms" }
  },
  {
    title: "CI/CD Automated Deployment Pipeline",
    description:
      "End-to-end CI/CD pipeline using Jenkins and Docker to build, test, and deploy applications to AWS EC2 with Nginx reverse proxy.",
    tech: ["Jenkins", "Docker", "AWS EC2", "Nginx", "Linux"],
    features: [
      "Automated build and deployment",
      "Zero-downtime deployment strategy",
      "Secure SSH-based delivery",
      "Production-grade server setup"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { deploys: "100+", rollback: "<1 min", uptime: "99.95%" }
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Data analytics platform integrating machine learning outputs with interactive dashboards for real-time insights.",
    tech: ["Python", "Pandas", "ML Models", "React", "APIs"],
    features: [
      "ML-driven insights",
      "Real-time data visualization",
      "API-driven backend",
      "Scalable data pipelines"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { datasets: "Large-scale", insights: "Automated" }
  },
  {
    title: "Strategy Backtesting Engine",
    description:
      "Quantitative finance backtesting engine for evaluating trading strategies using historical data and performance metrics.",
    tech: ["Python", "Pandas", "NumPy", "Data Analysis"],
    features: [
      "Historical data simulation",
      "Strategy performance metrics",
      "Risk and drawdown analysis",
      "Extensible strategy framework"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { strategies: "Multiple", dataPoints: "Millions" }
  },
  {
    title: "FinSight – Financial Analytics Platform",
    description:
      "Financial analytics application for tracking, analyzing, and visualizing market and personal finance data.",
    tech: ["Python", "SQL", "APIs", "Data Visualization"],
    features: [
      "Financial data ingestion",
      "Insightful dashboards",
      "Modular analytics components",
      "Extensible architecture"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { users: "Active", reports: "Automated" }
  },
  {
    title: "Brain Tumor Detection System",
    description:
      "Deep learning-based medical imaging system using U-Net architecture for brain tumor segmentation and detection.",
    tech: ["Python", "TensorFlow", "U-Net", "Computer Vision"],
    features: [
      "Medical image segmentation",
      "Deep learning pipeline",
      "Model evaluation metrics",
      "Research-oriented implementation"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { accuracy: ">90%", dataset: "Medical MRI" }
  },
  {
    title: "DSA Visualizer Platform",
    description:
      "Interactive platform for visualizing data structures and algorithms to aid understanding of core CS concepts.",
    tech: ["JavaScript", "React", "Algorithms"],
    features: [
      "Step-by-step visualizations",
      "Multiple algorithm support",
      "Interactive learning interface",
      "Performance-focused logic"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { algorithms: "15+", users: "Learners" }
  },
  {
    title: "YouTube AI Video Creator",
    description:
      "AI-powered system that automates video generation workflows using text, images, and synthesized audio.",
    tech: ["Python", "AI Models", "Text-to-Speech", "Automation"],
    features: [
      "Automated content generation",
      "AI-based narration",
      "Pipeline-driven processing",
      "Extensible media workflow"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { videos: "Automated", pipeline: "End-to-end" }
  },
  {
    title: "EduTrack – Education Management System",
    description:
      "Backend-focused education tracking system managing users, progress, and analytics with secure APIs.",
    tech: ["Node.js", "MongoDB", "REST APIs"],
    features: [
      "User and role management",
      "Progress tracking",
      "Secure backend APIs",
      "Scalable data model"
    ],
    github: "https://github.com/JaideepBalde",
    live: "#",
    metrics: { modules: "Multiple", users: "Tracked" }
  }
];
// Achievements data (Verified & Resume-Aligned)
const achievements = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Barclays Hack-O-Hire CTF – Top Performer",
    description:
      "Ranked among the Top 5 out of 115+ participants in the Barclays Cybershala Capture The Flag hackathon, focused on cybersecurity, system exploitation, and real-world attack scenarios.",
    date: "2024"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Cybersecurity Innovation Challenge – Finalist",
    description:
      "Finalist in an inter-college cybersecurity project competition for designing a USB Rubber Ducky–based keystroke injection tool as a low-cost penetration testing device.",
    date: "2023"
  },
   {
    icon: <Users className="w-8 h-8" />,
    title: "Research Intern – SPJIMR",
    description:
      "Completed a 7-month research internship at SP Jain Institute of Management & Research, conducting large-scale surveys and analyzing learning outcomes from hackathons.",
    date: "2025"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Research Paper Publication (IJRASET)",
    description:
      "Published research paper titled “Speech-Controlled Powerlenses for Optical Wearables” in the IJRASET Journal, focusing on embedded systems and assistive technology.",
    date: "2024"
  }
];

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100 relative overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
        }}
      />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            JB
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                  activeSection === item.id ? "text-indigo-400" : "text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all font-medium flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-slate-300 hover:text-indigo-400 transition"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 text-indigo-400"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative">
        <motion.div style={{ opacity, scale }} className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold">
                JB
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Jaydeep Balde
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {["Backend Engineer", "DevOps Enthusiast", "Software Devoplopment", "Cybersecurity"].map((tag, i) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Crafting high-performance backend systems, scalable APIs, and robust
            infrastructure. Turning complex problems into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            {[
              { icon: <Github />, href: "https://github.com/JaideepBalde", label: "GitHub" },
              { icon: <Linkedin />, href: "https://www.linkedin.com/in/jaydeep-balde-220a43204/", label: "LinkedIn" },
              { icon: <Mail />, href: "mailto:jaydeepbalade15@gmail.com", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-indigo-500 transition-all group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all font-medium flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-800/50 transition-all font-medium"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
  I am a backend-focused engineering graduate with hands-on experience in building and
  deploying RESTful APIs using Node.js, Express, and relational and NoSQL databases.
  I enjoy working close to the system layer—designing clean backend structures,
  handling data flow, and ensuring APIs behave predictably and securely.
</p>

<p className="text-lg text-slate-300 leading-relaxed">
  Through academic and self-driven projects, I have worked on database design,
  request validation, error handling, and containerized deployments using Docker.
  I am comfortable testing APIs, analyzing logs, and understanding how backend
  systems behave in real-world, internet-facing environments.
</p>

<p className="text-lg text-slate-300 leading-relaxed">
  I value clarity, maintainability, and process-driven development. I believe reliable
  software comes from understanding system behavior, following structured workflows,
  and continuously improving through learning, feedback, and practical exposure.
</p>


              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { icon: <Code2 />, label: "Clean Code" },
                  { icon: <Layers />, label: "Scalable Systems" },
                  { icon: <Activity />, label: "Performance" },
                  { icon: <ShieldCheck />, label: "Security First" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="text-indigo-400">{item.icon}</div>
                    <span className="text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-8">
                <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: "Years of Experience", value: "3+" },
                    { label: "Projects Completed", value: "50+" },
                    { label: "Lines of Code", value: "100K+" },
                    { label: "Coffee Consumed", value: "∞" }
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-slate-400">{stat.label}</span>
                      <span className="text-2xl font-bold text-indigo-400">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

         <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-8">
  <h3 className="text-2xl font-semibold mb-4">Education</h3>

  <div className="flex items-start gap-4">
    <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
    <div>
      <p className="font-medium">
        Bachelor of Technology in Electronics and Telecommunication Engineering
      </p>

      <p className="text-slate-300 text-sm">
        Bharatiya Vidya Bhavan’s Sardar Patel Institute of Technology, Mumbai
      </p>

      <p className="text-slate-400 text-sm">
        University of Mumbai • 2021–2025
      </p>
    </div>
  </div>
</div>

                    
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ENGINEERING APPROACH SECTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Engineering Approach</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Clarity & Correctness",
                description: "Building systems with clear data flow, predictable behavior, and comprehensive understanding of failure scenarios."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Structured Architecture",
                description: "Emphasizing clean separation of concerns, responsible data handling, and APIs that are observable and testable."
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Real-World Ready",
                description: "Designing for production—infrastructure awareness, security considerations, and systems that improve over time."
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/20 p-6 hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                This portfolio represents my approach to building software systems—focusing on clarity, correctness, and practical applicability. I enjoy working with backend systems where understanding data flow, system behavior, and failure scenarios is as important as writing code.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                I value structured architectures, predictable APIs, and environments that can be observed, tested, and improved over time. My projects emphasize clean separation of concerns, responsible handling of data, and awareness of how systems operate in real-world conditions.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                This website is maintained as a long-term engineering record, showcasing projects and experiments that reflect how I learn, iterate, and apply fundamentals across backend, infrastructure, and security-adjacent domains.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { icon: <BookOpen className="w-4 h-4" />, text: "Continuous Learning" },
                  { icon: <Code2 className="w-4 h-4" />, text: "Clean Fundamentals" },
                  { icon: <Zap className="w-4 h-4" />, text: "Performance Aware" },
                  { icon: <Lock className="w-4 h-4" />, text: "Security Conscious" }
                ].map((tag) => (
                  <div key={tag.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors">
                    <span className="text-indigo-400">{tag.icon}</span>
                    <span className="text-sm text-slate-300">{tag.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* SKILLS SECTION */}
<section id="skills" className="py-24 px-6 bg-slate-900/30">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
      <p className="mt-6 text-slate-400 text-lg">
        Technologies and tools I have hands-on experience with through projects and practical work
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: catIndex * 0.1 }}
          className="rounded-2xl bg-slate-800/50 border border-slate-700 p-8 hover:border-indigo-500/50 transition-all"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="text-indigo-400">{category.icon}</div>
            <h3 className="text-2xl font-semibold">{category.title}</h3>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-slate-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Technologies Grid */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <h3 className="text-2xl font-semibold mb-8 text-center">
        Technologies & Frameworks
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {[
          "Node.js",
          "Express.js",
          "Python",
          "MongoDB",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Jenkins",
          "AWS EC2",
          "Nginx",
          "Git",
          "GitHub",
          "REST APIs",
          "JWT Authentication",
          "Linux",
          "Bash",
          "System Design Basics"
        ].map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-indigo-400 transition-all cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </div>
</section>


      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-slate-800/50 border border-slate-700 p-8 hover:border-indigo-500/50 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-indigo-400">{exp.role}</h3>
                    <p className="text-lg text-slate-300 mt-1">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium">
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-300 mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-700/50 text-slate-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
            <p className="mt-6 text-slate-400 text-lg">Production-ready systems built with best practices</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Cpu className="w-8 h-8 text-indigo-400" />
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg hover:bg-slate-700 transition"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 rounded-lg hover:bg-slate-700 transition"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 rounded-lg bg-slate-900/50 border border-slate-700">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-indigo-400 font-semibold text-sm">{value}</div>
                          <div className="text-xs text-slate-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded text-xs bg-slate-700/50 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements & Recognition</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-8 hover:border-indigo-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold">{achievement.title}</h3>
                      <span className="text-sm text-slate-400 whitespace-nowrap">{achievement.date}</span>
                    </div>
                    <p className="mt-2 text-slate-300">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
  name: "Anmol Gupta",
  role: "Software Engineer",
  company: "Amazon, Mumbai",
  text: "Jaydeep has a strong grasp of backend fundamentals and system design with some taste of AIML tools. His approach to problem-solving is structured, and he pays close attention to reliability and edge cases.",
  rating: 5
},
{
  name: "Soham More",
  role: "Software Engineer",
  company: "Capgemini, Mumbai",
  text: "I have worked closely with Jaydeep on multiple technical discussions and projects. He is Great at Cybersecurity Knowledge and Fintech. He explains complex concepts clearly and consistently focuses on writing clean, maintainable code.",
  rating: 5
}

            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-slate-800/50 border border-slate-700 p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG/ARTICLES SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
            <p className="mt-6 text-slate-400 text-lg">Sharing knowledge and insights</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
  {
    title: "Designing a Multi-Database Backend in Node.js",
    excerpt:
      "A practical walkthrough of building a backend that supports both MongoDB and PostgreSQL, including connection management, repository abstraction, and environment-based configuration decisions.",
    date: "Jan 2025",
    readTime: "9 min read",
    category: "Backend Architecture"
  },
  {
    title: "Lessons from Building a Scalable URL Shortening Service",
    excerpt:
      "Key design considerations behind a scalable URL shortener — hashing strategies, database indexing, caching with Redis, and handling high-throughput redirection safely.",
    date: "Jan 2025",
    readTime: "7 min read",
    category: "System Design"
  },
  {
    title: "From Localhost to Production: CI/CD with Docker and Jenkins",
    excerpt:
      "An end-to-end explanation of how I automated build and deployment workflows using Jenkins, Docker, and AWS EC2, including common pitfalls and production hardening steps.",
    date: "Dec 2024",
    readTime: "10 min read",
    category: "DevOps"
  }
].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-slate-800/50 border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-indigo-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-slate-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{article.date}</span>
                    <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something Great</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6" />
            <p className="text-xl text-slate-300">
              Open to Backend, SDE, and SRE opportunities. Let's collaborate on your next project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: <Mail />,
                label: "Email",
                value: "jaydeepbalade15@gmail.com",
                href: "mailto:jaydeepbalade15@gmail.com"
              },
              {
                icon: <Github />,
                label: "GitHub",
                value: "@JaideepBalde",
                href: "https://github.com/JaideepBalde"
              },
              {
                icon: <Linkedin />,
                label: "LinkedIn",
                value: "Jaydeep Balde",
                href: "https://www.linkedin.com/in/jaydeep-b-220a43204/"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="rounded-2xl bg-slate-800/50 border border-slate-700 p-6 hover:border-indigo-500/50 transition-all group text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-indigo-500/10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <p className="text-sm text-slate-400 mb-1">{contact.label}</p>
                <p className="font-medium text-slate-200 group-hover:text-indigo-400 transition">
                  {contact.value}
                </p>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:jaydeepbalade15@gmail.com"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all font-medium flex items-center gap-2 group"
              >
                <Mail className="w-5 h-5" />
                Send Me an Email
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-800/50 transition-all font-medium flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            <p className="text-slate-400">
              Available for full-time opportunities and interesting projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Jaydeep Balde
              </p>
              <p className="text-slate-400 text-sm">Backend Engineer • System Architect • DevOps Enthusiast</p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/JaideepBalde"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg hover:bg-slate-800 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jaydeep-balde-220a43204/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg hover:bg-slate-800 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:jaydeepbalade15@gmail.com"
                className="p-3 rounded-lg hover:bg-slate-800 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Jaydeep Balde. Built with React & Tailwind CSS. Proud To Be Bharatiya.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0, scale: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors shadow-lg z-30"
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </motion.button>
    </div>
  );
}
