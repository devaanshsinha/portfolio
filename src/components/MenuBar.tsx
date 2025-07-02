'use client';

import { motion } from 'framer-motion';
import { Wifi, Battery, Volume2 } from 'lucide-react';

export default function MenuBar() {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 h-7 bg-gray-100/80 backdrop-blur-xl border-b border-gray-200/50"
    >
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - App name */}
        <div className="flex items-center space-x-4">
          <motion.span 
            className="text-sm font-semibold text-gray-800 cursor-pointer hover:text-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.span>
          <motion.span 
            className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            File
          </motion.span>
          <motion.span 
            className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            Edit
          </motion.span>
          <motion.span 
            className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            View
          </motion.span>
        </div>

        {/* Right side - System status */}
        <div className="flex items-center space-x-3 text-sm text-gray-700">
          <motion.div 
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <Wifi size={14} />
          </motion.div>
          <motion.div 
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <Volume2 size={14} />
          </motion.div>
          <motion.div 
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            <Battery size={14} />
            <span className="text-xs">100%</span>
          </motion.div>
          <motion.div 
            className="text-xs cursor-pointer hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            {currentDate} {currentTime}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}