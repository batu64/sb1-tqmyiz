import React from 'react'
import { PencilRuler, Truck, Wrench, Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const ServicesPage: React.FC = () => {
  const { translations } = useLanguage()

  const services = [
    {
      icon: <PencilRuler size={48} className="text-blue-500" />,
      title: 'Custom Kitchen Design',
      description: 'Our expert designers work with you to create the perfect kitchen layout tailored to your needs and style preferences.'
    },
    {
      icon: <Truck size={48} className="text-green-500" />,
      title: 'Professional Installation',
      description: 'Our skilled team ensures your new kitchen is installed with precision and care, minimizing disruption to your home.'
    },
    {
      icon: <Wrench size={48} className="text-yellow-500" />,
      title: 'Renovation Services',
      description: 'Transform your existing kitchen with our comprehensive renovation services, from minor updates to complete overhauls.'
    },
    {
      icon: <Users size={48} className="text-purple-500" />,
      title: 'Consultation & Planning',
      description: 'Get expert advice on materials, appliances, and layout options to make informed decisions about your kitchen project.'
    }
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                {service.icon}
                <h2 className="text-2xl font-semibold ml-4">{service.title}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">Our team of professionals brings years of experience and knowledge to every project.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">We use only the finest materials and craftsmanship to ensure lasting beauty and durability.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Your happiness is our priority. We work closely with you throughout the entire process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage