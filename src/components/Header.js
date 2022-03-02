import React from 'react';
const Header = ({ title, content }) => {
  return (
    <section>
      <h1>{title} :</h1>
      {content}
    </section>
  );
};
export default Header;
