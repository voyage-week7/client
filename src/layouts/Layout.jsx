import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header>Header</header>
      {children}
      <nav>navbar</nav>
    </>
  );
};

export default Layout;
