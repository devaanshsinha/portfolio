'use client';

import MacWindow from '@/components/MacWindow';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactLinks = [
    {
      title: 'Email',
      icon: <Mail size={24} />,
      value: 'devaansh@example.com',
      href: 'mailto:devaansh@example.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'GitHub',
      icon: <Github size={24} />,
      value: 'github.com/devaansh',
      href: 'https://github.com/devaansh',
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'LinkedIn',
      icon: <Linkedin size={24} />,
      value: 'linkedin.com/in/devaansh',
      href: 'https://linkedin.com/in/devaansh',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-start pt-16 space-y-6">
      <MacWindow title="Get In Touch" className="w-full max-w-4xl">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Let's Connect</h1>
            <p className="text-lg text-gray-600">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} text-white mr-4`}>
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{link.title}</h3>
                      <p className="text-gray-600">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6"
              >
                <MessageSquare className="text-blue-500 mb-3" size={32} />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Open to Opportunities
                </h3>
                <p className="text-gray-600">
                  I'm currently looking for internship opportunities and 
                  full-time positions in software development. Let's discuss 
                  how we can work together!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </MacWindow>
    </div>
  );
}