import React, { useEffect, useState } from "react";
import {Badge,Card,Row,Col} from 'react-bootstrap'
//import styled from "styled-components";

const Balance = ({datos}) => {  
    const [operations, updateOperations] = useState(datos); 
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    /*useEffect(
        ()=>{*/

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        console.log("Llegan los datoas",operations)
        operations.map(payload =>
            payload.type === "Egreso"
                ? (exp = exp + payload.amount)
                : (inc = inc + payload.amount),
               // console.log("adentro",payload.amount)
               
    );
    console.log("expensas",exp)
        updateExpense(exp);
        updateIncome(inc);
    }
    /*calculateBalance()
},)*/

    useEffect(() => calculateBalance(),);

   
    return (
       <>                         
                <Card>
                    <Card.Header><h3>Balance: <Badge bg="secondary">${income - expense}</Badge></h3></Card.Header>
                    <Card.Body>
                       
                        <Card.Text>
                            <Row>
                                <Col><h5>Income: <Badge bg="success">${income}</Badge></h5></Col>
                                <Col><h5>Expense: <Badge bg="danger">${expense}</Badge></h5></Col>
                            </Row>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
              
        </>            
       
    )
}
export default Balance;
