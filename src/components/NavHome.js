import React from 'react';
import image from '../img/tornadocss-logo.png';
import { Link } from 'react-router-dom';
const NavHome = () => {
  return (
    <nav>
      <div className='container'>
        <Link to='/'>
          <img src={image} alt='TornadoCSS' />
        </Link>
        <ul>
          <li>
            <a
              href='https://github.com/EDAMGHY/tornadocss'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavHome;
