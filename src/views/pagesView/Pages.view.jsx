import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './pages.css'

const Pages = () => {
  const [data, setData] = useState({})
  const [actualImg, setActualImg] = useState(0)
  const getData = async (url) => {
    try {
      const response = await axios.get(url)
      setData(response?.data?.response)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const _handlePrev = () => {
    if(actualImg > 0) {
      setActualImg(actualImg - 1)
    }
  }
  const _handleNext = () => {
    if(actualImg < data?.pages?.length - 1) {
      setActualImg(actualImg + 1)
    }
  }
  useEffect(() => {
    getData('http://localhost:8080/api/chapters/63bd77a24dc6ee27758ac91d')
    document.title = `Minga - ${data?.title}`
    
  },[])
  return (
    <div className='page-container'>
      <div className='page-title'>
        <h2>{data?.order} - {data?.title}</h2>
      </div>
      <div className='page'>
        <div className='buttons-container'>
          <button onClick={_handlePrev} className='page-button'></button>
          <button onClick={_handleNext} className='page-button'></button>
        </div>
        {
          data?.pages?.map((page, index) => {
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
    </div>
  )
}

export default Pages