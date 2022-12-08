import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Ecom()
{
return(
    <>
    
  
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand href="#"><img className="img-fluid"  src="../../e-com-assets/logo-1.png"/></Navbar.Brand>
        {/* D:\sgr\l4o-learning\reactplayground\my-personal-website\public\e-com-assets\logo-1.png */}
       
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="d-flex justify-content-end " >
                    <a className="nav-link ms-md-2 " href="#action6">
                        <div style="width:100px;"><i className="fa fa-shopping-cart" style="font-size:36px ;margin-right:5px;"></i>Cart</div></a>
                </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    
    {/* <section   style={{padding:"0 60px"}}id="header"> */}
    {/* <!-- navbar-header --> */}
    {/* <!-- <div class="row justify-content-center mt-1"> --> */}
        {/* <nav class="navbar navbar-expand-md navbar-light bg-light">
              <div class="container">
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand  " href="#"><img class="img-fluid" src="../e-com-assets/logo-1.png"/></a>


                
              
                
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0"> */}
                        {/* <!-- <li class="nav-item">
                            <a class="nav-link active" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
                        </li> --> */}
                        {/* <!-- <li class="nav-item">
                            <a class="nav-link active" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
                        </li> --> */}
                        {/* <li class=" navbar-brand nav-item">
                            <a class="nav-link btn btn-primary text-white d-inline-block px-4 btn-md mx-md-1" href="#" aria-current="page" >Login </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                
                                <a class="dropdown-item" href="#">Clothing</a>
                                <a class="dropdown-item" href="#">Electronics</a>
                                <a class="dropdown-item" href="#">jewellery</a>
                                
                            </div>
                        </li>
                      
                        
                    </ul> */}
                    {/* <!-- <form class="d-flex my-2 my-lg-0"> --> */}
                        {/* <form class="d-flex my-2 my-lg-0">
                        <input class="form-control me-sm-2 " type="text" placeholder="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                   
                </div>
                <div class="d-flex justify-content-end " >
                    <a class="nav-link ms-md-2 " href="#">
                        <div style="width:100px;"><i class="fa fa-shopping-cart" style="font-size:36px ;margin-right:5px;"></i>Cart</div></a>
                </div>
          </div>
        </nav> */}
        
  

    {/* </section> */}
    
    </>
)
}
export default Ecom;