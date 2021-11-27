import React from "react"
import {   
    Switch,
    Route,
    Redirect
  } from "react-router-dom"
  import Registro from '../Pages/Registro';
  import Login from '../Pages/Login';
  import Menu from '../Components/Menu';
  import Footer from '../Components/Footer';
  import Detalle from '../Pages/Detalle';
  import Home from '../Pages/Home';
  import OperationCreate from '../Pages/Operations/OperationCreate';
  import OperationUpdate from "../Pages/Operations/OperationUpdate";
  import NotFound from '../Pages/NotFound';
  import Container from 'react-bootstrap/Container'
  import AuthContext from "../Context/AuthContext";

  const Public = () =>{
    return(
     
          <>
        <Menu/>
        <Container>
            <AuthContext.Consumer>
                {
                context =>
            
                    <>                  
                <Switch>
                    <Route path="/register">
                        <Registro />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>            
                    <Route path="/operation/create">
                        <OperationCreate />
                    </Route>
                    {
                        context.userLogin &&
                                
                            <Route path="/operation/update/:id">
                                <OperationUpdate />
                            </Route>
                        
                    }      
                    <Route path="/operation/:id">
                        <Detalle />
                    </Route>
                    
                    
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>      
                </> 
                }
            </AuthContext.Consumer>
        </Container>
        <Footer/>
    </>
  )
}
  export default Public