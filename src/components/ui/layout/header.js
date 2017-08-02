import React from 'react';

const Header = () => {
  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}images/logo-espresso.svg`} width="150" height="auto" />
    </header>
  );
};

export default Header;
