import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/online-resume.png';
import instagram from '../assets/img/instagram.png';
import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
          <Navbar.Brand href="#home"> 
    <img src={logo} alt="Logo" className="home-logo" />
</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home" className={activeLink === 'Home' ? 'active-navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
                <Nav.Link href="#Skills" className={activeLink === 'Skills' ? 'active-navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('Skills')}>Skills</Nav.Link>
                <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active-navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
                <Nav.Link href="#Education"className={activeLink === 'Education' ? 'active-navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('Education')}>Education</Nav.Link>
              </Nav>
              
              <span className="navbar-text">
                <div className="social-icon">
                <a href="https://www.instagram.com/sumukha.04" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
                    <a href="https://github.com/sumukhavasista"><img src={github} alt=""></img></a>
                    <a href="https://www.linkedin.com/in/sumukha-vasista-37317a242/"><img src={linkedin} alt=""></img></a>
                </div>
                <button className="cu" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
