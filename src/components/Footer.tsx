import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 inline-block mb-4">
              RamyoMe
            </Link>
            <p className="text-slate-400 mb-4">
              Your ultimate destination for premium anime content. Watch, discover, and connect with anime lovers worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/trending" className="text-slate-400 hover:text-white transition-colors">Trending</Link></li>
              <li><Link to="/news" className="text-slate-400 hover:text-white transition-colors">News</Link></li>
              <li><Link to="/premium" className="text-slate-400 hover:text-white transition-colors">Premium</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-slate-400 hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/queue" className="text-slate-400 hover:text-white transition-colors">My Queue</Link></li>
              <li><Link to="/history" className="text-slate-400 hover:text-white transition-colors">Watch History</Link></li>
              <li><Link to="/premium" className="text-slate-400 hover:text-white transition-colors">Subscribe</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} RamyoMe. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This is a demo website created for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;