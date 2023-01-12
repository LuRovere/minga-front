import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const PagesSlides = () => {
  const [actualImg, setActualImg] = useState(0)
  const { response } = useSelector(store => store.chapter)
  const _handlePrev = () => {
    setActualImg(actualImg - 1)
    if(actualImg < 1) {
      window.location.pathname = '/'
    }
  }
  const _handleNext = () => {
    if(actualImg < response?.pages?.length - 1) {
      setActualImg(actualImg + 1)
    }
  }
  return (
    <div className='page'>
        <div className='buttons-container'>
          <button onClick={_handlePrev} className='page-button'></button>
          <button onClick={_handleNext} className='page-button'></button>
        </div>
        {
          response?.pages?.map((page, index) => {
            return <div key={index}>
              {
                actualImg === index && (
                  <img className='page-img' src={page} alt="pagina" />
                )
              }
            </div>
          })
        }
      </div>
  )
}

export default PagesSlides