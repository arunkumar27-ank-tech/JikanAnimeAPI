import React from 'react'
import {Card,Button, Image} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
const Naruto = ({naru}) => {
    const history = useHistory()
    const historybutton = ()=>{
        history.push('/')
    }
    return (
        <div>
           {naru.map(nar=>(
               <div>
            
               <Card style={{position:'absolute' ,width: '59rem', height:'24rem', left:'140px', top:'140px', borderColor:'red', borderWidth:'4px'}}>
               
                    <Card.Body>
                        <Image style={{width:'15rem'}} src={nar.image_url} fluid /> 
                      
                        <Card.Title style={{position:"absolute", right:"0px", top:"0px", left:"30rem", fontFamily:'monospace'}}>Synopsis:{nar.synopsis}</Card.Title>
                        <Card.Subtitle style={{Text:"bold"}} className="mb-6 text">{nar.title}</Card.Subtitle>
                        <Card.Text style={{position:"absolute", right:"0px", top:"10rem", left:"30rem"}}>
                        Toatl Epsiodes :{nar.episodes}<br></br>
                        Score          :{nar.score}<br></br>
                        Type :{nar.type}<br></br>
                        Start Date :{nar.start_date}<br></br>
                        End Date :{nar.episodes}<br></br>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                
                
               </div>
           ))}
           
        </div>
    )
}

export default Naruto
