import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink ,Link} from 'react-router-dom';
import "./NavBar.css";
import { BsHeart } from 'react-icons/bs';
import { useContext } from 'react';
import ContextData from '../Pages/ContextData';
function NavBar()
{
  let cont=useContext(ContextData);
return(
  <div className='mb-4'>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             {/* <Nav.Link style={({isActive})=>{return {color:isActive?"red":"green"}}} as={Link} to="/">Home</Nav.Link>  */}
              <Nav.Link  as={NavLink}   to="/">Home</Nav.Link> 
            <Nav.Link as={NavLink}  to="blogs">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="user">User</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <Navbar.Text>{<BsHeart/>} {cont.likeCount}</Navbar.Text>
      </Container>
    </Navbar> 
  
    {/* <nav>
      <Link to="/home">Home</Link>
      <Link to="/blogs">Blogs</Link>
    </nav> */}
    </div>
  );
}

export default NavBar;