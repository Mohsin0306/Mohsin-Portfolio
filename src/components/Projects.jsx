import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiWebrtc,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "School Management System",
      description: "A comprehensive school management platform with real-time communication features, video conferencing for online classes, and complete administrative controls.",
      image: import.meta.env.VITE_APP_PROJECT_IMAGE_1,
      technologies: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
        { icon: <SiExpress className="text-[#000000]" />, name: "Express" },
        { icon: <SiSocketdotio className="text-[#010101]" />, name: "Socket.IO" },
        { icon: <SiWebrtc className="text-[#333333]" />, name: "WebRTC" },
      ],
      features: [
        "Real-time chat and notifications",
        "Video conferencing for online classes",
        "Student attendance tracking",
        "Grade management system",
        "Parent-teacher communication portal",
        "Assignment submission system",
      ],
      links: {
        github: "https://github.com/Mohsin0306/EDU_PRO",
        live: "https://edu-pro-two.vercel.app/",
      },
    },
    {
      title: "Professional Portfolio",
      description: "A modern, responsive portfolio website built with React and enhanced with smooth animations. Features a unique sidebar design and interactive elements.",
      image: import.meta.env.VITE_APP_PROJECT_IMAGE_2,
      technologies: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
        { icon: <SiFramer className="text-[#0055FF]" />, name: "Framer" },
      ],
      features: [
        "Responsive sidebar navigation",
        "Smooth scroll animations",
        "Interactive UI elements",
        "Modern glass-morphism design",
        "Dynamic content sections",
        "Optimized performance",
      ],
      links: {
        github: "https://github.com/Mohsin0306/Mohsin-Portfolio",
        live: "https://mohsin-portfolio-seven.vercel.app/",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="section-title inline-block mx-auto">Featured Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Showcasing my best work in web development and design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform rotate-2"></div>
                  <div className="absolute -inset-4 bg-gradient-to-l from-primary/10 to-secondary/10 rounded-2xl transform -rotate-2"></div>
                  
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
                      >
                        <div className="text-2xl">{tech.icon}</div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
