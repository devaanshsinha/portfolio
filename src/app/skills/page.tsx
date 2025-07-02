'use client';

import MacWindow from '@/components/MacWindow';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Brain, Server } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe size={32} className="text-blue-500" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: <Server size={32} className="text-green-500" />,
      skills: ['Node.js', 'Python', 'Java', 'Express.js', 'RESTful APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database Technologies',
      icon: <Database size={32} className="text-purple-500" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Programming Languages',
      icon: <Code size={32} className="text-orange-500" />,
      skills: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={32} className="text-pink-500" />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={32} className="text-indigo-500" />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Data Analysis'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-start pt-16 space-y-6">
      <MacWindow title="Technical Skills" className="w-full max-w-6xl">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Technical Arsenal</h1>
            <p className="text-lg text-gray-600">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    {category.icon}
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                      <span className="text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Always Learning
            </h3>
            <p className="text-gray-600">
              Technology evolves rapidly, and I'm committed to continuous learning and 
              staying up-to-date with the latest trends and best practices in software development.
            </p>
          </motion.div>
        </div>
      </MacWindow>
    </div>
  );
}