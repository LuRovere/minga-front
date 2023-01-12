import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageSlides } from '../../components'
import './pages.css'

const Pages = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  const getData = async (url) => {
    try {
      const response = await axios.get(url)
      setData(response?.data?.response)
      console.log(response.data.response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData(`http://localhost:8080/api/chapters/${id}`)
    document.title = `Minga - ${data?.title}`
    
  },[])
  return (
    <div className='page-container'>
      <div className='page-title'>
        <h2>{data?.order} - {data?.title}</h2>
      </div>
      <PageSlides data={data}/>
    </div>
  )
}

export default Pages