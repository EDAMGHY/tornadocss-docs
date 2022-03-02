import React from 'react';
import { Link } from 'react-router-dom';
import image from '../img/tornadocss-logo.png';

const Nav = () => {
  const handleClick = (e) => {
    if (e.target.className === 'firsts') {
      if (e.target.children[1].classList.contains('show')) {
        e.target.children[1].classList.remove('show');
        e.target.children[0].className = 'fas fa-arrow-right';
      } else {
        e.target.children[1].classList.add('show');
        e.target.children[0].className = 'fas fa-arrow-down';
      }
    }
  };

  return (
    <aside>
      <div className='logo'>
        <Link to='/'>
          <img src={image} alt='tornadocss' />
        </Link>
        <span>v1.3.0</span>
      </div>
      <ul>
        <li className='firsts'>
          <Link to='/docs'>Getting Started</Link>
        </li>
        <li className='firsts' onClick={handleClick}>
          <i className='fas fa-arrow-right'></i> CSS
          <ul>
            <li>
              <Link className='active' to='colors'>
                Colors
              </Link>
            </li>
            <li>
              <Link to='grid'>Grid</Link>
            </li>
            <li>
              <Link to='breakpoints'>Breakpoints</Link>
            </li>
            <li>
              <Link to='typography'>Typography</Link>
            </li>
          </ul>
        </li>
        <li className='firsts' onClick={handleClick}>
          <i className='fas fa-arrow-right'></i> Utilities
          <ul>
            <li>
              <Link to='height'>Height</Link>
            </li>
            <li>
              <Link to='width'>Width</Link>
            </li>
            <li>
              <Link to='padding'>Padding </Link>
            </li>
            <li>
              <Link to='margin'>Margin</Link>
            </li>
            <li>
              <Link to='display'>Display</Link>
            </li>
            <li>
              <Link to='flex'>Flex</Link>
            </li>
            <li>
              <Link to='opacity'>Opacity</Link>
            </li>
            <li>
              <Link to='borderRadius'>Border Radius</Link>
            </li>
            <li>
              <Link to='borders'>Borders</Link>
            </li>
            <li>
              <Link to='shadows'>Shadows</Link>
            </li>
            <li>
              <Link to='visibility'>Visibility</Link>
            </li>
          </ul>
        </li>
        <li className='firsts' onClick={handleClick}>
          <i className='fas fa-arrow-right'></i> Helpers
          <ul>
            <li>
              <Link to='position'>Position</Link>
            </li>
            <li>
              <Link to='paragraph'>Paragraph</Link>
            </li>
            <li>
              <Link to='image'>Image</Link>
            </li>
          </ul>
        </li>
        <li className='firsts' onClick={handleClick}>
          <i className='fas fa-arrow-right'></i> Components
          <ul>
            <li>
              <Link to=''>Alerts</Link>
            </li>
            <li>
              <Link to=''>Badges</Link>
            </li>
            <li>
              <Link to=''>Buttons</Link>
            </li>
            <li>
              <Link to=''>Cards</Link>
            </li>
            <li>
              <Link to=''>Forms</Link>
            </li>
            <li>
              <Link to=''>List</Link>
            </li>
            <li>
              <Link to=''>Navbar</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to=''>Examples</Link>
        </li>
      </ul>
    </aside>
  );
};
export default Nav;
