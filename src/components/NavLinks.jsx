import React from 'react';
import '../styles/style.css';

const NavLinks = () => {
  return (
    <ul className="nav_links_container">
      <li><a className="nav_link" href="#home"> <i className='bx bx-home'></i> Home</a></li>
      <li><a className="nav_link" href="#about"> <i className='bx bx-user'></i>About</a></li>
      <li><a className="nav_link" href="#resume"> <i className='bx bx-file-blank'></i>Resume</a></li>
      <li><a className="nav_link" href="#portfolio"> <i className='bx bx-book-content'></i>Portfolio</a></li>
      {/* <li><a className="nav_link" href="#services"> <i className='bx bx-server'></i>Services</a></li> */}
      <li><a className="nav_link" href="#contact"> <i className='bx bx-envelope'></i>Contact</a></li>
    </ul>
  );
}

export default NavLinks;
