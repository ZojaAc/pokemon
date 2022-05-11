import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header flex" id="top-id">
      <img src='./img/logo.jpg' className="header_logo" alt="logo" />
      <nav>
        <ul className='flex'>
          <Link to='/'>
            <li className='header_nav-item'>Home</li>
          </Link>
          <Link to='/caught'>
            <li className='header_nav-item'>Caught</li>
          </Link>      
        </ul>
      </nav>
    </header>
  )
}