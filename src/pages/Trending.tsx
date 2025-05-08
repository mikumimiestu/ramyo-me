import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { trendingAnime, popularAnime, newReleases } from '../data/animeData';
import AnimeCard from '../components/AnimeCard';
import { Filter, ChevronDown } from 'lucide-react';

const Trending = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  
  const allAnime = [...trendingAnime, ...popularAnime, ...newReleases];
  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Sci-Fi', 'Slice of Life'];
  const years = ['2024', '2023', '2022', '2021', '2020', 'Pre-2020'];
  const types = ['TV', 'Movie', 'OVA'];
  
  const toggleFilter = () => setFilterOpen(!filterOpen);
  
  return (
    <div className="page-container">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Trending Anime</h1>
            <p className="text-slate-400">Discover the most popular anime loved by fans worldwide.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={toggleFilter}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Filter size={18} />
              <span>Filters</span>
              <ChevronDown size={16} className={`transform transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        
        {/* Filters */}
        <motion.div 
          className="mb-8 bg-slate-800 rounded-lg p-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: filterOpen ? 'auto' : 0,
            opacity: filterOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Genre</h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedGenre('All')} 
                  className={`px-3 py-1 text-sm rounded-full ${selectedGenre === 'All' ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'} transition-colors`}
                >
                  All
                </button>
                {genres.map(genre => (
                  <button 
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-3 py-1 text-sm rounded-full ${selectedGenre === genre ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'} transition-colors`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Year</h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedYear('All')} 
                  className={`px-3 py-1 text-sm rounded-full ${selectedYear === 'All' ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'} transition-colors`}
                >
                  All
                </button>
                {years.map(year => (
                  <button 
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 py-1 text-sm rounded-full ${selectedYear === year ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'} transition-colors`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Type</h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedType('All')} 
                  className={`px-3 py-1 text-sm rounded-full ${selectedType === 'All' ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'} transition-colors`}
                >
                  All
                </button>
                {types.map(type => (
                  <button 
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 text-sm rounded-full ${selectedType === type ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'} transition-colors`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Anime Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {allAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors inline-flex items-center space-x-2">
            <span>Load More</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;