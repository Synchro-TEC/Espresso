import React, { Component } from 'react';
import Header from './header';

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

  renderPage() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <div className="sv-row sv-no-margins">
        <Header />
        {this.props.location.pathname === '/' ? this.renderHome() : this.renderPage()}
      </div>
    );
  }
}

export default Layout;
