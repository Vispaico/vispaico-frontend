'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin_niels/login');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f0f2f5' }}>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem 2rem', 
        background: 'white', 
        borderBottom: '1px solid #e0e0e0' 
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Vispaico Admin</h1>
        <button 
          onClick={handleLogout} 
          style={{ 
            padding: '0.5rem 1rem', 
            background: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Logout
        </button>
      </header>
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
