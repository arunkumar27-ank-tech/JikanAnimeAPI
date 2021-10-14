import React from 'react'
import {Card,Image} from 'react-bootstrap'


const Mainpage = ({items,naru ,narutoship ,lastnarut,
    boruto, narumov}) => {
    return (
        <div>
            <div className='gridmain'>
            
            <div class="grid-container">
                {naru.map(nar=>(

                
               
                <div class="grid-item"><img src= {nar.image_url} style={{width:'80%',height:'80%'}}/></div>
                ))}
                {narutoship.map(nar=>(
                <div class="grid-item"><img src= {nar.image_url} style={{width:'80%',height:'80%'}}/></div>
                ))}
                {lastnarut.map(nar=>(
                <div class="grid-item"><img src= {nar.image_url} style={{width:'80%',height:'80%'}}/></div>
                ))}  
                {boruto.map(nar=>(
                <div class="grid-item"><img src= {nar.image_url} style={{width:'80%',height:'80%'}}/></div>
                ))}
                {narumov.map(nar=>(
                <div class="grid-item"><img src= {nar.image_url} style={{width:'80%',height:'80%'}}/></div>
                ))}
               
                  
            </div>
            </div>
           
        </div>
    )
}

export default Mainpage
