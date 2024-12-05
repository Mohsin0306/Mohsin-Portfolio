import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const templateParams = {
        to_name: 'Mohsin Ashraf',
        from_name: form.name,
        message: form.message,
        reply_to: form.email,
        to_email: import.meta.env.VITE_APP_EMAIL, // Your email from .env
        subject: 'New Contact Form Submission',
        cc_email: '', // Add CC email if needed
        bcc_email: '', // Add BCC email if needed
      };

      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: import.meta.env.VITE_APP_EMAIL,
      href: `mailto:${import.meta.env.VITE_APP_EMAIL}`,
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: import.meta.env.VITE_APP_PHONE,
      href: `tel:${import.meta.env.VITE_APP_PHONE}`,
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: 'https://maps.google.com/?q=Lahore,Pakistan',
    },
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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-all hover:bg-primary hover:text-white"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative bg-white shadow-xl rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border text-white border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-lg bg-primary text-white font-medium
                    hover:bg-primary/90 focus:ring-4 focus:ring-primary/20 transition-all
                    disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}

                {success && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500 text-sm text-center"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
