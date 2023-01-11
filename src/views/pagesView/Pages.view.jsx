import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './pages.css'

const Pages = () => {
  const [data, setData] = useState({})
  const getData = async (url) => {
    try {
      const response = await axios.get(url)
      setData(response.data.response)
    } catch (error) {
      console.log()
    }
  }
  useEffect(() => {
    getData('http://localhost:8080/api/chapters/63bd77a24dc6ee27758ac91d')
    document.title = `Minga - ${data.title}`
  },[])
  return (
    <div className='page-container'>
      <div className='page-title'>
        <h2>Titulo</h2>
      </div>
      <div className='page'>
        <img className='page-img' src={data.pages[0]} alt="pagina" />
      </div>
    </div>
  )
}

export default Pages