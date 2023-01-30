import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CarouselItem from '../CarouselItem'

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
    <div>
      {
        comics.map((comic, index) => {
          return (
            <div key={comic._id}>
              { current === index && (
                  <CarouselItem photo={comic.photo} title={comic.title} description={comic.description} />
                )
              }
            </div>
          )
        })
      }
      <div>
        <button onClick={prev}>{"<-"}</button>
        <button onClick={next}>{"->"}</button>
      </div>
    </div>
  )
}

export default CarouselHome