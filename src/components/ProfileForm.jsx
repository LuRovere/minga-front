import React from 'react'
import { useRef} from 'react'
import updateActions from '../store/authorscompany/actions'
import { useSelector, useDispatch } from 'react-redux'
import alertActions from '../store/minga-alert/actions'
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const {update, disable} = updateActions
const {mingaAlert} = alertActions

export default function Form(props) {
    let {data, name} = props
    let updateStore = useSelector((store) => store.data)
    let { token } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const dataForm = useRef()
    const [active, setActive] = useState(true)
    const saveData = async(e) => {
        e.preventDefault()
        let form = {}
        Array.from(dataForm.current).forEach((element) => element.name && element.value && (form[element.name] = element.value))
        let response = await dispatch(update({data:form, token, name}))
        console.log(response);
        if(response.payload.response.data?.message){
            dispatch(mingaAlert(response.payload.response.data.message))
        }
        if(!response.payload.success){
            dispatch(mingaAlert(response.payload.response))
        }

      }
      const disableAccount = () => {
		setActive(!active)
      }
      useEffect(() => {
        dispatch(disable({token, name, active:active}))
      }, [active])
  return (
    <form className='formProfile' ref={dataForm} onSubmit={saveData}>
        {data.map(element => {
            if(element === "date") {
                return <input type="date" key={element} className='inputProfileDate' name={element} placeholder={`Change ${element}`}/>
            }else{
                return  <input type="text" key={element} className='inputProfile' name={element} placeholder={`Change ${element}`}/>
            }
    })}
        <input type="submit" value="Save" id='inputSend' />
		{active === true ? 
        <Anchor className='deleteButton' onClick={disableAccount}>Delete</Anchor> 
        :
        <Anchor className='activeButton' onClick={disableAccount}>Active</Anchor>
        }
    </form>
  )
}