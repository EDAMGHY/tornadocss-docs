import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
              <NavLink activeclassname='active' to='colors'>
                Colors
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='grid'>
                Grid
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='breakpoints'>
                Breakpoints
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='typography'>
                Typography
              </NavLink>
            </li>
          </ul>
        </li>
        <li className='firsts' onClick={handleClick}>
          <i className='fas fa-arrow-right'></i> Utilities
          <ul>
            <li>
              <NavLink activeclassname='active' to='height'>
                Height
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='width'>
                Width
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='padding'>
                Padding{' '}
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='margin'>
                Margin
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='display'>
                Display
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='flex'>
                Flex
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='opacity'>
                Opacity
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='borderRadius'>
                Border Radius
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='borders'>
                Borders
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='shadows'>
                Shadows
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='visibility'>
                Visibility
              </NavLink>
            </li>
          </ul>
        </li>
        <li className='firsts' onClick={handleClick}>
          <i className='fas fa-arrow-right'></i> Helpers
          <ul>
            <li>
              <NavLink activeclassname='active' to='position'>
                Position
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='paragraph'>
                Paragraph
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='image'>
                Image
              </NavLink>
            </li>
          </ul>
        </li>
        <li className='firsts' onClick={handleClick}>
          <i className='fas fa-arrow-right'></i> Components
          <ul>
            <li>
              <NavLink activeclassname='active' to='alerts'>
                Alerts
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='badges'>
                Badges
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='buttons'>
                Buttons
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='cards'>
                Cards
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='forms'>
                Forms
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='lists'>
                Lists
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname='active' to='navbar'>
                Navbar
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};
export default Nav;
