import React from 'react';

const Bg = ({ color, bg, index }) => {
  return (
    <div
      style={{
        background: bg,
        color: color ? color : '#444',
        justifyContent: `${index === undefined ? 'center' : 'space-between'}`,
      }}
    >
      <span>{index !== undefined ? `${index + 1}0` : ''}</span>
      <span>{bg}</span>
    </div>
  );
};

export default Bg;
