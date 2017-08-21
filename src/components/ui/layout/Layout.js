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
          <NavLink activeClassName="selected" exact to="/guide/consistencia">
            Consistência
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/guide/buttons">
            Buttons
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
            Introdução
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/iniciando">
            Iniciando
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/como-contribuir">
            Como contribuir
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/grid">
            Grid System
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/cores">
            Cores
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/espacamentos">
            Espaçamentos
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/breadcrumbs">
            breadcrumbs
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/loaders">
            loaders
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/messagebox">
            message box
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/tags">
            tags
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/buttons">
            Buttons
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/formularios">
            Formulários
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/tipografia">
            Tipografia
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/cards">
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/listas">
            Listas
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/tabelas">
            Tabelas
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/components/helpers">
            Helpers
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
