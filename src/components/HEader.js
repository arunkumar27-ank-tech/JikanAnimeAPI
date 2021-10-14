import React from 'react'
import {useHistory} from 'react-router-dom'

const HEader = ({handleLogOut}) => {
    const history = useHistory()
    const historybutton = ()=>{
        history.push('/')
    }
    return (
        <div className="containerh">
            <h1  style={{fontFamily:'monospace'}}>ANIME MAZE</h1>
            <button onClickCapture={historybutton()}  style={{position:'absolute',right:'0px',color:'red' }}>GoHome</button>
            <button className='logout' onClick={handleLogOut} style={{position:'absolute',fontFamily:'sans-serif' ,top:'20%', right:'0px', backgroundColor:'red', color:'yellow'}}> LOGOUT</button>
        </div>
    )
}

export default HEader
