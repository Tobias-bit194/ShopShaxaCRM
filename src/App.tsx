import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import { Login } from './pages/Login';
import { SwaggerPage } from './pages/SwaggerPage';
import { DashboardPage } from './processes/pages/dashboard/ui/DashboardPage';
import { OrdersPage } from './processes/pages/ordermanagement/ui/OrdersPage';
import { CustomersPage } from './processes/pages/customers/ui/CustomersPage';
import { CategoriesPage } from './processes/pages/categories/ui/CategoriesPage';
import { AddProductPage } from './processes/pages/products/ui/AddProductPage';
import { ProfileUpdate } from './processes/pages/admin/ui/ProfileUpdate';


const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const token = localStorage.getItem('crmAccessToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

     
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<RequireAuth><DashboardPage /></RequireAuth>} />
        <Route path="/orders" element={<RequireAuth><OrdersPage /></RequireAuth>} />
        <Route path="/customers" element={<RequireAuth><CustomersPage /></RequireAuth>} />
        <Route path="/categories" element={<RequireAuth><CategoriesPage /></RequireAuth>} />
        <Route path="/products" element={<RequireAuth><AddProductPage /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><ProfileUpdate /></RequireAuth>} />
        <Route path="/api-docs" element={<RequireAuth><SwaggerPage /></RequireAuth>} />

     
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;