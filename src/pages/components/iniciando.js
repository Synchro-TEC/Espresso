import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import html from 'react-syntax-highlighter/dist/languages/xml';
import bash from 'react-syntax-highlighter/dist/languages/bash';
import atom from 'react-syntax-highlighter/dist/styles/atom-one-light';
import code from '../../codes/install';
registerLanguage('html', html);
registerLanguage('bash', bash);

class Iniciando extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">INICIANDO</h3>
        <h4 className="sv-fw-normal sv-fm-i">Saturn-V</h4>
        <hr />
        <p>
          A única configuração para o uso do Saturn-V é fazer o link dos arquivos do Saturn-V, diretamente de nossa CDN
          em seu código HTML.
        </p>
        <SyntaxHighlighter language="html" style={atom}>
          {code.installSaturn}
        </SyntaxHighlighter>
        <h4 className="sv-fw-normal sv-fm-i">Apollo-11</h4>
        <hr />
        <p>Para instalar o Apollo-11 basta executar um dos comandos, dependendo de como você gerencia os pacotes.</p>
        <p>
          <b>Lembrando que para o uso dos Apollo-11 é mandatório o uso do Saturn-V.</b>
        </p>
        <SyntaxHighlighter language="bash" style={atom}>
          {code.installApollo}
        </SyntaxHighlighter>
      </div>
    );
  }
}
export default Iniciando;
