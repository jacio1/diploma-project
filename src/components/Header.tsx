'use client'

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
          <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="text-xl font-bold">Лого</div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
            <div
        className={`
          md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="w-64 h-full bg-white shadow-xl">
          {/* Контент меню */}
          <nav className="p-6 pt-20">
            <ul className="space-y-4">
              <li><a href="#" className="block py-2 hover:text-blue-600">Главная</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">О нас</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Услуги</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Контакты</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Затемнение фона */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 opacity-50 bg-black"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

       {/* Десктопный сайдбар (виден только на десктопе) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-30">
        <div className="p-6 w-full">
          <div className="text-2xl font-bold mb-8">Логотип</div>
          <nav>
            <ul className="space-y-4">
              <li><a href="#" className="block py-2 hover:text-blue-600">Главная</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">О нас</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Услуги</a></li>
              <li><a href="#" className="block py-2 hover:text-blue-600">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
