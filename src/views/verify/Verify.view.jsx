import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link as Anchor } from 'react-router-dom'
import updateData from '../../services/updateData'
import './verify.css'

const Verify = () => {
  const { token } = useSelector(store => store.auth)
  const { code } = useParams()
  useEffect(() => {
    console.log( code )
    updateData(`auth/verify/${code}`, {}, token)
  },[])
  return (
    <div className='verify'>
      <div className='verify-content'>
        <div>
          <h1 className='verify-message'>CONGRATULATIONS!! YOU USER WAS VERIFIED :D</h1>
          <Anchor className='verify-redirect' to='/'>Go to home {"->"}</Anchor>
        </div>
      </div>
    </div>
  )
}

export default Verify