import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import code from '../codes/install';
import atom from 'react-syntax-highlighter/dist/styles/atom-one-light';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';

class Components extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--20">INTRODUÇÃO</h3>
        <SvRow>
          <SvCol>
            <img
              className="sv-mt--15"
              src={`${process.env.PUBLIC_URL}images/intro-components-2.svg`}
              alt="Introdução"
            />
          </SvCol>
        </SvRow>
      </div>
    );
  }
}
export default Components;
