import { motion } from 'framer-motion';
import { Play, Plus, Info, ChevronRight } from 'lucide-react';
import AnimeCard from '../components/AnimeCard';
import { featuredAnime, trendingAnime, newReleases, popularAnime } from '../data/animeData';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://cdn.antaranews.com/cache/1200x800/2024/02/19/Screenshot-193-1.jpg')",
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <div className="container relative h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Demon Slayer</h1>
            <p className="text-xl md:text-2xl font-light text-slate-300 mb-3">Season 4 - Final</p>
            <p className="text-gray-300 mb-8 text-sm md:text-base">
              Tanjiro and his comrades embark on a new mission to defeat Muzan Kibutsuji once and for all. 
              The demons prepare for a final clash as the Hashira gather for an ultimate battle.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2" size={18} /> Watch Now
              </motion.button>
              
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="mr-2" size={18} /> Add to Queue
              </motion.button>
              
              <motion.button 
                className="text-white hover:text-purple-300 transition-colors flex items-center"
                whileHover={{ x: 5 }}
              >
                <Info className="mr-2" size={18} /> More Info
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="container py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">Trending Now</h2>
          <a href="/trending" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
            View All <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {trendingAnime.slice(0, 5).map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      {/* Continue Watching Section */}
      <section className="container py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">Continue Watching</h2>
          <a href="/history" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
            View All <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredAnime.slice(0, 4).map((anime) => (
            <div key={anime.id} className="relative overflow-hidden rounded-lg bg-slate-800">
              <div className="relative pb-[56.25%]">
                <img 
                  src={anime.coverImage} 
                  alt={anime.title} 
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-600">
                  <div className="h-full bg-purple-500" style={{ width: `${anime.progress}%` }}></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-1 truncate">{anime.title}</h3>
                <p className="text-sm text-slate-400 mb-2">S{anime.season} E{anime.episode}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">{anime.progress}% completed</span>
                  <motion.button 
                    className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Releases Section */}
      <section className="container py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">New Releases</h2>
          <a href="/trending" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
            View All <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {newReleases.slice(0, 5).map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>

      {/* Premium Banner */}
      <section className="container py-12">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900">
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-20">
            <div className="w-full h-full bg-white rotate-12 transform origin-top-left translate-x-1/4 -translate-y-1/2"></div>
          </div>
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Unlock Premium Experience
              </motion.h2>
              <motion.p 
                className="text-purple-200 mb-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Watch ad-free, access exclusive anime, and enjoy early releases with RamyoMe Premium.
              </motion.p>
              <motion.a 
                href="/premium" 
                className="btn-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Premium
              </motion.a>
            </div>
            <motion.div 
              className="w-40 h-40 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-purple-500 opacity-20 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-purple-500 opacity-40 rounded-full animate-pulse-slow animation-delay-500"></div>
                <div className="absolute inset-4 bg-purple-400 opacity-60 rounded-full animate-pulse-slow animation-delay-1000"></div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-bold">Premium</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular This Season */}
      <section className="container py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">Popular This Season</h2>
          <a href="/trending" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
            View All <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {popularAnime.slice(0, 5).map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;