// components/ProfileModal.js
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiBook, FiCode, FiDatabase, FiServer } from "react-icons/fi";

export default function ProfileModal({ isOpen, onClose }) {
  const resources = [
    {
      category: "MongoDB",
      icon: FiDatabase,
      color: "from-green-500 to-green-600",
      links: [
        { title: "MongoDB Official Documentation", url: "https://docs.mongodb.com/" },
        { title: "MongoDB University", url: "https://university.mongodb.com/" },
        { title: "MongoDB Tutorial", url: "https://www.mongodb.com/basics" }
      ]
    },
    {
      category: "Express.js",
      icon: FiServer,
      color: "from-gray-500 to-gray-600",
      links: [
        { title: "Express.js Official Guide", url: "https://expressjs.com/" },
        { title: "Express.js API Reference", url: "https://expressjs.com/en/4x/api.html" },
        { title: "Express.js Best Practices", url: "https://expressjs.com/en/advanced/best-practice-security.html" }
      ]
    },
    {
      category: "React.js",
      icon: FiCode,
      color: "from-blue-500 to-blue-600",
      links: [
        { title: "React Official Documentation", url: "https://react.dev/" },
        { title: "React Tutorial", url: "https://react.dev/learn" },
        { title: "React Hooks Reference", url: "https://react.dev/reference/react" }
      ]
    },
    {
      category: "Node.js",
      icon: FiBook,
      color: "from-green-600 to-green-700",
      links: [
        { title: "Node.js Official Documentation", url: "https://nodejs.org/en/docs/" },
        { title: "Node.js Guides", url: "https://nodejs.org/en/docs/guides/" },
        { title: "NPM Documentation", url: "https://docs.npmjs.com/" }
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 rounded-xl p-6 m-4 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Learning Resources</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-700 cursor-pointer"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-700 rounded-lg p-4"
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${resource.color} text-white mr-3`}>
                      <resource.icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{resource.category}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {resource.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded hover:bg-gray-600 transition-colors group cursor-pointer"
                      >
                        <span className="text-sm">{link.title}</span>
                        <FiExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
