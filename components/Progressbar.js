// components/ProgressBar.js
import { motion } from "framer-motion";

export default function Progressbar({ progress }) {
  return (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", damping: 10 }}
      />
    </div>
  );
}