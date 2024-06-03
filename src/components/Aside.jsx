import React from 'react';
import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';
import '../styles/style.css';
import profilePhoto from '../assets/img/prof2.jpeg'

const Aside = () => {
  return (
    <aside className='aside'>
      <div className="photo">
        <img src={profilePhoto} alt="Random" />
      </div>
      <p className='text_user'>Sadi Mammadov</p>
      <SocialLinks />
      <nav>
        <NavLinks />
      </nav>
      
    </aside>
  );
}

export default Aside;
