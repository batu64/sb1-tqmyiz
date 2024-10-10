import React, { useState } from 'react'
import { Leaf } from 'lucide-react'

const EnvironmentCircle: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-48 h-48 rounded-full bg-green-500 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out"
      style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Leaf size={64} color="white" />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
          <p className="text-white text-center px-4">
            We are committed to sustainable practices in kitchen design and manufacturing.
          </p>
        </div>
      )}
    </div>
  )
}

export default EnvironmentCircle