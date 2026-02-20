import React, { useEffect, useState } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/instagram.svg"
import navIcon2 from "../assets/img/linkedin.svg"
import navIcon3 from "../assets/img/github.svg"

export default function NavBar() {


    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }


        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }


    return (
        <div>
            <Navbar expand="md"  className={scrolled ? "scrolled" :""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt='Logo' style={{width :"50px"}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink ==="home" ?'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}  >Home</Nav.Link>
                            <Nav.Link href="#skills"  className={activeLink ==="skills" ?'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects"  className={activeLink ==="projects" ?'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='#' ><img src={navIcon1} alt='instagram' /></a>
                                <a href='#' ><img src={navIcon2} alt='linkedin' /></a>
                                <a href='#' ><img src={navIcon3} alt='github' /></a>
                            </div>
                            <button className='vvd' onClick={() => console.log("connect")}> <span> let's Connect </span></button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
