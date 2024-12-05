import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';

const About = () => {
  const passions = [
    {
      icon: <HiOutlineCode className="w-8 h-8" />,
      title: "Coding Enthusiast",
      description: "Passionate about creating elegant solutions through code"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Love tackling challenges and finding innovative solutions"
    },
    {
      icon: <HiOutlineSparkles className="w-8 h-8" />,
      title: "Creative Mind",
      description: "Bringing ideas to life through modern web development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-2xl transform -rotate-3"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden">
                <img
                  src={import.meta.env.VITE_APP_ABOUT_IMAGE}
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-700">
                Passionate About <span className="text-primary">Creating</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Hey there! I'm a second-year ICS student at Army Public College System with a burning passion for web development. 
                My journey in coding started with curiosity and has evolved into a deep love for creating beautiful, functional websites.
              </p>
              <p className="text-gray-600 mb-4">
                When I'm not studying, you'll find me experimenting with new technologies, building projects, 
                or diving into online tutorials to expand my knowledge. I believe in learning by doing, which is why 
                I've already completed two web projects that I'm proud of.
              </p>
            </div>

            {/* Skills & Interests */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Current Focus</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Computer Science
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Mathematics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Web Development
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Tech Stack</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    React.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
            </div>

            {/* Passions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {passions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-primary mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
