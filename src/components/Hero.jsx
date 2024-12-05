import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    2000,
    'UI/UX Enthusiast',
    2000,
    'React Specialist',
    2000,
    'MERN Stack Developer',
    2000,
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 lg:py-0 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary font-medium tracking-wide"
              >
                Welcome to my portfolio
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold"
              >
                Hi, I'm{" "}
                <span className="gradient-text relative inline-block">
                  Mohsin Ashraf
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left"
                  ></motion.span>
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 h-[40px]"
              >
                <TypeAnimation
                  sequence={roles}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-medium"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0"
            >
              Crafting beautiful, functional, and user-friendly digital experiences
              using modern technologies and best practices.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="px-4 py-2 bg-white/30 backdrop-blur-sm border border-white/20 text-primary rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary px-8 py-3"
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline px-8 py-3"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"
              ></motion.div>
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 rounded-full bg-gradient-to-l from-primary/20 via-secondary/20 to-accent/20"
              ></motion.div>
              
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="relative rounded-full overflow-hidden border-8 border-white/50 backdrop-blur-sm shadow-2xl aspect-square"
              >
                <img
                  src={import.meta.env.VITE_APP_PROFILE_IMAGE}
                  alt="Profile"
                  className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-300"
                  style={{
                    imageRendering: 'high-quality',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                  }}
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <Link to="about" smooth={true} duration={500} offset={-100}>
          <ChevronDownIcon className="h-8 w-8 text-primary animate-bounce cursor-pointer" />
        </Link>
      </motion.div>

      {/* Mobile Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-30 md:hidden"
      >
        <Link to="about" smooth={true} duration={500} offset={-100}>
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-100">
            <ChevronDownIcon className="h-6 w-6 text-primary animate-bounce" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
