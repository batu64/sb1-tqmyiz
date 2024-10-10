import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const brands = [
  { name: 'Brand 1', logo: 'https://via.placeholder.com/150x50?text=Brand+1' },
  { name: 'Brand 2', logo: 'https://via.placeholder.com/150x50?text=Brand+2' },
  { name: 'Brand 3', logo: 'https://via.placeholder.com/150x50?text=Brand+3' },
  { name: 'Brand 4', logo: 'https://via.placeholder.com/150x50?text=Brand+4' },
  { name: 'Brand 5', logo: 'https://via.placeholder.com/150x50?text=Brand+5' },
]

const BrandSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Trusted Brands</h2>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="px-4">
              <img src={brand.logo} alt={brand.name} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BrandSlider