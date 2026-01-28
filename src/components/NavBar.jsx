import React from 'react'
import { useState, useEffect } from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import logo from '../assets/img/Rilzy.svg';
import instagram from '../assets/img/Intagram.svg';
import youtube from '../assets/img/YouTube.svg';
import tiktok from '../assets/img/Tiktok.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    <img className="logo" src={logo} alt="Logo" />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </BootstrapNavbar.Toggle>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="sosial-icon">
                            <a href="https://www.instagram.com/rilz.jhr/"><img src={instagram} alt="Instagram" /></a>
                            <a href="https://www.youtube.com/@airiljahran5313"><img src={youtube} alt="YouTube" /></a>
                            <a href="https://www.tiktok.com/@rilzy.jhr"><img src={tiktok} alt="TikTok" /></a>
                        </div>
                    </span>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default NavBar;
