import React from 'react';
import Bg from './Bg';
const Color = ({ bgs, name }) => {
  return (
    <>
      <h3>{name[0].toUpperCase() + name.slice(1)}</h3>
      <div className='colors'>
        <div className='grid-8'>
          {bgs
            ? bgs.map((b, index) => <Bg key={index} index={index} {...b} />)
            : 'Loading'}
        </div>
      </div>
    </>
  );
};
export default Color;
