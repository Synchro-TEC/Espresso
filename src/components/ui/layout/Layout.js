import React, { Component } from 'react';
import Header from './header';
import { SvRow } from 'syntec-apollo-11';

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
      <SvRow className="sv-ma--0">
        <Header />
        {this.props.location.pathname === '/' ? this.renderHome() : this.renderPage()}
      </SvRow>
    );
  }
}

export default Layout;
