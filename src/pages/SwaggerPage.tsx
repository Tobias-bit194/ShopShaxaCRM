import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const SwaggerPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSwaggerComplete = (system: any) => {
   
    const token = localStorage.getItem('token');
    
    if (token && system) {
      try {
        system.authActions.authorize({
          bearer: { 
            name: 'Authorization',
            schema: {
              type: 'apiKey',
              in: 'header',
              name: 'Authorization',
              description: 'JWT Authorization header using the Bearer scheme.',
            },
            value: `Bearer ${token}`,
          },
        });
      } catch (e) {
        console.error('Не удалось автоматически прокинуть токен в Swagger', e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin')} // Исправил на /admin, раз мы используем этот путь
            className="flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад в Админку</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight">API Swagger Documentation</h1>
        </div>
        <div className="text-xs text-gray-400">
          Backend: <span className="text-[#00A86B]">oline-shop-backend.onrender.com</span>
        </div>
      </div>

      <div className="flex-1 w-full bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-4">
          <SwaggerUI 
            url="https://oline-shop-backend.onrender.com/api/docs-json" 
            onComplete={handleSwaggerComplete}
          />
        </div>
      </div>
    </div>
  );
};