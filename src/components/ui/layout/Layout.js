import React, { Component } from 'react';
import Header from './header';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sv-row sv-no-margins">
        <Header />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
