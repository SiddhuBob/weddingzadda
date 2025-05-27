import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from "../Images/WEDDINGZ ADDA LOGO.png"
import "../Css/Navbar.css";
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <div className='Header-Logo-Main-Con'>
            <Link to="/">
              <div className='Header-Logo-Con'>
                <img src={Logo} alt='Logo' />
              </div>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="main-mid-item-con">
            <Nav.Link href="venues-page"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="venues-page"><Link to="">Venues</Link></Nav.Link>
            <Nav.Link href="vengor-page"><Link to="/vengor-page">Vendors</Link></Nav.Link>
            <NavDropdown title="Explore More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="about-page"><Link to="/about-page">About Us</Link></NavDropdown.Item>
              <NavDropdown.Item href="faq">
              <Link to="/faq">Faq's</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="blog"><Link to="/blog">Blogs</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Support & Help
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <div className=''>
                <Link className='click-btn btn-style702'>
              Login
                </Link>
              </div>
            </Nav.Link>
            <Nav.Link href="#deets">
              <div className=''>
                <Link className='click-btn btn-style702'>
              Register
                </Link>
              </div>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;