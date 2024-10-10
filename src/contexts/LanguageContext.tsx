import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'de'

interface Translations {
  [key: string]: string
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Translations
}

const translations: Record<Language, Translations> = {
  en: {
    home: 'Home',
    products: 'Products',
    services: 'Services',
    contact: 'Contact',
    footerDescription: 'Custom kitchen solutions for your dream home.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    adminPanel: 'Admin Panel',
    login: 'Login',
    logout: 'Logout',
    createAccount: 'Create an account',
    username: 'Username',
    email: 'Email address',
    password: 'Password',
    confirmPassword: 'Confirm password',
    signUp: 'Sign up',
    // Add more translations as needed
  },
  de: {
    home: 'Startseite',
    products: 'Produkte',
    services: 'Dienstleistungen',
    contact: 'Kontakt',
    footerDescription: 'Individuelle Küchenlösungen für Ihr Traumhaus.',
    quickLinks: 'Schnelllinks',
    followUs: 'Folgen Sie uns',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    adminPanel: 'Admin-Bereich',
    login: 'Anmelden',
    logout: 'Abmelden',
    createAccount: 'Konto erstellen',
    username: 'Benutzername',
    email: 'E-Mail-Adresse',
    password: 'Passwort',
    confirmPassword: 'Passwort bestätigen',
    signUp: 'Registrieren',
    // Add more translations as needed
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de')

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}