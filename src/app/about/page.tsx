'use client';

import MacWindow from '@/components/MacWindow';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center space-y-6">
      <MacWindow title="About Me" className="w-full max-w-4xl">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Devaansh</h1>
            <p className="text-lg text-gray-600">Senior Computer Science Student</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <MapPin className="mx-auto mb-2 text-blue-500" size={24} />
              <h3 className="font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">United States</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Calendar className="mx-auto mb-2 text-green-500" size={24} />
              <h3 className="font-semibold text-gray-800">Education</h3>
              <p className="text-gray-600">Senior Year</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Heart className="mx-auto mb-2 text-red-500" size={24} />
              <h3 className="font-semibold text-gray-800">Passion</h3>
              <p className="text-gray-600">Technology</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a senior computer science student, I've spent the last few years immersing myself 
              in the world of technology and software development. My journey began with curiosity 
              about how things work, and has evolved into a deep passion for creating solutions 
              that make a difference.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Throughout my academic career, I've explored various areas of computer science, 
              from algorithms and data structures to web development and artificial intelligence. 
              I believe in the power of technology to solve real-world problems and improve 
              people's lives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or learning about the latest trends in software development.
            </p>
          </motion.div>
        </div>
      </MacWindow>
    </div>
  );
}