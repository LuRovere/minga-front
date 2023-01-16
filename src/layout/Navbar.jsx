import React, {useState} from 'react'
import { Link as Anchor } from 'react-router-dom'

const Navbar = () => {
    
    const [variable, setVariable] = useState(false)

    const menuPequeño=()=> {
        if(variable === true){
            setVariable(false)
        }
        if(variable === false){
            setVariable(true)
        }
    }
    
    return (
    <div className='navBarcito'>
        <div className='izquierda'>
        <img onClick={menuPequeño} src='./assets/images/menu.png'/>
        {
            variable ?(
            <div className='opciones'>
            <Anchor className='comi' to="/">Home</Anchor>
            <a className='comi' href='#'>Log in</a>
            <Anchor className='comi' to="/new-author">New author</Anchor>
            <Anchor className='comi' to="/new-comic">New comic</Anchor>
            <Anchor className='comi' to="/new-chapter">New chapter</Anchor>
            <Anchor className='comi' to="/comics">Comics</Anchor>

            {/* <Anchor className='comi' to="/">Log in</Anchor>
            <Anchor className='comi' to="/">Log in</Anchor> */}
            

        </div>
            )
            : null
        }
        </div>
        <div className='derecha'>
        <a href=''><img className='logo' src='./assets/images/Logo.png'/></a>
        </div>
    </div>
    )
}

export default Navbar