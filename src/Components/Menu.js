import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";

const  Menu = () => {  

    return(
      <>
       <AuthContext.Consumer>
        {
          context =>
       
            <>
              <Navbar bg="dark" variant="dark" expand="lg">
                  
                    <Navbar.Brand href="#">Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link as={Link}  to="/">Home</Nav.Link>

                        {
                          !context.userLogin &&
                          <>
                            <Nav.Link as={Link}  to="/register">Register</Nav.Link>
                            <Nav.Link as={Link}  to="/login">Login</Nav.Link>
                          </>
                        }                        
                        {
                          context.userLogin &&
                          <>
                            <NavDropdown title="Operation" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/operation/create">New</NavDropdown.Item>
                                </NavDropdown>
                            <Nav.Link onClick={context.logoutUser} >Logout</Nav.Link>
                          </>
                        }
                                                  
                      </Nav>
                    </Navbar.Collapse>
                
              </Navbar> 
            </>
        }  
      </AuthContext.Consumer>
    </>
    )     
      
    
}

export default Menu