import React, { useState } from 'react'
import { Form } from '../components'
import validateData from '../services/validateData'
import postData from '../services/postData'

const NewAuthor = () => {
  const [inputName, setInputName] = useState('')
  const [inputLastName, setInputLastName] = useState('')
  const [inputAddress, setInputAddress] = useState('')
  const [inputBirthday, setInputBirthday] = useState('')
  const [inputImageUrl, setInputImageUrl] = useState('')
  const _handleSubmit = async (e) => {
    e.preventDefault()
    const [city, country] = inputAddress.trim().split(',')
    const authorSchema = {
      name: {
        value: inputName.trim(),
        min: 3,
        max: 15,
        require: true
      },
      last_name: {
        value: inputLastName.trim(),
        min: 3,
        max: 15,
        require: false
      },
      city: {
        value: city,
        min: 3,
        max: 15,
        require: true
      },
      country: {
        value: country,
        min: 3,
        max: 15,
        require: true
      },
      date: {
        value: inputBirthday,
        min: '1950-01-01',
        max: '2005-01-01',
        require: false
      },
      photo: {
        value: inputImageUrl.trim(),
        require:true
      }
    }
    const response = validateData(authorSchema)
    if(!response.validated) {
      alert(response.message)
      return false
    }
    const message = await postData('http://localhost:8080/api/authors/', {...response.data, user_id: '63b58ab5f67ecbbe4fe5d0d8'})
    alert(message)
  }
  return (
    <div>
      <h1>New Author</h1>
      <div>
        
      </div>
      <Form handler={_handleSubmit}>
        <input type="text" name="name" placeholder="Insert name here..." value={inputName} onChange={(e) => setInputName(e.target.value)} />
        <input type="text" name="last-name" placeholder="Insert last name here..." value={inputLastName} onChange={(e) => setInputLastName(e.target.value)} />
        <input type="text" name="address" placeholder="Insert address here... (city, country)" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} />
        <input type="date" name="birth" placeholder="birthday" value={inputBirthday} onChange={(e) => setInputBirthday(e.target.value)} />
        <input type="text" name="image" placeholder="Insert image url here..." value={inputImageUrl} onChange={(e) => setInputImageUrl(e.target.value)} />
      </Form>
    </div>
  )
}

export default NewAuthor