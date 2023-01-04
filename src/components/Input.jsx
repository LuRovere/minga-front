import React from 'react'

const Input = ({type, name, placeholder, reference}) => {
  return (
    <input type={type} name={name} id={name} placeholder={placeholder} ref={reference} />
  )
}

export default Input