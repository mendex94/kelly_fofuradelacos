import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function RatingStars() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }

  return (
    <div className='flex'>
      <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
    </div>
  )
}