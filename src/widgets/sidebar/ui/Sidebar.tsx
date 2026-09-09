import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingCart, Users, Tag, FolderTree, 
  ArrowLeftRight, Award, PlusCircle, Image, ListOrdered, 
  Star, Shield, Lock, ExternalLink 
} from 'lucide-react';

export const Sidebar: React.FC = () => {

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${
      isActive 
        ? 'text-white bg-emerald-600' 
        : 'text-gray-600 hover:bg-gray-50'
    }`;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between h-screen sticky top-0 scrollbar-none">
      <div className="p-6 overflow-y-auto scrollbar-none">

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 font-bold text-xl tracking-wider text-gray-900">
            <span className="text-emerald-600 flex items-center">DEALP <ShoppingCart size={18} /> RT</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <ArrowLeftRight size={18} />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Main menu</p>
          <nav className="space-y-1">
            <NavLink to="/dashboard" className={linkClass}>
              <LayoutDashboard size={18} /> Dashboard
            </NavLink>
            <NavLink to="/orders" className={linkClass}>
              <ShoppingCart size={18} /> Order Management
            </NavLink>
            <NavLink to="/customers" className={linkClass}>
              <Users size={18} /> Customers
            </NavLink>
            {/* <NavLink to="/coupon" className={linkClass}>
              <Tag size={18} /> Coupon Code
            </NavLink> */}
            <NavLink to="/categories" className={linkClass}>
              <FolderTree size={18} /> Categories
            </NavLink>
            {/* <NavLink to="/transaction" className={linkClass}>
              <ArrowLeftRight size={18} /> Transaction
            </NavLink>
            <NavLink to="/brand" className={linkClass}>
              <Award size={18} /> Brand
            </NavLink> */}
          </nav>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Product</p>
          <nav className="space-y-1">
            <NavLink to="/products" className={linkClass}>
              <PlusCircle size={18} /> Add Products
            </NavLink>
            {/* <NavLink to="/product-media" className={linkClass}>
              <Image size={18} /> Product Media
            </NavLink>
            <NavLink to="/product-list" className={linkClass}>
              <ListOrdered size={18} /> Product List
            </NavLink>
            <NavLink to="/product-reviews" className={linkClass}>
              <Star size={18} /> Product Reviews
            </NavLink> */}
          </nav>
        </div>

       
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Admin</p>
          <nav className="space-y-1">
            <NavLink to="/profile" className={linkClass}>
              <Shield size={18} /> Admin role
            </NavLink>
            <NavLink to="/control-authority" className={linkClass}>
              <Lock size={18} /> Control Authority
            </NavLink>
          </nav>
        </div>
      </div>


      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img 
              src="" 
              alt="Avatar" 
              className="w-10 h-10 rounded-full object-cover" 
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Dealport</h4>
              <p className="text-xs text-gray-400 truncate w-28">Mark@thedesigner...</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <ExternalLink size= {16} />
          </button>
        </div>
        <NavLink to="/shop" className="flex items-center justify-between text-sm font-medium shadow-2xl text-gray-600 hover:bg-gray-100 p-2.5 rounded-2xl">
           <div>Your Shop</div> <ExternalLink size={14} />
        </NavLink>
      </div>
    </aside>
  );
};