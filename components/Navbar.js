// components/Navbar.js
"use client";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { FiHome, FiCode, FiBookOpen, FiUser } from "react-icons/fi";

export default function Navbar({ onProfileClick, onPracticeClick }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleHomeClick = () => {
    router.push('/');
  };

  const isActive = (path) => pathname === path;

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-700/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={handleHomeClick}>
            <FiCode className="text-2xl text-blue-600" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MERN Interview Conductor
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={handleHomeClick}
                className={`flex items-center space-x-1 transition-colors cursor-pointer ${
                  isActive('/') 
                    ? 'text-blue-500 font-medium' 
                    : 'text-gray-300 hover:text-blue-600'
                }`}
                aria-label="Navigate to home page"
                aria-current={isActive('/') ? 'page' : undefined}
              >
                <FiHome size={16} />
                <span>Home</span>
              </button>
              <button 
                onClick={onPracticeClick}
                className={`flex items-center space-x-1 transition-colors cursor-pointer ${
                  'text-gray-300 hover:text-blue-600'
                }`}
                aria-label="Open practice modal"
              >
                <FiBookOpen size={16} />
                <span>Practice</span>
              </button>
              {/* <button 
                onClick={onProfileClick}
                className="flex items-center space-x-1 text-gray-300 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <FiUser size={16} />
                <span>Profile</span>
              </button> */}
            </nav>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}