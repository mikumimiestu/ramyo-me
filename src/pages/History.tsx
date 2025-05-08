import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Play, AlertCircle, Calendar, List, Grid } from 'lucide-react';
import { featuredAnime, trendingAnime, popularAnime } from '../data/animeData';

const History = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [historyItems] = useState([
    ...featuredAnime.map(anime => ({
      ...anime,
      watched: '2 hours ago',
      progress: Math.floor(Math.random() * 100)
    })),
    ...trendingAnime.slice(0, 2).map(anime => ({
      ...anime,
      watched: 'Yesterday',
      progress: Math.floor(Math.random() * 100)
    })),
    ...popularAnime.slice(0, 3).map(anime => ({
      ...anime,
      watched: '3 days ago',
      progress: Math.floor(Math.random() * 100)
    }))
  ]);
  
  if (historyItems.length === 0) {
    return (
      <div className="page-container">
        <div className="container">
          <h1 className="text-3xl font-bold mb-2">Watch History</h1>
          <p className="text-slate-400 mb-8">Keep track of anime you've watched recently.</p>
          
          <div className="text-center py-16 bg-slate-800/50 rounded-lg">
            <div className="flex justify-center mb-4">
              <AlertCircle size={48} className="text-slate-500" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your history is empty</h2>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              You haven't watched any anime yet. Start watching to build your history.
            </p>
            <motion.a 
              href="/"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Anime
            </motion.a>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page-container">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Watch History</h1>
            <p className="text-slate-400">Keep track of anime you've watched recently.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <div className="flex space-x-1 bg-slate-800 rounded-lg p-1">
              <button 
                onClick={() => setViewMode('list')} 
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-purple-600' : 'hover:bg-slate-700'} transition-colors`}
              >
                <List size={18} />
              </button>
              <button 
                onClick={() => setViewMode('grid')} 
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-purple-600' : 'hover:bg-slate-700'} transition-colors`}
              >
                <Grid size={18} />
              </button>
            </div>
            
            <select className="bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="recent">Recently Watched</option>
              <option value="completed">Completed</option>
              <option value="progress">In Progress</option>
            </select>
          </div>
        </div>
        
        {viewMode === 'list' ? (
          <div className="space-y-4">
            {historyItems.map((anime) => (
              <motion.div
                key={anime.id}
                className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-750 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-28 sm:h-auto relative">
                    <img 
                      src={anime.coverImage} 
                      alt={anime.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                  </div>
                  
                  <div className="p-4 flex-1">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <div>
                        <h3 className="text-lg font-medium mb-1">{anime.title}</h3>
                        <p className="text-sm text-slate-300 mb-2">
                          {anime.type} • {anime.year} 
                          {anime.season && anime.episode ? ` • S${anime.season} E${anime.episode}` : ''}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-slate-400 text-sm mb-3 sm:mb-0">
                        <Clock size={14} className="mr-1" />
                        <span>{anime.watched}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3 bg-slate-700 h-1.5 rounded-full">
                      <div 
                        className="bg-purple-600 h-full rounded-full"
                        style={{ width: `${anime.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">
                        {anime.progress < 100 
                          ? `${anime.progress}% completed` 
                          : 'Completed'}
                      </span>
                      
                      <motion.button 
                        className="btn-primary text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="mr-2" size={16} /> 
                        {anime.progress < 100 ? 'Continue' : 'Watch Again'}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {historyItems.map((anime) => (
              <motion.div
                key={anime.id}
                className="bg-slate-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative pb-[140%]">
                  <img 
                    src={anime.coverImage} 
                    alt={anime.title} 
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-3">
                    <div className="flex items-center text-xs text-slate-400 mb-1">
                      <Calendar size={12} className="mr-1" />
                      <span>{anime.watched}</span>
                    </div>
                    <h3 className="text-sm font-medium mb-1 truncate">{anime.title}</h3>
                    <div className="mb-2 bg-slate-700 h-1 rounded-full">
                      <div 
                        className="bg-purple-600 h-full rounded-full"
                        style={{ width: `${anime.progress}%` }}
                      ></div>
                    </div>
                    <motion.button 
                      className="w-full py-1.5 bg-purple-600 hover:bg-purple-700 text-xs rounded transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="mr-1" size={12} /> 
                      {anime.progress < 100 ? 'Continue' : 'Watch Again'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;