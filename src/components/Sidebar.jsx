import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll spy with improved performance
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'hero', name: 'Home', icon: HomeIcon },
    { id: 'about', name: 'About', icon: UserIcon },
    { id: 'experience', name: 'Experience', icon: AcademicCapIcon },
    { id: 'projects', name: 'Projects', icon: CodeBracketIcon },
    { id: 'skills', name: 'Skills', icon: WrenchScrewdriverIcon },
    { id: 'contact', name: 'Contact', icon: EnvelopeIcon },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: import.meta.env.VITE_APP_GITHUB_URL,
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: import.meta.env.VITE_APP_LINKEDIN_URL,
    },
    {
      name: 'X',
      icon: FaXTwitter,
      url: import.meta.env.VITE_APP_TWITTER_URL,
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: import.meta.env.VITE_APP_YOUTUBE_URL,
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: import.meta.env.VITE_APP_INSTAGRAM_URL,
    },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg md:hidden"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-gray-800" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              />
              <motion.nav
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.2 }}
                className="fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-md border-r border-gray-200 shadow-2xl z-40"
              >
                <SidebarContent 
                  navigationItems={navigationItems}
                  socialLinks={socialLinks}
                  activeSection={activeSection}
                  onItemClick={handleNavClick}
                />
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden md:block fixed top-0 left-0 h-full w-72 bg-white/90 backdrop-blur-md border-r border-gray-200 shadow-lg z-40">
        <SidebarContent 
          navigationItems={navigationItems}
          socialLinks={socialLinks}
          activeSection={activeSection}
          onItemClick={handleNavClick}
        />
      </nav>
    </>
  );
};

// Separate component for sidebar content
const SidebarContent = ({ navigationItems, socialLinks, activeSection, onItemClick }) => (
  <div className="flex flex-col h-full py-8 px-4">
    {/* Logo/Brand */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-12 text-center"
    >
      <h2 className="text-2xl font-bold gradient-text">Mohsin Ashraf</h2>
    </motion.div>

    {/* Navigation Links */}
    <div className="flex-1 space-y-2">
      {navigationItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          <button
            onClick={() => onItemClick(item.id)}
            className="relative block w-full"
          >
            <motion.div
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group
                ${activeSection === item.id ? 'text-white' : 'hover:text-primary'}`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-bg"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-3 w-full">
                <item.icon className={`w-5 h-5 transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-600 group-hover:text-primary'
                }`} />
                <span className={`font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-700 group-hover:text-primary'
                }`}>
                  {item.name}
                </span>
              </div>
            </motion.div>
          </button>
        </motion.div>
      ))}
    </div>

    {/* Social Links */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="pt-8 border-t border-gray-200"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="p-2 rounded-lg bg-gray-100/50 hover:bg-primary hover:text-white transition-colors"
            title={social.name}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Sidebar;
