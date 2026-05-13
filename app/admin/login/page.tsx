"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Lock, User, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pearl flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-charcoal">Admin Portal</h1>
            <p className="text-charcoal/50 text-sm mt-2">Access restricted to authorized personnel</p>
          </div>
          
          <GlassCard className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gold flex items-center gap-2">
                  <User className="w-3 h-3" /> Username
                </label>
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gold flex items-center gap-2">
                  <Lock className="w-3 h-3" /> Password
                </label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/50 border border-gold/10 rounded-xl px-4 py-3 outline-none focus:border-gold/40 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-xs font-bold text-center bg-red-50 py-2 rounded-lg border border-red-100">
                  {error}
                </p>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gold text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-glow transition-all disabled:opacity-50"
              >
                {isLoading ? "Authenticating..." : (
                  <>
                    Sign In <LogIn className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}
