import React from "react"
import {Form} from 'react-bootstrap'

const  FormGroup = ({label,type,register}) => {
         
    
    return(
        <>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label >{label}</Form.Label>
                <Form.Control type={type || "text"} {...register}  placeholder="..." />
            </Form.Group>
           
        </>
    )
  
    
    
    
}
export default FormGroup