import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, User, Home, Mail, Menu as MenuIcon, X } from 'lucide-react';
import logo from '../assets/shield-icon.svg';

interface HeaderProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      navigate('/');
    } else {
      navigate('/auth');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md px-4 py-2">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="CitizenShield Logo" 
            className="h-8 w-8 mr-2" 
            style={{ filter: 'invert(31%) sepia(98%) saturate(1640%) hue-rotate(201deg) brightness(96%) contrast(101%)' }}
          />
          <span className="text-xl sm:text-2xl font-bold text-blue-600">CitizenShield</span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            <Home size={18} className="mr-1" />
            <span>Home</span>
          </Link>
          <Link to="/contact" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            <Mail size={18} className="mr-1" />
            <span>Contact Us</span>
          </Link>
          <button 
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
            onClick={handleAuthClick}
          >
            <User size={18} className="mr-2" />
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600">
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
            Contact Us
          </Link>
          <button 
            className="w-full text-left px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 mt-2"
            onClick={handleAuthClick}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;