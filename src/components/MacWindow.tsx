'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MacWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export default function MacWindow({ 
  title = "Untitled", 
  children, 
  className = "",
  onClose,
  onMinimize,
  onMaximize 
}: MacWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden ${className}`}
    >
      {/* Title Bar */}
      <div className="bg-gray-100/80 backdrop-blur-sm px-4 py-3 border-b border-gray-200/50 flex items-center justify-between">
        {/* Traffic Lights */}
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200 flex items-center justify-center group"
          >
            <div className="w-1.5 h-1.5 bg-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMinimize}
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center group"
          >
            <div className="w-1.5 h-0.5 bg-yellow-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMaximize}
            className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200 flex items-center justify-center group"
          >
            <div className="w-1.5 h-1.5 border border-green-700 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </motion.button>
        </div>
        
        {/* Window Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        
        {/* Right side placeholder */}
        <div className="w-12" />
      </div>
      
      {/* Window Content */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}