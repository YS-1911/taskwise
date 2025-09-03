import React from 'react';
import "../css/nav.css"

const Nav = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary custom-navbar m-auto " >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="../../../public/image/navbar-logo.svg" alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Company
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item Login d-flex  align-items-center mb-lg-0 mb-2
                            mx-lg-3 mx-0
                            ">
                                <a className="d-flex align-items-center " href="#">
                                    Login
                                    <img className="ms-1" src="../../../public/image/l-logo.svg" alt="" />
                                </a>
                            </li>
                            <li className="nav-item d-flex align-items-center Signup">
                                <a className="d-flex align-items-center" href="#">
                                    Sign Up
                                </a>
                            </li>
                            



                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Nav;
