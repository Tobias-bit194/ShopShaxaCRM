import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Lock, Mail, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('Admin123!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

 const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
   
      const response = await fetch('https://oline-shop-backend.onrender.com/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          login: email, 
          password 
        }),
      });

      if (!response.ok) {
        throw new Error('Неверный email или пароль');
      }

      const data = await response.json();
      localStorage.setItem('token', data.access_token || data.token);
      
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Ошибка авторизации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white">
     
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-24">

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#00A86B] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#00A86B]/20">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            DEAL<span className="text-[#00A86B]">P0RT</span>
          </span>
        </div>

   
        <div className="w-full max-w-md mx-auto my-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">С возвращением!</h1>
            <p className="text-sm text-gray-500 mt-2">Введите учетные данные администратора для доступа к панели</p>
          </div>

          {error && (
            <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-5 h-5" />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#00A86B] focus:bg-white transition-all"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Пароль</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-5 h-5" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#00A86B] focus:bg-white transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#00A86B] hover:bg-[#00925c] text-white font-medium rounded-xl transition-all shadow-lg shadow-[#00A86B]/20 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Войти в систему</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-xs text-gray-400 text-center lg:text-left">
          © 2026 Dealport Admin Panel. All rights reserved.
        </p>
      </div>


      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 items-center justify-center overflow-hidden">
      
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop')` }}
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-900/80 to-[#00A86B]/30" />
        
        <div className="relative z-10 max-w-md p-8 text-white">
          <div className="w-12 h-12 bg-[#00A86B]/20 border border-[#00A86B]/40 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
            <LayoutDashboard className="w-6 h-6 text-[#00A86B]" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-3">Управляйте магазином эффективно</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Полный контроль над заказами, клиентами, аналитикой и товарной базой в едином интуитивном интерфейсе.
          </p>
        </div>
      </div>
    </div>
  );
};