import React from 'react';

const Bg = ({ color, bg, index }) => {
  return (
    <div
      className='bg-blue-10'
      style={{
        background: bg,
        color: color ? color : '#444',
      }}
    >
      <span>{index + 1}0</span>
      <span>#232980</span>
    </div>
  );
};

export default Bg;
