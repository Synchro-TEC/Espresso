import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import typographyCodes from '../../codes/typography';

const headers = () =>
  <div>
    <h1>Header 1 - h1</h1>
    <h2>Header 2 - h2</h2>
    <h3>Header 3 - h3</h3>
    <h4>Header 4 - h4</h4>
    <h5>Header 5 - h5</h5>
    <h6>Header 6 - h6</h6>
  </div>;

const defaultP = () =>
  <p>
    Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing augue mus a hendrerit consectetur etiam a
    conubia aenean at eu gravida suspendisse justo diam parturient sodales et. Orci venenatis a adipiscing massa
    senectus himenaeos ligula tellus aptent elit vestibulum accumsan a parturient volutpat dictum. Vestibulum nisi
    dignissim elit sociosqu hendrerit mus a id ullamcorper neque adipiscing sed nam in orci cursus a venenatis.
  </p>;

const textSizes = () =>
  <div>
    <p className="sv-text-smaller">
      Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing augue mus a hendrerit consectetur etiam a
      conubia aenean at eu gravida suspendisse justo diam parturient sodales et. Orci venenatis a adipiscing massa
      senectus himenaeos ligula tellus aptent elit vestibulum accumsan a parturient volutpat dictum.
    </p>
    <p className="sv-text-small">
      Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing augue mus a hendrerit consectetur etiam a
      conubia aenean at eu gravida suspendisse justo diam parturient sodales et. Orci venenatis a adipiscing massa
      senectus himenaeos ligula tellus aptent elit vestibulum accumsan a parturient volutpat dictum.
    </p>
    <p className="sv-text-large">
      Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing augue mus a hendrerit consectetur etiam a
      conubia aenean at eu gravida suspendisse justo diam parturient sodales et. Orci venenatis a adipiscing massa
      senectus himenaeos ligula tellus aptent elit vestibulum accumsan a parturient volutpat dictum.
    </p>
  </div>;

const fontWeights = () =>
  <div>
    <p className="sv-fw-thin">
      Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing augue mus a hendrerit consectetur etiam a
      conubia aenean at eu gravida suspendisse justo diam parturient sodales et.
    </p>
    <p className="sv-fw-normal">
      Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing augue mus a hendrerit consectetur etiam a
      conubia aenean at eu gravida suspendisse justo diam parturient sodales et.
    </p>
    <p className="sv-fw-bold">
      Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing augue mus a hendrerit consectetur etiam a
      conubia aenean at eu gravida suspendisse justo diam parturient sodales et.
    </p>
  </div>;

const textStyles = () =>
  <div>
    <p className="sv-ts-i">Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing.</p>
    <p className="sv-ts-u">Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing.</p>
    <p className="sv-ts-lt">Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing.</p>
  </div>;

const textTrans = () =>
  <div>
    <p className="sv-tt-u">Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing.</p>
    <p className="sv-tt-l">Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing.</p>
    <p className="sv-tt-c">Ultricies imperdiet ullamcorper per est nascetur parturient a adipiscing.</p>
  </div>;

class Typograph extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">TIPOGRAFIA</h3>
        <Tabs className="ReactTabs">
          <TabList className="ReactTabs__tab-list">
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Saturn-V
            </Tab>
          </TabList>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>A font padrão definida pelo Saturn-V é a Fira Sans</p>
            <h4 className="sv-fw-normal sv-ts-i">Headers Padrão</h4>
            <hr />
            <ShowCase example={headers} code={typographyCodes.headers} height="180px" />
            <h4 className="sv-fw-normal sv-mt--20 sv-ts-i">Parágrafos</h4>
            <hr /> augue mus a hendrerit consectetur etiam a conubia aenean at eu gravida suspendisse justo diam
            parturient sodales et augue mus a hendrerit consectetur etiam a conubia aenean at eu gravida suspendisse
            justo diam parturient sodales et augue mus a hendrerit consectetur etiam a conubia aenean at eu gravida
            suspendisse justo diam parturient sodales et
            <ShowCase example={defaultP} code={typographyCodes.defaultP} height="80px" />
            <h4 className="sv-fw-normal sv-mt--20 sv-ts-i">Variações de Texto</h4>
            <hr />
            <h5 className="sv-fw-normal sv-ts-i sv-mt--10">Tamanho</h5>
            <p>
              Além do tamanho padrão do texto, temos modificadores para textos com tamanho maior (<code className="sv-code">sv-text-large</code>)
              e menores (<code className="sv-code">sv-text-small</code> e{' '}
              <code className="sv-code">sv-text-smaller</code>) que o padrão.
            </p>
            <ShowCase example={textSizes} code={typographyCodes.textSises} height="160px" />
            <h5 className="sv-fw-normal sv-ts-i sv-mt--10">Intensidade</h5>
            <p>
              Temos disponíveis 3 níveis de intensidade do texto, <code className="sv-code">sv-fw-thin</code>,{' '}
              <code className="sv-code">sv-fw-normal</code> e <code className="sv-code">sv-fw-bold</code>.
            </p>
            <ShowCase example={fontWeights} code={typographyCodes.textWeights} height="160px" />
            <h5 className="sv-fw-normal sv-ts-i sv-mt--10">Estilos</h5>
            <p>
              Temos disponíveis 3 estilos modificadores de texto, <code className="sv-code">sv-ts-i</code> para itático,{' '}
              <code className="sv-code">sv-ts-u</code> para underline e <code className="sv-code">sv-ts-lt</code> para
              line through.
            </p>
            <ShowCase example={textStyles} code={typographyCodes.textStyles} height="160px" />
            <h5 className="sv-fw-normal sv-ts-i sv-mt--10">Estilos</h5>
            <p>
              Estão disponíveis 3 opções para transformação de texto, <code className="sv-code">sv-tt-u</code> para
              texto em uppercase , <code className="sv-code">sv-tt-l</code> para texto em lowercase e{' '}
              <code className="sv-code">sv-tt-c</code> para textos capitalized.
            </p>
            <ShowCase example={textTrans} code={typographyCodes.textTrans} height="160px" />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Typograph;
