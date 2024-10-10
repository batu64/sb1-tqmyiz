import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Globe, User, UserPlus } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useAuth } from '../contexts/AuthContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, translations } = useLanguage()
  const { isAuthenticated, logout } = useAuth()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Civekuechen
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">{translations.home}</Link>
          <Link to="/produkte" className="text-gray-600 hover:text-gray-800">{translations.products}</Link>
          <Link to="/dienstleistungen" className="text-gray-600 hover:text-gray-800">{translations.services}</Link>
          <Link to="/kontakt" className="text-gray-600 hover:text-gray-800">{translations.contact}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            className="text-gray-600 hover:text-gray-800"
          >
            <Globe size={24} />
          </button>
          {isAuthenticated ? (
            <button onClick={logout} className="text-gray-600 hover:text-gray-800">
              <User size={24} />
            </button>
          ) : (
            <>
              <Link to="/signup" className="text-gray-600 hover:text-gray-800">
                <UserPlus size={24} />
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-gray-800">
                <User size={24} />
              </Link>
            </>
          )}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-100">{translations.home}</Link>
          <Link to="/produkte" className="block py-2 px-4 text-sm hover:bg-gray-100">{translations.products}</Link>
          <Link to="/dienstleistungen" className="block py-2 px-4 text-sm hover:bg-gray-100">{translations.services}</Link>
          <Link to="/kontakt" className="block py-2 px-4 text-sm hover:bg-gray-100">{translations.contact}</Link>
          {!isAuthenticated && (
            <>
              <Link to="/signup" className="block py-2 px-4 text-sm hover:bg-gray-100">{translations.signup}</Link>
              <Link to="/login" className="block py-2 px-4 text-sm hover:bg-gray-100">{translations.login}</Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}

export default Header