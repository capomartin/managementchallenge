import React,{useState,useEffect} from "react"
import { useForm } from "react-hook-form";
import Mensaje from '../../Components/Mensaje'
import FormGroup from "../../Components/FormGroup";
import {insert} from "../../Services/OperationService"
import {Button,Form} from 'react-bootstrap/'
import {useHistory} from "react-router-dom"

const  OperationCreate = () => {
    //console.log(firebase.db)
    const { register, handleSubmit,formState:{errors} } = useForm();
    const history = useHistory()

    
    const onSubmit = async (data) => {
        console.log("data",data);
        try{
            insert(data)
            .then(res=>{
                
                if(res.data){
                    console.log("medio",res.data)                   
                }               

            });
            console.log("luego",data)
            history.push("/")
        }catch(e){
            console.log("error",e.code)
            
        }
        
    }
    return(
        <div>
            <Mensaje texto='New Operation' />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Concept" register={{...register("concept",{required:true})}}  />
                {errors.nombre && <span>El campo es obligatorio</span>}
                <FormGroup label="Amount" type="number" register={{...register("amount",{valueAsNumber: true,},{pattern: /^-?[0-9]\d*\.?\d*$/i},{required:true})}}  />               
                <Form.Select {...register("type",{required:true})}>             
                    <option value="Egreso">Expense</option>
                    <option value="Ingreso">Income</option>                
                </Form.Select>
           
                <Button className="mt-4" type="submit" variant="primary">Save</Button>
                
            </form>
        </div>
    )
      
    
    
    
}
export default OperationCreate