import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assests/images/logo.png';
const Header = () => {
  const navigate = useNavigate();
  const apiLink = 'https://catfact.ninja/fact';
 

  useEffect(() => {
    async function fetchAPI() {
      fetch(apiLink).then((res) => console.log('here api dataaa', res));
    }
    fetchAPI();
  }, []);
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">
            <a className="navbar-brand" href='/ui'>
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
              <Nav.Link
                className="me-5"
                onClick={() => {
                  navigate('');
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                className="me-5"
                onClick={() => {
                  navigate('/about');
                }}
              >
                About me
              </Nav.Link>
              <Nav.Link  onClick={() => {
                  navigate('/programms');
                }} className="me-5">
                Programms
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="container">
        <div className="row mt-5">
          <div className="col-sm">
            <img
              src={GirlWithOrange}
              className="img-fluid"
              alt="Responsive image"
              style={{ maxHeight: '560px' }}
            />
          </div>
          <div className="col-sm">
            <h2>About Dt. Garima</h2>
            <h4 className="fst-italic" style={{ color: '#e29d78' }}>
              “If you Wait, All that happens is that you get Older”
            </h4>
            <p style={{ color: '#8c8685' }}>
              I`m Dt. Garima a Health & Wellness coach, as well as a certified
              Dietitian. I dedicated all my time to creating a lasting
              difference in the lives of other people which is why I`m committed
              to making customized diet plans and motivating others, and my
              services are tailored to the individual needs and desires of my
              clients.
            </p>
            <div class="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
              <iframe
                class="embed-responsive-item mw-200"
                src="https://www.youtube.com/embed/R06-Tj4rVrk?rel=0"
                allowfullscreen
                // allow="autoplay; encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="pe-5" style={{ backgroundColor: '#e68147' }}>
        <h1>
          Imagine, in only 3 months, you will create a healthy lifestyle that
          honours your own health and well being.
        </h1>
      </div>
      <div>
        <img
          className="img-fluid"
          alt="Responsive image"
          style={{ maxWidth: '1200px' }}
          src={Vegitable}
        />
      </div> */}
    </>
  );
};
export default Header;
