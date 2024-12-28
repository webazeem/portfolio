import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            MA
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'text-purple-600 dark:text-purple-400' : ''}`}>Home</Link>
            <Link to="/work" className={`nav-link ${isActive('/work') ? 'text-purple-600 dark:text-purple-400' : ''}`}>Work</Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'text-purple-600 dark:text-purple-400' : ''}`}>Services</Link>
            <Link to="/connect" className={`nav-link ${isActive('/connect') ? 'text-purple-600 dark:text-purple-400' : ''}`}>Connect</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`nav-link ${isActive('/') ? 'text-purple-600 dark:text-purple-400' : ''}`}>Home</Link>
              <Link to="/work" className={`nav-link ${isActive('/work') ? 'text-purple-600 dark:text-purple-400' : ''}`}>Work</Link>
              <Link to="/services" className={`nav-link ${isActive('/services') ? 'text-purple-600 dark:text-purple-400' : ''}`}>Services</Link>
              <Link to="/connect" className={`nav-link ${isActive('/connect') ? 'text-purple-600 dark:text-purple-400' : ''}`}>Connect</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}