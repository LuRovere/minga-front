import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CarouselItem from '../CarouselItem'
import './carouselHome.css'

const CarouselHome = () => {
  const [current, setCurrent] = useState(0)
  const { comics } = useSelector(store => store.carousel)
  const prev = () => {
    if(current > 0) {
      return setCurrent(current - 1)
    }
    return setCurrent(comics.length - 1)
  }
  const next = () => {
    if(current < (comics.length - 1)) {
      return setCurrent(current + 1)
    }
    return setCurrent(0)
  }
  return (
    <div className='carousel-container'>
      {
        comics.map((comic, index) => {
          return (
            <div key={comic._id}>
              { current === index && (
                  <CarouselItem photo={comic.photo} title={comic.title} description={comic.description} prev={prev} next={next} />
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default CarouselHome