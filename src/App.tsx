import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Queue from './pages/Queue';
import News from './pages/News';
import Premium from './pages/Premium';
import Login from './pages/Login';
import History from './pages/History';
import Trending from './pages/Trending';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="queue" element={<Queue />} />
            <Route path="news" element={<News />} />
            <Route path="premium" element={<Premium />} />
            <Route path="history" element={<History />} />
            <Route path="trending" element={<Trending />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;