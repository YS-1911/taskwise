import React from 'react';
import "../css/nav.css"
import Modalsinup from './modalsinup';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary custom-navbar m-auto " >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="./image/navbar-logo.svg" alt="" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >

                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Company">
                                    Company
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Features">
                                    Features
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Pricing">
                                    Pricing
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Blog">
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item Login d-flex  align-items-center mb-lg-0 mb-2
                            mx-lg-3 mx-0
                            ">
                                <a className="d-flex align-items-center " href="#">
                                    Login
                                    <img className="ms-1" src="./image/l-logo.svg" alt="" />
                                </a>
                            </li>
                            <li className="nav-item d-flex align-items-center Signup">
                                <a className="d-flex align-items-center" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Modalsinup />
        </div>

    );
}

export default Nav;
