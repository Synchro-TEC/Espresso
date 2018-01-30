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
        <SvRow>
          <SvCol className="sv-text-center sv-ph--30">
            <div>
              <img
                className="sv-ma--10"
                height="105"
                width="auto"
                src={process.env.PUBLIC_URL + '/images/startup.svg'}
              />
            </div>
            <h3 className="sv-color--blue-400">HTML/CSS Framework</h3>
            <p className="sv-pa--20 sv-text-large">
              SATURN-V é o nosso Framework CSS, agnóstico de plataformas e sem dependências, é apenas CSS e pode ser
              usado com qualquer stack de tecnologia.
            </p>
            <div className="sv-ml--25">
              <p className="sv-pa--20">
                Para utilizar o Saturn-V em sua aplicação, insira os links abaixo em seu código HTML.
              </p>
              <div className="sv-pa--20">
                <pre className="code-scroll">
                  <SyntaxHighlighter language="html" style={atom}>
                    {code.installSaturn}
                  </SyntaxHighlighter>
                </pre>
              </div>
            </div>
          </SvCol>
          <SvCol className="sv-text-center sv-ph--30">
            <div>
              <img
                className="sv-ma--10"
                height="105"
                width="auto"
                src={process.env.PUBLIC_URL + '/images/atomic.svg'}
              />
            </div>
            <h3 className="sv-color--blue-400">Componentes React</h3>
            <p className="sv-pa--20 sv-text-large">
              APOLLO-11 é o nosso set de componentes React, construído sobre SATURN-V focado na reutilização e
              composição para criar interfaces.
            </p>
            <p className="sv-pa--20">
              Para utilizar o Apollo-11, basta executar um dos seguintes comandos em seu terminal para instalar a
              dependência em seu projeto. A instalação pode ser feita tanto através do npm quanto do yarn.
            </p>
            <p>
              <code className="sv-code">npm install --save syntec-apollo-11</code>
            </p>
            <p>
              <code className="sv-code">yarn add syntec-apollo-11</code>
            </p>
          </SvCol>
        </SvRow>
      </div>
    );
  }
}
export default Components;
