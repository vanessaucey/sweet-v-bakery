
import React, { Component } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar({token}) {
    console.log(token)
    return (
      <nav className="navbar">
        <h1 className="nav-logo">
          Sweet V Bakery
        </h1>
            <ul className="navbar-links" >
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/order">Order</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>

            </ul>
            
      </nav>
      
    )
  }
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }