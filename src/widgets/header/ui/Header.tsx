import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, Sun } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();


  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/dashboard':
      case '/':
        return 'Dashboard';
      case '/categories':
        return 'Discover';
      case '/products':
        return 'Add Product';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-gray-900">{getPageTitle(location.pathname)}</h1>
      
      <div className="flex items-center gap-4">
    
        <div className="relative w-96">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search data, users, or reports" 
            className="w-full bg-gray-50 border border-gray-200 rounded-full pl-4 pr-11 py-2.5 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>


        <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 relative">
          <Bell size={18} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

     
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full p-1 w-16 h-10 relative cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-800 transition-all absolute left-1">
            <Sun size={16} />
          </div>
        </div>


        <img 
          src="" 
          alt="User" 
          className="w-10 h-10 rounded-full object-cover border border-gray-200"
        />
      </div>
    </header>
  );
};