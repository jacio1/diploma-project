import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { createClient } from '../lib/supabase/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Мое приложение',
  description: 'Простое приложение с аутентификацией',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="ru">
      <body className={inter.className}>
        {/* Простая навигация */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Мое приложение</Link>
            <div className="space-x-4">
              {user ? (
                <>
                  <a href="/dashboard" className="hover:text-gray-300">Панель</a>
                  <a href="/profile" className="hover:text-gray-300">Профиль</a>
                  <form action="/auth/signout" method="post" className="inline">
                    <button type="submit" className="hover:text-gray-300">Выйти</button>
                  </form>
                </>
              ) : (
                <>
                  <a href="/login" className="hover:text-gray-300">Войти</a>
                  <a href="/signup" className="hover:text-gray-300">Регистрация</a>
                </>
              )}
            </div>
          </div>
        </nav>
        <main className="container mx-auto mt-4">
          {children}
        </main>
      </body>
    </html>
  )
}