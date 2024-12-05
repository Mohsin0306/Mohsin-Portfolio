import { motion } from "framer-motion";
import {
  SiReact,
  SiMongodb,
  SiVite,
  SiExpress,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: <SiReact />, color: "#61DAFB", level: 90 },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 85 },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", level: 95 },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6", level: 90 },
        { name: "Vite", icon: <SiVite />, color: "#646CFF", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", level: 85 },
        { name: "Express", icon: <SiExpress />, color: "#000000", level: 80 },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 85 },
      ],
    },
    {
      category: "UI Frameworks & Libraries",
      items: [
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", level: 90 },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", level: 85 },
        { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF", level: 80 },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "GitHub", icon: <SiGithub />, color: "#181717", level: 90 },
        { name: "Vercel", icon: <SiVercel />, color: "#000000", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
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
          <h2 className="section-title inline-block mx-auto">Technical Skills</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            My expertise in modern web development technologies
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div 
                          className="text-2xl"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{ 
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Always learning and exploring new technologies to stay at the forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
