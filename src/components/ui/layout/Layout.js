import React, { Component } from 'react';
import Header from './header';
import { SvRow } from 'syntec-apollo-11';
import { NavLink } from 'react-router-dom';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.renderHome = this.renderHome.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  renderHome() {
    return (
      <div className="out-content-home">
        {this.props.children}
      </div>
    );
  }

  renderGuideMenu() {
    return (
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to="/guide">
            Introdução
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/guide/espacamentos">
            Espaçamentos
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/guide/alinhamentos">
            Alinhamento
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/guide/contraste">
            Contraste
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/guide/sejadireto">
            Seja Direto
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/guide/synchro">
            Synchro Headers
          </NavLink>
        </li>
      </ul>
    );
  }

  renderComponentsMenu() {
    return (
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to="/components">
            Component
          </NavLink>
        </li>
      </ul>
    );
  }

  renderPage() {
    return (
      <div className="content">
        <aside className="inner-menu sv-pv--20">
          {this.props.match.path.includes('/guide') ? this.renderGuideMenu() : this.renderComponentsMenu()}
        </aside>
        <section className="inner-content sv-pa--20">
          {this.props.children}
        </section>
      </div>
    );
  }

  render() {
    return (
      <SvRow className="sv-ma--0">
        <Header />
        {this.props.location.pathname === '/' ? this.renderHome() : this.renderPage()}
      </SvRow>
    );
  }
}

export default Layout;
