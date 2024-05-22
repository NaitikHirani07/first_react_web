import React from 'react';
import SectionAbout from './about';
import Carousel from './carousel';
import FooterSection from './footer';
import './header.css';
import SectionWork from './work';
const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg sticky-top">
                    <div className="container">
                        <a className="navbar-brand me-auto" href="#">Logo</a>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link mx-lg-2 active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-lg-2" href="#about_section">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-lg-2" href="#work_section">Work</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link mx-lg-2" href="#">Mail</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" className='login-button  px-3 py-1 rounded-3 text-decoration-none text-light fw-bold'>Login</a>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <Carousel></Carousel>
                <SectionAbout></SectionAbout>
                <SectionWork></SectionWork>
                <FooterSection></FooterSection>
            </header >
        </>
    );
}

export default Header;