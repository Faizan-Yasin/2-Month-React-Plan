import React from 'react'
import { Star } from 'lucide-react'

const RatingStar = ({ rating }) => {

  const totalStar = 5

  return (
    <div className='flex items-center gap-1'>
      {
        [...Array(totalStar)].map((_, index) => (
          <Star key={index} fill={index < Math.round(rating) ? "#FFD700" : "none"} color="#FFD700" size={18} />
        ))
      }
      <span className='ml-2 text-sm'>{rating}</span>
    </div>
  )
}

export default RatingStar
