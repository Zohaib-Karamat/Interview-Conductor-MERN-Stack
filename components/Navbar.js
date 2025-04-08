// components/Navbar.js
import { motion } from "framer-motion";
import { FiHome, FiUser, FiSettings, FiBell } from "react-icons/fi";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-full p-2 shadow-lg border border-gray-200/20"
    >
      <div className="flex gap-4 px-4">
        {[FiHome, FiUser, FiSettings, FiBell].map((Icon, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 dark:from-gray-700 dark:to-gray-800 dark:text-white"
          >
            <Icon size={20} />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}