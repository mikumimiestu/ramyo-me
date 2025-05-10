import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-9xl font-bold text-purple-600 mb-6">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-slate-400 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="btn-primary w-full flex items-center justify-center">
                <Home className="mr-2" size={18} /> Return Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="btn-secondary w-full flex items-center justify-center">
                <Search className="mr-2" size={18} /> Search Anime
              </Link>
            </motion.div>
          </div>
          
          <div className="mt-12">
            <Link
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 inline-block mb-4"
            >
              RamyoMe
            </Link>
            <p className="text-slate-500 text-sm">Your Ultimate Anime Destination</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;