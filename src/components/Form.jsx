import React from 'react'

const Form = ({children, handler}) => {
  return (
    <form onSubmit={handler} className="formChapter">
      {
        children
      }
      <input type="submit" value="Send" className='enviar' />
    </form>
  )
}

export default Form