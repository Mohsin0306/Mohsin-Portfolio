import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineLightBulb } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      title: "ICS Student",
      company: "Army Public College System",
      period: "2022 - Present",
      description: "Currently pursuing ICS with a focus on Computer Science and Mathematics. Actively learning and implementing programming concepts.",
      icon: HiOutlineAcademicCap,
    },
    {
      title: "Web Developer",
      company: "Personal Projects",
      period: "2021 - Present",
      description: "Building web applications using React and modern technologies. Completed 2 significant projects demonstrating practical skills.",
      icon: HiOutlineBriefcase,
    },
    {
      title: "Self-Taught Developer",
      company: "Online Learning",
      period: "2021 - Present",
      description: "Continuously learning through online platforms, focusing on web development technologies and best practices.",
      icon: HiOutlineLightBulb,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Experience & Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and development experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <exp.icon className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-blue-700 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-blue-300/50 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden">
                <img
                  src={import.meta.env.VITE_APP_EXPERIENCE_IMAGE}
                  alt="Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Mohsin Ashraf</h3>
                <p className="text-blue-700 mt-2">Student Developer</p>
                <div className="mt-4 flex justify-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">2+</div>
                    <div className="text-sm text-gray-600">Years Coding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">2</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">5+</div>
                    <div className="text-sm text-gray-600">Tech Stack</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
