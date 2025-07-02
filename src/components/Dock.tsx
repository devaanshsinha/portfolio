'use client';

import { motion } from 'framer-motion';
import { User, Code, Mail, FolderOpen, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

function DockItem({ icon, label, href, isActive }: DockItemProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ 
          scale: 1.2, 
          y: -8,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <motion.div
          className={`
            w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center
            backdrop-blur-sm border border-white/20 cursor-pointer
            ${isActive 
              ? 'bg-blue-500/90 text-white' 
              : 'bg-white/80 text-gray-700 hover:bg-white/90'
            }
          `}
          whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
        >
          {icon}
          
          {/* Active indicator */}
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </motion.div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                     bg-gray-900/90 text-white text-sm px-2 py-1 rounded-md
                     backdrop-blur-sm border border-gray-700/50 whitespace-nowrap
                     pointer-events-none"
        >
          {label}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default function Dock() {
  const pathname = usePathname();
  
  const dockItems = [
    { icon: <Home size={24} />, label: 'Home', href: '/' },
    { icon: <User size={24} />, label: 'About', href: '/about' },
    { icon: <Code size={24} />, label: 'Skills', href: '/skills' },
    { icon: <FolderOpen size={24} />, label: 'Projects', href: '/projects' },
    { icon: <Mail size={24} />, label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div
        className="flex items-end space-x-2 p-2 rounded-2xl 
                   bg-white/20 backdrop-blur-xl border border-white/30
                   shadow-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {dockItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <DockItem
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}