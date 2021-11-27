import React, {useState,useContext} from "react"
import Mensaje from '../Components/Mensaje'
import { useForm } from "react-hook-form";
import FormGroup from "../Components/FormGroup";
import {login} from "../Services/UserService"
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertCustom from "../Components/AlertCustom";
import {useHistory} from "react-router-dom"
import AuthContext from "../Context/AuthContext";

const  Login = () => {
    const { register, handleSubmit,formState:{errors} } = useForm();
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""})
    const context = useContext(AuthContext)
    const history = useHistory()

    const onSubmit = async (data) => {
        setLoading(true) 
        console.log("trae esta data",data);
        try{
            login(data)
            .then(res=>{                
                if(res.data.token){
                    context.loginUser(res.data.token)
                    console.log("El token",res.data.token) 
                    setAlert({variant:"success",text:"Login exitoso"})                  
                }
                else{
                    console.log("El mensage",res.data)  
                    setAlert({variant:"danger",text:res.data.message})
                }               
                setLoading(false)
                
            });
            
           setTimeout(
                () =>history.push("/"),
                2000
              )
           
        }catch(e){
            console.log("error",e.code)
            setLoading(false)
            setAlert({variant:"danger",text:"Error en el Login"})
            
        }
        
    }
    return(
        <div>
             <Mensaje texto='Login' />
            <form onSubmit={handleSubmit(onSubmit)}>               
                <FormGroup label="Email" type="email" register={{...register("email",{required:true})}}  />
                {errors.nombre && <span >*El campo es obligatorio</span>}
                <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}}  />
                {errors.password?.type==="required" && <span >*El campo es obligatorio</span>}
                {errors.password?.type==="minLength" && <span >*Debe completar al menos 6 caracteres</span>}
                <p><br/> <ButtonWithLoading loading={loading} type="submit" >Login</ButtonWithLoading></p>
            </form>
            <AlertCustom variant={alert.variant} text={alert.text}  />
        </div>
    )
    
    
    
}
export default Login