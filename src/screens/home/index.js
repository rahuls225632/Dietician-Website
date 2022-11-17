import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assests/images/logo.png';


const Home = () => {
  const apiLink = 'https://catfact.ninja/fact';

  useEffect(() => {
    async function fetchAPI() {
      fetch(apiLink).then((res) => console.log('here api dataaa', res));
    }
    fetchAPI();
  }, []);
  return (
    <>
    <h1 className="mt-5"> LAUNCHED SOON</h1>
    <h1 className="mt-5"> LAUNCHED SOON</h1>
    <h1 className="mt-5"> LAUNCHED SOON</h1>
    <h1 className="mt-5"> LAUNCHED SOON</h1>
    <h1 className="mt-5"> LAUNCHED SOON</h1>
    
      {/* <Navbar bg="light" expand="lg" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="..." height="70" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" mx-auto navbar-nav"
              style={{ maxHeight: '200px', paddingRight: '5rem' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">About me</Nav.Link>
              <Nav.Link href="#action1">Programms</Nav.Link>
              <Nav.Link href="#action1">Recipes</Nav.Link>
              <Nav.Link href="#action1">Features</Nav.Link>
              <Nav.Link href="#action1">Video</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      
    </>
  );
};
export default Home;
