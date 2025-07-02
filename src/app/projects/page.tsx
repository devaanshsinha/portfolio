'use client';

import MacWindow from '@/components/MacWindow';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      demoLink: '#',
      githubLink: '#',
      status: 'Completed',
      date: '2024'
    },
    {
      title: 'AI Task Manager',
      description: 'An intelligent task management application that uses AI to prioritize tasks and suggest optimal scheduling based on user patterns.',
      technologies: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma'],
      demoLink: '#',
      githubLink: '#',
      status: 'In Progress',
      date: '2024'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with real-time data, forecasts, and interactive maps. Built with modern web technologies.',
      technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
      demoLink: '#',
      githubLink: '#',
      status: 'Completed',
      date: '2023'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
      demoLink: '#',
      githubLink: '#',
      status: 'Completed',
      date: '2023'
    }
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-start pt-16 space-y-6">
      <MacWindow title="My Projects" className="w-full max-w-6xl">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Featured Projects</h1>
            <p className="text-lg text-gray-600">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  <span>{project.date}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Tag size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    href={project.demoLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600">
              I'm constantly working on new projects and exploring different technologies. 
              Check back regularly for updates!
            </p>
          </motion.div>
        </div>
      </MacWindow>
    </div>
  );
}