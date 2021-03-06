import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
const Layout = ({ cssVersion }) => {
  return (
    <>
      <Nav cssVersion={cssVersion} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
