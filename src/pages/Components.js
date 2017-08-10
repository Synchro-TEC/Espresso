import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Components extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--20">INTRODUÇÃO</h3>
        <SvRow>
          <SvCol>
            <img className="sv-mt--15" src={`${process.env.PUBLIC_URL}images/intro-components.svg`} alt="Introdução" />
          </SvCol>
        </SvRow>
      </div>
    );
  }
}
export default Components;
