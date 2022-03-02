import React from 'react';
import Bg from './Bg';
const Color = ({ bgs, name }) => {
  return (
    <>
      <h3>{name[0].toUpperCase() + name.slice(1)}</h3>
      <div class='colors'>
        <div class='grid-8'>
          {bgs ? bgs.map((b, index) => <Bg key={index} {...b} />) : 'Loading'}
        </div>
      </div>
    </>
  );
};
export default Color;
