import React from 'react'
import {Card,Image} from 'react-bootstrap'


const Mainpage = ({items}) => {
    return (
        <div>
            
            <Card style={{width:'60rem',height:'50rem'}}>
            {items.map(item=>(
                <div>
                <Image style={{width:"7rem", height:'10rem'}} src={item.image_url} roundedCircle /> </div>
                ))}
               
            </Card>
            
        </div>
    )
}

export default Mainpage
