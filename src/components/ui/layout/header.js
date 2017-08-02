import React from 'react';

const Header = () => {
  return (
    <div className="out-header">
      <header>
        <img src={`${process.env.PUBLIC_URL}images/logo-espresso.svg`} width="250" height="auto" />
      </header>
    </div>
  );
};

export default Header;
