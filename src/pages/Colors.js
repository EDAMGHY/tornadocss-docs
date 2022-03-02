import React from 'react';
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
      <p class='info'>
        <strong>
          For more information you can hover over the color you like.
        </strong>
      </p>
      {colors.map((color, index) => (
        <Color key={index} {...color} />
      ))}
    </section>
  );
};
export default Colors;
