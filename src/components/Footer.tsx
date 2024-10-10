import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer: React.FC = () => {
  const { translations } = useLanguage()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">KitchenCraft</h3>
            <p className="text-sm">{translations.footerDescription}</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">{translations.quickLinks}</h4>
            <ul className="text-sm">
              <li><a href="/" className="hover:text-gray-300">{translations.home}</a></li>
              <li><a href="/products" className="hover:text-gray-300">{translations.products}</a></li>
              <li><a href="/services" className="hover:text-gray-300">{translations.services}</a></li>
              <li><a href="/contact" className="hover:text-gray-300">{translations.contact}</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">{translations.contact}</h4>
            <p className="text-sm">
              123 Kitchen Street<br />
              Furniture City, FC 12345<br />
              info@kitchencraft.com<br />
              +1 (555) 123-4567
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">{translations.followUs}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><Facebook /></a>
              <a href="#" className="text-white hover:text-gray-300"><Instagram /></a>
              <a href="#" className="text-white hover:text-gray-300"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 KitchenCraft. {translations.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer