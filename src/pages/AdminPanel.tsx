import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useLanguage } from '../contexts/LanguageContext'
import UserManagement from '../components/admin/UserManagement'
import ContentManagement from '../components/admin/ContentManagement'
import Analytics from '../components/admin/Analytics'

const AdminPanel: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth()
  const { translations } = useLanguage()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('users')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await login(username, password)
    if (!success) {
      setError('Invalid credentials')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{translations.adminPanel}</h1>
        <form onSubmit={handleLogin} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            {translations.login}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{translations.adminPanel}</h1>
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab('users')}
          className={`mr-2 px-4 py-2 rounded-md ${activeTab === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          User Management
        </button>
        <button
          onClick={() => setActiveTab('content')}
          className={`mr-2 px-4 py-2 rounded-md ${activeTab === 'content' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Content Management
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`mr-2 px-4 py-2 rounded-md ${activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Analytics
        </button>
      </div>
      {activeTab === 'users' && <UserManagement />}
      {activeTab === 'content' && <ContentManagement />}
      {activeTab === 'analytics' && <Analytics />}
      <button
        onClick={logout}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        {translations.logout}
      </button>
    </div>
  )
}

export default AdminPanel