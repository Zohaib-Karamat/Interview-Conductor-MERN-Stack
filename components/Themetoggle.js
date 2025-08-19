// components/ThemeToggle.js
"use client";
import { FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  // Theme is now always dark, this component is no longer functional
  // but kept for compatibility if imported elsewhere
  
  return (
    <div
      className="p-3 rounded-full bg-gray-800/20 backdrop-blur-lg border border-gray-700/20 transition-all duration-200"
    >
      <FiMoon size={20} className="text-gray-400" />
    </div>
  );
}