import React from 'react'
import {Card,Image} from 'react-bootstrap'


const Mainpage = ({items}) => {
    return (
        <div>
            
            <Card style={{width:'20rem',height:'50rem'}}>
            {items.map(item=>(
                <div>
                <Image style={{width:"7rem", height:'10rem', padding:'5px'}} src={item.image_url} fluid /> </div>
                ))}
               
            </Card>
            
        </div>
    )
}

export default Mainpage
