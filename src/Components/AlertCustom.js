import React from "react"
import {Alert} from 'react-bootstrap'

const styles={
    alert:{
        marginTop:"10px"
    }
}

function AlertCustom({variant,text}){
     
    return(
        /* */
        <Alert  variant={variant} style={styles.alert} >
            {text}
        </Alert>
    )
    
}
export default AlertCustom;
