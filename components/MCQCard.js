// components/MCQCard.js
import { motion } from "framer-motion";

export default function MCQCard({ question, options, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">{question}</h3>
      <div className="space-y-3">
        {Object.entries(options).map(([key, value]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(key)}
            className="w-full p-3 text-left rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {value}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}