
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomizedBadges from './shoppingCartIcon';
import logo from './img/homepage/logo.png';
import user from './img/homepage/user.png';

const header = () =>{
  return(
    <Navbar style={{padding: '20px 0'}} expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo"/>
      </Navbar.Brand>
      <Form className="d-flex">
        <i class="fas fa-search"></i>
        <FormControl
          type="search"
          placeholder="  Search..."
          className="mr-2"
          aria-label="Search"
        />
      </Form>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: 'auto' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#">Shop</Nav.Link>
          <Nav.Link href="#action2">Element</Nav.Link>
          <Nav.Link href="#action1">Page</Nav.Link>
          <Nav.Link href="#action2">Blog</Nav.Link>
          <Nav.Link href="#action2">Megamenu</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <button type='button' className="user">
        <img src={user} alt="user"/>
      </button>
      <CustomizedBadges></CustomizedBadges>
    </Navbar>
    
  );
}
export default header;
