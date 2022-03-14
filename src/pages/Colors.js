import React from 'react';
import Bg from '../components/Bg';
import Color from '../components/Color';
import '../css/colors.css';
import colors from '../utils/colors';

const Colors = () => {
  return (
    <section>
      {' '}
      <h1>Colors :</h1>
      <p>
        <strong>TornadoCSS</strong> includes a bunch of color palettes
        out-of-the-box that is a great starting point if you don’t have your own
        specific branding in mind.
      </p>
      <p className='info'>
        For more information you can hover over the color you like.
      </p>
      <h2>Note</h2>
      <p className='info'>
        You can use the colors palettes with text color{' '}
        <span className='tag'>.text-`(color)`-`(number*)`0</span> as well with
        background color <span className='tag'>.bg-`(color)`-`(number*)`0</span>{' '}
      </p>
      <p>
        <strong>number: from 1 to 8</strong>
      </p>
      {colors.map((color, index) => (
        <Color key={index} {...color} />
      ))}
      <h3>White</h3>
      <div className='colors'>
        <div className='grid-8'>
          <Bg bg='#fff' color='#000' />
        </div>
      </div>
      <h3>Black</h3>
      <div className='colors'>
        <div className='grid-8'>
          <Bg bg='#000' color='#fff' />
        </div>
      </div>
    </section>
  );
};
export default Colors;
