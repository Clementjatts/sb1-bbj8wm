import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertCircle, 
  Users, 
  MessageSquare, 
  Book, 
  Mail, 
  Bell, 
  LogOut, 
  Menu, 
  Search, 
  Shield,
  Sun,
  Moon,
  User,
  Settings,
  ChevronDown,
  X
} from 'lucide-react';

const AdminDashboard = ({ setIsAuthenticated }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('alerts');
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const menuItems = [
    { key: 'alerts', icon: AlertCircle, label: 'Alerts' },
    { key: 'users', icon: Users, label: 'Users' },
    { key: 'forum', icon: MessageSquare, label: 'Forum' },
    { key: 'blog', icon: Book, label: 'Blog' },
    { key: 'messages', icon: Mail, label: 'Messages' },
    { key: 'notifications', icon: Bell, label: 'Notifications' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar for desktop */}
      <div className={`hidden md:flex ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 flex-col`}>
        <div className="flex items-center justify-center h-16 bg-blue-600">
          {collapsed ? (
            <Shield className="w-8 h-8 text-white" />
          ) : (
            <span className="text-lg font-bold text-white">CitizenShield</span>
          )}
        </div>
        <nav className="mt-5 flex-grow">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center w-full p-4 ${
                activeTab === item.key ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'
              } hover:bg-blue-400 hover:text-white transition-colors duration-200`}
            >
              <item.icon className="w-5 h-5 mr-4" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button
            onClick={toggleTheme}
            className="flex items-center w-full p-4 text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition-colors duration-200"
          >
            {darkMode ? <Sun className="w-5 h-5 mr-4" /> : <Moon className="w-5 h-5 mr-4" />}
            {!collapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-4 text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition-colors duration-200"
          >
            <LogOut className="w-5 h-5 mr-4" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900">
        {/* Header */}
        <header className="flex justify-between items-center h-16 px-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
          <div className="flex items-center">
            <button 
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-gray-600 dark:text-gray-300" /> : <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
            </button>
            <button 
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hidden md:block"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
            <div className="relative">
              <button 
                className="flex items-center space-x-2 focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                  CA
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md overflow-hidden shadow-xl z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <User className="inline-block w-4 h-4 mr-2" />
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Settings className="inline-block w-4 h-4 mr-2" />
                    Settings
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-b dark:border-gray-700">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setActiveTab(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                    activeTab === item.key ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white'
                  } transition-colors duration-200`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition-colors duration-200"
              >
                {darkMode ? <Sun className="w-5 h-5 mr-3" /> : <Moon className="w-5 h-5 mr-3" />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition-colors duration-200"
              >
                <LogOut className="w-5 h-5 mr-3" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        )}

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {menuItems.find(item => item.key === activeTab)?.label}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Content for {menuItems.find(item => item.key === activeTab)?.label} goes here.
          </p>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;