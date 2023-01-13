import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const PagesSlides = ({prev, next}) => {
  const [actualImg, setActualImg] = useState(0)
  const { response } = useSelector(store => store.chapter)
  const _handlePrev = () => {
    setActualImg(actualImg - 1)
    if(actualImg < 1) {
      prev()
    }
  }
  const _handleNext = () => {
    setActualImg(actualImg + 1)
    if(actualImg > response?.pages?.length - 2) {
      next()
    }
  }
  return (
    <>
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
        <p className='page-number'>{actualImg + 1}</p>
    </>
  )
}

export default PagesSlides