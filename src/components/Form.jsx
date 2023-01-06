import React from 'react'

const Form = ({children, handler}) => {
  return (
    <form onSubmit={handler}>
      {
        children
      }
      <input type="submit" value="Send" />
    </form>
  )
}

export default Form