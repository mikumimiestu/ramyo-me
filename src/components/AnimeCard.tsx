import React from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Star } from 'lucide-react';
import { AnimeType } from '../types/types';

interface AnimeCardProps {
  anime: AnimeType;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <motion.div 
      className="anime-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative pb-[140%]">
        <img 
          src={anime.coverImage} 
          alt={anime.title} 
          className="absolute inset-0 h-full w-full object-cover rounded-lg"
          loading="lazy"
        />
        
        {anime.isNew && (
          <span className="absolute top-2 left-2 bg-accent-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        
        {anime.rating && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
            <Star size={12} className="text-yellow-400 mr-1" fill="#facc15" />
            {anime.rating}
          </div>
        )}
        
        <div className="anime-card-overlay">
          <h3 className="text-sm md:text-base font-medium mb-1">{anime.title}</h3>
          <p className="text-xs text-slate-300 mb-2">{anime.year} • {anime.type}</p>
          
          <div className="flex space-x-2">
            <motion.button 
              className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play size={14} />
            </motion.button>
            <motion.button 
              className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Plus size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimeCard;