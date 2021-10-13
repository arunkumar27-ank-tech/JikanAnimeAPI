import React from 'react'
import {Card,Image} from 'react-bootstrap'


const Mainpage = ({items}) => {
    return (
        <div>
            <h1>Main Page</h1>
            
            <Card style={{width:'60rem',height:'75rem'}}>
            {items.map(item=>(
                <div>
                <Image style={{width:"10rem", height:'15rem'}} src={item.image_url} roundedCircle /> </div>
                ))}
               
            </Card>
            
        </div>
    )
}

export default Mainpage
