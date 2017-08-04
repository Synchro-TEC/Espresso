import React, { Component } from 'react';
import Header from './header';

class LayoutHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sv-row sv-no-margins">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default LayoutHome;
