import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const images = [
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
]

const HeroSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <div className="relative h-screen">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={image}
              alt={`Kitchen ${index + 1}`}
              className="w-full h-full object-cover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <p className="text-white text-3xl font-bold">Discover Your Dream Kitchen</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Custom Kitchen Solutions</h1>
          <p className="text-xl mb-8">Transform your space with our expert designs</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection