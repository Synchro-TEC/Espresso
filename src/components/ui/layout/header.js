import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="out-header">
      <header>
        <img src={`${process.env.PUBLIC_URL}images/logo-espresso.svg`} className="sv-mt--25" height="30" width="auto" />

        <ul className="navigation">
          <li>
            <NavLink exact to="/" activeClassName="selected">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/guide" activeClassName="selected">
              GUIA DE USO
            </NavLink>
          </li>
          <li>
            <NavLink to="/components" activeClassName="selected">
              COMPONENTES
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
