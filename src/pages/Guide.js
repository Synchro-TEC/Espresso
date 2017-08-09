import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Guide extends Component {
  render() {
    return (
      <div>
        <SvRow>
          <SvCol>
            <h3 className="sv-fw-normal">INTRODUÇÃO</h3>
            <img className="sv-mt--15" src={`${process.env.PUBLIC_URL}images/introduction.svg`} alt="Introdução" />
          </SvCol>
        </SvRow>
      </div>
    );
  }
}
export default Guide;
