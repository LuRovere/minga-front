import React, { useRef } from 'react'
import { Form } from '../components'
import postData from '../services/postData'

const NewAuthor = () => {
  const inputName = useRef()
  const inputLastName = useRef()
  const inputAddress = useRef()
  const inputBirthday = useRef()
  const inputImageUrl = useRef()
  const _handleSubmit = async (e) => {
    e.preventDefault()
    const [city, country] = inputAddress.current.value.split(',')
    const data = {
      name: inputName.current.value.trim(),
      last_name: inputLastName.current.value.trim(),
      city,
      country,
      date: inputBirthday.current.value,
      photo: inputImageUrl.current.value.trim(),
      user_id: '63b58ab5f67ecbbe4fe5d0d8'
    }
    const message = await postData('http://localhost:8080/api/authors/', data)
    alert(message)
  }
  return (
    <div>
      <Form handler={_handleSubmit}>
        <input type="text" name="name" placeholder="Insert name here..." ref={inputName} />
        <input type="text" name="last-name" placeholder="Insert last name here..." ref={inputLastName} />
        <input type="text" name="address" placeholder="Insert address here... (city, country)" ref={inputAddress} />
        <input type="date" name="birth" placeholder="birthday" ref={inputBirthday} />
        <input type="text" name="image" placeholder="Insert image url here..." ref={inputImageUrl} />
      </Form>
    </div>
  )
}

export default NewAuthor