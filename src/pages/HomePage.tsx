import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Leaf, Wrench, Star, Camera } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import ConnectingDots from '../components/ConnectingDots'
import EnvironmentCircle from '../components/EnvironmentCircle'
import BrandSlider from '../components/BrandSlider'
import HeroSection from '../components/HeroSection'

const HomePage: React.FC = () => {
  const { translations } = useLanguage()

  return (
    <div className="bg-white">
      <ConnectingDots />
      <HeroSection />

      {/* Kitchen Styles Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Kitchen Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Modern Kitchen" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern</h3>
              <p className="text-gray-600 mb-4">Sleek lines, minimalist design, and cutting-edge appliances define our modern kitchens.</p>
              <Link to="/produkte" className="text-blue-600 hover:text-blue-800">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Traditional Kitchen" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Traditional</h3>
              <p className="text-gray-600 mb-4">Timeless elegance and classic details create warm, inviting traditional kitchens.</p>
              <Link to="/produkte" className="text-blue-600 hover:text-blue-800">Learn More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Rustic Kitchen" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rustic</h3>
              <p className="text-gray-600 mb-4">Natural materials and a cozy atmosphere bring charm to our rustic kitchen designs.</p>
              <Link to="/produkte" className="text-blue-600 hover:text-blue-800">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 mr-8 mb-8">
          <EnvironmentCircle />
        </div>
      </section>

      <BrandSlider />

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Kitchen Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Kitchen 1" className="w-full h-40 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Kitchen 2" className="w-full h-40 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Kitchen 3" className="w-full h-40 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Kitchen 4" className="w-full h-40 object-cover rounded-md" />
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              View Full Gallery <Camera className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ... (remaining sections stay the same) ... */}
    </div>
  )
}

export default HomePage