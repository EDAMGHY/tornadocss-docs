import React from 'react';

const Bg = ({ color, bg }) => {
  return (
    <div
      class='bg-blue-10'
      style={{
        background: bg,
        color: color ? color : '#444',
      }}
    >
      <span>10</span>
      <span>#232980</span>
    </div>
  );
};

export default Bg;
