import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Trash2, Plus, AlertCircle } from 'lucide-react';
import { featuredAnime, trendingAnime } from '../data/animeData';

const Queue = () => {
  const [queuedAnime, setQueuedAnime] = useState([...featuredAnime.slice(0, 2), ...trendingAnime.slice(0, 3)]);
  
  const removeFromQueue = (id: number) => {
    setQueuedAnime(queuedAnime.filter(anime => anime.id !== id));
  };
  
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="text-3xl font-bold mb-2">My Queue</h1>
        <p className="text-slate-400 mb-8">Keep track of anime you want to watch next.</p>
        
        {queuedAnime.length > 0 ? (
          <div className="space-y-4">
            {queuedAnime.map((anime) => (
              <motion.div
                key={anime.id}
                className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-750 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-36 sm:h-auto relative">
                    <img 
                      src={anime.coverImage} 
                      alt={anime.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent sm:bg-gradient-to-r"></div>
                    <div className="absolute bottom-2 left-2 sm:hidden">
                      <h3 className="text-lg font-medium">{anime.title}</h3>
                      <p className="text-xs text-slate-300">{anime.year} • {anime.type}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 flex-1">
                    <div className="hidden sm:block">
                      <h3 className="text-lg font-medium mb-1">{anime.title}</h3>
                      <p className="text-sm text-slate-300 mb-2">{anime.year} • {anime.type}</p>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-4 hidden sm:block">
                      Watch the latest episodes of {anime.title}, a popular {anime.type.toLowerCase()} anime series released in {anime.year}.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <motion.button 
                        className="btn-primary text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="mr-2" size={16} /> Watch Now
                      </motion.button>
                      
                      <motion.button 
                        onClick={() => removeFromQueue(anime.id)}
                        className="btn-secondary text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Trash2 className="mr-2" size={16} /> Remove
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-800/50 rounded-lg">
            <div className="flex justify-center mb-4">
              <AlertCircle size={48} className="text-slate-500" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your queue is empty</h2>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Add anime to your queue to keep track of what you want to watch next.
            </p>
            <motion.a 
              href="/"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="mr-2" size={18} /> Browse Anime
            </motion.a>
          </div>
        )}
        
        {queuedAnime.length > 0 && (
          <div className="mt-12 bg-purple-900/30 border border-purple-800/50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Queue Settings</h3>
            <p className="text-slate-400 mb-4">Customize how your queue works.</p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <input type="checkbox" id="autoplay" className="h-4 w-4 rounded bg-slate-700 border-slate-500 text-purple-600 focus:ring-purple-500" />
                <label htmlFor="autoplay" className="ml-2 text-white">
                  Autoplay next in queue
                </label>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" id="notifications" className="h-4 w-4 rounded bg-slate-700 border-slate-500 text-purple-600 focus:ring-purple-500" />
                <label htmlFor="notifications" className="ml-2 text-white">
                  Get notified for new episodes
                </label>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" id="remove-watched" className="h-4 w-4 rounded bg-slate-700 border-slate-500 text-purple-600 focus:ring-purple-500" checked />
                <label htmlFor="remove-watched" className="ml-2 text-white">
                  Remove from queue after watching
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Queue;