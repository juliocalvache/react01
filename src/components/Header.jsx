import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate} from 'react-router-dom';
/* import MenuCategorias from './MenuCategorias'; */
import { useEffect, useState } from 'react';
import { CartFill } from 'react-bootstrap-icons';
/* import logo from '../assets/logo.jpg' */
import Swal from "sweetalert2";
import Badge from 'react-bootstrap/Badge';


import MostrarCarrito from './MostrarCarrito';

const Header = ({carrito, setCarrito}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [valueSearch, setValueSearch]=useState("")
  const [total, setTotal]=useState(0)
  const onSearchChange = (e) => {
      setValueSearch(e.target.value);
  };
 
  const navigate = useNavigate();

  const onSearchSubmit = e => {
    e.preventDefault();
    navigate('/Busquedas', {
      state: valueSearch,
    });	
  };

  useEffect(()=>{
    setTotal(carrito.length)
  },[carrito]);

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top" data-bs-theme="dark"  >
      <Container fluid>
        <Navbar.Brand href="#"> <img src="logo.png" alt="" width="100"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >


           <Link to="/Inicio" className="nav-link">Inicio</Link>
           <Link to="/Movil" className="nav-link">Movil</Link>
           <Link to="/Laptop" className="nav-link">Laptop</Link>
           <Link to="/Tienda" className="nav-link">Tienda</Link>
           <Link to="/Contacto" className="nav-link">Contacto</Link>

          </Nav>
          <div>
              <button className='btn btn-danger me-2'   onClick={() =>  verCarrito() }>  <CartFill  size={25} /> <Badge bg="secondary">{total}</Badge></button>

              <button className='btn btn-info me-2'  onClick={handleShow} >  <CartFill  size={25} /> <Badge bg="secondary">{total}</Badge></button>
              
            </div>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <MostrarCarrito carrito={carrito} setCarrito={setCarrito} show={show} handleClose={handleClose}  />

    </>

  )
}

export default Header