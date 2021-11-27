import React from "react"
import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";
//import Moment from 'moment'

const Operation = ({datos,handleDelete})=> {
        
        console.log({datos})
    
        return(
          <AuthContext.Consumer>
            {
              context =>
            <>
               
            <tr>
               <td>{datos.concept}</td>
               <td>{datos.type}</td>
               <td>{datos.amount}</td> 
               <td>{datos.date.substring(0,10)}</td> 
               <td><Button size="sm" className="me-2" variant="success" as={Link} to={"/Operation/"+datos._id}>Detail</Button>
               {
                context.userLogin &&
                  <>
                    <Button size="sm" className="me-2" variant="warning" as={Link} to={"/Operation/update/"+datos._id} >Update</Button>
                    <Button size="sm" variant="danger" onClick={()=>handleDelete(datos._id)} >Delete</Button>
                 </>
               }
               </td> 
             </tr> 
                    
                    
                    
                     
              
            </>
             }
          </AuthContext.Consumer>
        )
      
    
    
    
}
export default Operation