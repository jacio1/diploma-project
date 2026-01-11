'use client';

import { useState } from 'react';
import { Header } from './Header';

export function MainContent({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <main className={`
        pt-16 md:pt-0 md:pl-64 min-h-screen transition-all duration-300 bg-gray-50
        ${isSidebarOpen ? 'ml-64 md:ml-0' : 'ml-0'}
      `}>
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </>
  );
}