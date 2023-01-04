import React, { useRef } from 'react'
import { Form, Input } from '../components'
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
        <Input type="text" name="name" placeholder="Insert name here..." reference={inputName} />
        <Input type="text" name="last-name" placeholder="Insert last name here..." reference={inputLastName} />
        <Input type="text" name="address" placeholder="Insert address here... (city, country)" reference={inputAddress} />
        <Input type="date" name="birth" placeholder="birthday" reference={inputBirthday} />
        <Input type="text" name="image" placeholder="Insert image url here..." reference={inputImageUrl} />
      </Form>
    </div>
  )
}

export default NewAuthor