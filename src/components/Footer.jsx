import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: import.meta.env.VITE_APP_GITHUB_URL,
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: import.meta.env.VITE_APP_LINKEDIN_URL,
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: import.meta.env.VITE_APP_TWITTER_URL,
      icon: FaTwitter,
    },
    {
      name: 'Email',
      url: `mailto:${import.meta.env.VITE_APP_EMAIL}`,
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">MA.</h3>
            <p className="text-gray-600 max-w-xs">
              Crafting exceptional digital experiences with modern technologies and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Get in Touch</h4>
            <p className="text-gray-600">
              {import.meta.env.VITE_APP_EMAIL}
            </p>
            <p className="text-gray-600">
              {import.meta.env.VITE_APP_PHONE}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              {currentYear} Mohsin Ashraf. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
