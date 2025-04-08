import { motion } from 'framer-motion';

export default function MCQCard({ question, options, onSelect, selected }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20">
      <h2 className="text-xl text-white mb-6">{question}</h2>
      <div className="space-y-3">
        {[
          { key: 'a', value: options.option_a },
          { key: 'b', value: options.option_b },
          { key: 'c', value: options.option_c },
          { key: 'd', value: options.option_d },
        ].map(({ key, value }) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(key)}
            className={`w-full p-4 rounded-lg text-left transition-all ${
              selected === key
                ? 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white'
                : 'bg-white/5 hover:bg-white/10 text-gray-200'
            }`}
          >
            <span className="inline-block w-6 h-6 rounded-full bg-white/10 text-center mr-3">
              {key.toUpperCase()}
            </span>
            {value}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
