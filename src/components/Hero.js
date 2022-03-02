import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <h1>TornadoCSS</h1>
        <p>
          Speed up your development with responsive boilerplate of both Utility
          Classes and beautifully pre-styled components with{' '}
          <strong>
            <u>TornadoCSS</u>
          </strong>{' '}
          which is a close mix of both Bootstrap and TailwindCSS.
        </p>
        <Link to='/docs' className='btn'>
          Get Started
        </Link>
      </div>
    </section>
  );
};
export default Hero;
