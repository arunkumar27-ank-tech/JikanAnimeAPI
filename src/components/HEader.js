import React from 'react'
import {useHistory} from 'react-router-dom'

const HEader = () => {
    const history = useHistory()
    const historybutton = ()=>{
        history.push('/')
    }
    return (
        <div className="containerh">
            <h1 className="header">Anime Maze</h1>
            <button onClickCapture={historybutton()}  style={{position:'absolute',right:'0px',color:'red' }}>GoHome</button>
            <button style={{position:'absolute', bottom:'0px', backgroundColor:'blue'}}> Logout</button>
        </div>
    )
}

export default HEader
