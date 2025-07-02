'use client';

import MacWindow from '@/components/MacWindow';
import { motion } from 'framer-motion';
import { Code, Rocket, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center space-y-8">
      {/* Main Welcome Window */}
      <MacWindow title="Welcome to Devaansh's Portfolio" className="w-full max-w-4xl">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Hello, I'm Devaansh
            </h1>
            <p className="text-xl text-gray-600">
              Computer Science Student | Senior Year
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center space-x-2 text-gray-700"
          >
            <GraduationCap size={24} />
            <span>Passionate about creating innovative solutions</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-lg text-gray-700 max-w-2xl mx-auto"
          >
            <p>
              Welcome to my digital portfolio! I'm a senior computer science student
              with a passion for full-stack development, AI, and creating user-friendly
              applications. This site showcases my journey, projects, and skills.
            </p>
          </motion.div>
        </div>
      </MacWindow>

      {/* Quick Access Windows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <MacWindow title="Latest Projects" className="h-64">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center h-full text-center space-y-4"
          >
            <Code size={48} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-800">
              Check out my work
            </h3>
            <p className="text-gray-600">
              Explore my latest projects and code repositories
            </p>
          </motion.div>
        </MacWindow>

        <MacWindow title="Skills & Experience" className="h-64">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col items-center justify-center h-full text-center space-y-4"
          >
            <Rocket size={48} className="text-green-500" />
            <h3 className="text-xl font-semibold text-gray-800">
              Technical Skills
            </h3>
            <p className="text-gray-600">
              Discover my expertise in various technologies
            </p>
          </motion.div>
        </MacWindow>
      </div>
    </div>
  );
}
