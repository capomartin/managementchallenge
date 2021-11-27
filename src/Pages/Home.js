import React, {useState, useEffect} from "react"
import {getAll,del} from "../Services/OperationService"
import Mensaje from '../Components/Mensaje'
import Operation from '../Components/Operation'
import Balance from '../Components/Balance'
import {Table} from 'react-bootstrap'
import Loading from '../Components/Loading'
import {useHistory} from "react-router-dom"

const Home = ()=>{
    const [operations,setoperations] = useState([])
    const [loading,setLoading] = useState(true)
    const [reload,setReload] = useState(true)
    const history = useHistory()

    /*useEffect(
        ()=>{
           getAll()
            .then(res=>{
                console.log("Hay algo",res.data)
                if(res.data){
                    setoperations(res.data)
                    setLoading(false)                   
                }            

            });
         
            
    },[]
    )
    */

    useEffect(
        ()=>{

            if(reload)request() 

             },[reload]
             )


    const request= async () => {
        try {
            getAll()
            .then(res=>{
                console.log("Hay algo",res.data)
                if(res.data){
                    setoperations(res.data)
                    setLoading(false)
                    setReload(false)                  
                }               

            });
        
        }catch (e) {
            console.log("error",e)
        }

    } 
    
    const handleDelete = async (id)=>{
        try{
            del(id)
            .then(res=>{
                console.log("entro",res.data)
                if(res.data){
                    console.log("borro",res.data)                   
                }               

            });
            console.log("Documento",document)
           
            setReload(true)
            
        }catch(e){

        }
    }    
   
        return (
            <Loading active={loading}>
            <>                       
                <p> <Balance datos={operations}/> </p>
               
               
                <Table responsive  striped bordered hover>
                    <thead>
                        <tr>
                            <th>Concept</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {operations.map(Item=><Operation key={Item._id} datos={Item} handleDelete={handleDelete}/>)}
                    
                    </tbody>
                </Table>
        
        </>
        </Loading>
        )

   

}

export default Home