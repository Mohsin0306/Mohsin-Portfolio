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

const placeholderImage = "https://via.placeholder.com/600x400?text=Project+Image";

const Projects = () => {
  const projects = [
    {
      title: "Near Glow",
      description: "Cosmetics Beauty & Perfume Store.",
      image: 'https://ik.imagekit.io/mohsin0307/WhatsApp%20Image%202025-07-03%20at%201.56.01%20AM.jpeg?updatedAt=1751489837747',
      technologies: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },
      ],
      features: [
        "Admin Dashboard.",
        "User Dashboard.",
        "Payment Gateway.",
        "Product Management.",
        "User Management.",
        "Order Management.",
        "Inventory Management.",
        "Analytics.",
      ],
      links: {
        github: "https://github.com/Mohsin0306/Near-Glow",
        live: "https://nearglow.com/",
      },
    },
    {
      title: "TeriCar",
      description: "VIN Decoder & Car Information.",
      image: 'https://ik.imagekit.io/mohsin0307/image.png?updatedAt=1751490039166',
      technologies: [
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
        { icon: <SiExpress className="text-[#000000]" />, name: "Express" },
      ],
      features: [
        "VIN Decoder.",
        "Car Information.",
        "Car History.",
        "Car Specifications.",
        "Car Images.",
        "Car Reviews.",
        "Car Comparisons.",
        "Car Recommendations.",
      ],
      links: {
        github: "https://github.com/Mohsin0306/Vin-Decode",
        live: "https://tericar.com",
      },
    },
    {
        title: "Quran Course",
        description: "Quran Course Website.",
      image: 'https://ik.imagekit.io/mohsin0307/image.png?updatedAt=1751490304059',
      technologies: [
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
        { icon: <SiSocketdotio className="text-[#010101]" />, name: "Socket.IO" },
      ],
      features: [
        "Quran Lessons.",
        "Quran Audio.",
        "Quran Translations.",
        "Quran Search.",
        "Quran Bookmarks.",
        "Quran Highlights.",
        "Quran Notes.",
      ],
      links: {
        github: "https://github.com/Mohsin0306/Quran-Course",
        live: "https://quran-course-psi.vercel.app/",
      },
    },
    {
      title: "EDU-PRO Manager",
      description: "School Management System.",
      image: 'https://ik.imagekit.io/mohsin0307/image.png?updatedAt=1751490437724',
      technologies: [
        { icon: <SiWebrtc className="text-[#333333]" />, name: "WebRTC" },
        { icon: <SiFramer className="text-[#0055FF]" />, name: "Framer" },
      ],
      features: [
        "Admin Dashboard.",
        "Student Dashboard.",
        "Teacher Dashboard.",
        "Parent Dashboard.",
        "Attendance Management.",
        "Result Management.",
        "Fee Management.",
        "Library Management.",
      ],
      links: {
        github: "https://github.com/Mohsin0306/EDU_PRO",
        live: "https://edu-pro-two.vercel.app/",
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

        {/* Projects Horizontal Scroll */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 pb-4 px-2 md:px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {projects.map((project, index) => {
            const showFeatures = project.features.slice(0, 3);
            const moreFeatures = project.features.length - showFeatures.length;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer min-w-[90vw] max-w-xs w-[90vw] md:min-w-[320px] md:w-80 flex-shrink-0 group"
                onClick={() => window.open(project.links.live, '_blank')}
              >
                {/* Project Image with overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Title and description on mobile */}
                  <div className="absolute bottom-0 left-0 w-full p-3 md:hidden">
                    <h3 className="text-lg font-bold text-white mb-1 truncate">{project.title}</h3>
                    <p className="text-xs text-gray-200 truncate">{project.description}</p>
                  </div>
                </div>

                {/* Project Info (desktop) */}
                <div className="p-4 flex flex-col flex-1 justify-between md:justify-start">
                  {/* Title and description for desktop */}
                  <div className="hidden md:block mb-2">
                    <h3 className="text-lg font-bold text-gray-900 truncate">{project.title}</h3>
                    <p className="text-xs text-gray-500 truncate">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full shadow-sm text-xs"
                      >
                        <span className="text-base">{tech.icon}</span>
                        <span className="font-medium text-gray-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="list-disc list-inside text-gray-500 text-xs mb-2">
                    {showFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                    {moreFeatures > 0 && (
                      <li className="text-primary font-semibold cursor-pointer">+{moreFeatures} more</li>
                    )}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto pt-2">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors text-sm font-medium px-2 py-1 rounded hover:bg-gray-100"
                      onClick={e => e.stopPropagation()}
                    >
                      <FaGithub className="text-base" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors text-sm font-medium px-2 py-1 rounded hover:bg-gray-100"
                      onClick={e => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="text-base" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
