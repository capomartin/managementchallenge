import React,{useState,useEffect} from "react"
import { useParams } from "react-router"
import {getById} from "../Services/OperationService"
import {Card, Button} from 'react-bootstrap'
import {useHistory} from "react-router-dom"
import {Spinner} from 'react-bootstrap'
import Loading from '../Components/Loading'

const  Detalle = () => {
   
    const [operation,setOperation] = useState(false)
    const [loading,setLoading] = useState(true)    
    const {id}=useParams()
    const history = useHistory()
    console.log(id)

    useEffect(
        ()=>{
            
            getById(id)
            .then(res=>{
                console.log(res.data)
                if(res.data){
                    setOperation(res.data)
                    setLoading(false)
                }

            })
            console.log("ya")
        },[id]
    )

    const handleClick= ()=>{
        
        history.push("/")
    }
   
        return(
            <Loading active={loading}>
            <>
            {
                operation &&
                 <Card className="mt-4 mx-auto" style={{ width: '18rem' }}>   
                    <Card.Header><h3>{operation.concept}</h3></Card.Header>             
                            <Card.Body>
                                <Card.Title> $ {operation.amount}</Card.Title>
                                <Card.Text>
                                                                
                                <p>Type:  {operation.type}</p>
                                <p>Date:  {operation.date.substring(0,10)}</p>
                                <p>Category:  {operation.category.name}</p>
                                </Card.Text>                               
                                
                                   <Button variant="success" onClick={handleClick}>Volver</Button>   
                                                            
                                                                
                            </Card.Body>
                </Card>

            }

           
               
           
            </>
            </Loading>
        )
   // }        
  
    
}
export default Detalle