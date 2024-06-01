import React from 'react';
import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';
import '../styles/style.css';

const Aside = () => {
  return (
    <aside className='aside'>
      <div className="photo">
        <img src="https://picsum.photos/id/237/200" alt="Random" />
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
