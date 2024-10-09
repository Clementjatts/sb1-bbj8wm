import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import logo from '../assets/shield-icon.svg';

interface AuthPageProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthPage: React.FC<AuthPageProps> = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
    setIsAuthenticated(true);
    navigate('/admin');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-10 rounded-lg shadow-xl">
        <div className="text-center">
          <img src={logo} alt="CitizenShield Logo" className="h-16 w-16 mx-auto mb-4" style={{ filter: 'invert(31%) sepia(98%) saturate(1640%) hue-rotate(201deg) brightness(96%) contrast(101%)' }} />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{isLogin ? 'Welcome Back!' : 'Join CitizenShield'}</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            {isLogin ? 'Log in to continue to CitizenShield.' : 'Sign up to stay safe and connected in times of emergency.'}
          </p>
        </div>

        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 text-sm sm:text-base ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 text-sm sm:text-base ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail size={18} className="text-gray-500" />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Email Address"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <User size={18} className="text-gray-500" />
              </span>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Username"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock size={18} className="text-gray-500" />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Password"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock size={18} className="text-gray-500" />
                </span>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-base"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;