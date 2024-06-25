import React from 'react'

import {Link, NavLink} from 'react-router-dom'; //son lo mismo, NavLink permite dar estilos para la navegacion como active

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            Navbar
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                    About
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Admin">
                    Admin
                </NavLink>
                </li>
                <li className="nav-item">
                    <button className='btn btn-outline-dark'>Login</button>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default NavBar