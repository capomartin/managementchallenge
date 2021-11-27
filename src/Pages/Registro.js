import Mensaje from '../Components/Mensaje'
import React, {useState} from "react"
import { useForm } from "react-hook-form";
import FormGroup from "../Components/FormGroup";
import {insert} from "../Services/UserService"
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertCustom from "../Components/AlertCustom";
import {useHistory} from "react-router-dom"

const  Registro = () => {
    const { register, handleSubmit,formState:{errors} } = useForm();
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""})
    const history = useHistory()

    const onSubmit = async (data) => {
        setLoading(true) 
        console.log("data",data);
        try{
            insert(data)
            .then(res=>{
                console.log("Hay algo",res.data)
                if(res.data){
                    console.log("medio",res.data) 
                    setLoading(false)
                    setAlert({variant:"success",text:"Registro exitoso"})                  
                }               
               
            });
            console.log("luego",data)
            setTimeout(
                () =>history.push("/"),
                1000
              )
           
        }catch(e){
            console.log("error",e.code)
            setLoading(false)
            setAlert({text:"Error en el registro del mail"})
            
        }
        
    }

    
   
    return(
        <div>
            <Mensaje texto='Register' />
            <form id="miForm" onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup label="Nombre" register={{...register("name",{required:true})}}  />
                    {errors.nombre && <span className="text-danger">*El campo es obligatorio</span>}           
                    <FormGroup label="Email" type="email" register={{...register("email",{required:true})}}  />
                    <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}}  />
                    {errors.password?.type==="required" && <span className="text-danger">*El campo es obligatorio</span>}
                    {errors.password?.type==="minLength" && <span className="text-danger">*Debe introducir al menos 6 caracteres</span>}
                <br/>
                <ButtonWithLoading loading={loading} type="submit" >Register</ButtonWithLoading>           
            </form>
            <AlertCustom variant={alert.variant} text={alert.text}  />
        </div>
    )
    
    
    
}
export default Registro