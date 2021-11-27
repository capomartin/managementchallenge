import React,{useState,useEffect} from "react"
import { useParams } from "react-router"
import { useForm } from "react-hook-form";
import {Button} from 'react-bootstrap'
import FormGroup from "../../Components/FormGroup";
import Loading from '../../Components/Loading'
import {useHistory} from "react-router-dom"
import AlertCustom from "../../Components/AlertCustom";
import {update,getById,del} from "../../Services/OperationService"

const  OperationUpdate = () => {  
     
    const { register, handleSubmit,formState:{errors},setValue } = useForm();
    const history = useHistory()
    
    const onSubmit = async (data) => {
        console.log("data",data);

        try{
            update(data,id)
            .then(res=>{
                console.log("Hay algo",res.data)
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
        
        const [loading,setLoading] = useState(true)
        const [alert,setAlert] = useState({variant:"",text:""})
        const {id}=useParams()
        console.log(id,setValue)

      

    useEffect(
        ()=>{                
            const request= async () => {
                        try {
                            getById(id)
                            .then(res=>{
                                console.log("1",res.data)
                                if(res.data){
                                    console.log("medio",res.data)   
                                    setLoading(false)                                 
                                    setValue("concept",res.data.concept)
                                    setValue("type",res.data.type)
                                    setValue("amount",res.data.amount)
                                
                                }
                            })
                        
                    } catch (e) {
                    
                }
            
            } 
             request()
    },[id]
    )
   

    const handleDelete = async ()=>{
        try{
            del(id)
            .then(res=>{
                console.log("entro",res.data)
                if(res.data){
                    console.log("borro",res.data)                   
                }               

            });
            console.log("Documento",document)
            setAlert({text:"El Elemento fue eliminado"})
            setTimeout(
                () => history.push("/") ,
                2000
              )
            
        }catch(e){

        }
    }

   
        return(

            <Loading active={loading}>
                <>
                    <h1>Update</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup label="Concept" register={{...register("concept",{required:true})}}  />
                        <FormGroup label="Type" register={{...register("type",{disabled:true})}}  />
                        <FormGroup label="Amount" type="number" register={{...register("amount",{valueAsNumber: true,},{required:true})}}  />
                        
                
                        <Button  className="me-2" type="submit" variant="primary">Save</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                       
                    </form>
                    
                    <p>          
                                          
                        <AlertCustom variant={alert.variant} text={alert.text}  />
                    </p>
                </>
            </Loading>
        )
           
  
    
}
export default OperationUpdate