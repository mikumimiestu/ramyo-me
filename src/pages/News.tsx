import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { newsList } from '../data/newsData';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Releases', 'Industry', 'Events', 'Reviews'];
  const filteredNews = selectedCategory === 'All' 
    ? newsList 
    : newsList.filter(news => news.category === selectedCategory);
  
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="text-3xl font-bold mb-2">Anime News</h1>
        <p className="text-slate-400 mb-8">Stay updated with the latest anime news and announcements.</p>
        
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured News */}
        <div className="mb-12">
          <motion.div 
            className="relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${filteredNews[0].coverImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 max-w-3xl">
              <span className="inline-block text-xs font-semibold bg-purple-600 text-white px-2 py-1 rounded mb-3">
                {filteredNews[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{filteredNews[0].title}</h2>
              <p className="text-slate-300 mb-4 line-clamp-2">
                {filteredNews[0].excerpt}
              </p>
              <div className="flex items-center text-slate-400 text-sm mb-4">
                <Clock size={14} className="mr-1" />
                <span>{filteredNews[0].date}</span>
                <span className="mx-2">•</span>
                <span>{filteredNews[0].author}</span>
              </div>
              <motion.a 
                href="#"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredNews.slice(1).map((news, index) => (
            <motion.div
              key={news.id}
              className="bg-slate-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <img 
                  src={news.coverImage} 
                  alt={news.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 text-xs font-semibold bg-purple-600 text-white px-2 py-1 rounded">
                  {news.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 line-clamp-2">{news.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-500 text-xs">
                    <Clock size={12} className="mr-1" />
                    <span>{news.date}</span>
                  </div>
                  <a href="#" className="text-purple-400 hover:text-purple-300 text-sm flex items-center transition-colors">
                    Read <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl p-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-purple-200 mb-6">
              Get the latest anime news, updates, and recommendations delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <motion.button 
                className="bg-white text-purple-900 hover:bg-purple-100 px-6 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-purple-300 text-xs mt-4">
              By subscribing, you agree to receive marketing emails from RamyoMe. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;