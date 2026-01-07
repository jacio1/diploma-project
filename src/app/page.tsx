import Link from 'next/link'
import { createClient } from '../lib/supabase/server'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Добро пожаловать!</h1>
      <p className="text-lg mb-8">
        Простое приложение с аутентификацией через Supabase
      </p>
      
      {user ? (
        <div>
          <p className="mb-4">Вы вошли как {user.email}</p>
          <Link
            href="/chat"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Перейти в панель управления
          </Link>
        </div>
      ) : (
        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Войти
          </Link>
          <Link
            href="/auth/register"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Зарегистрироваться
          </Link>
        </div>
      )}
    </div>
  )
}