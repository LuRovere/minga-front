import React, {useState} from 'react'

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
            <a className='comi' href='#'>Comics</a>
            <a className='comi' href='#'>Iniciar Sesion</a>
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