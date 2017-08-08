import React, { Component } from 'react';
import Header from './header';
import { SvRow } from 'syntec-apollo-11';

class LayoutHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SvRow className="sv-ma--0">
        <Header />
        {this.props.children}
      </SvRow>
    );
  }
}

export default LayoutHome;
