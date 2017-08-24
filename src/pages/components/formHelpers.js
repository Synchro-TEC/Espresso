import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import formCodes from '../../codes/forms';

const progressBar = () =>
  <form className="sv-form">
    <progress value="54" max="100" />
  </form>;

const validInvalid = () =>
  <form className="sv-form">
    <SvRow withGutter>
      <SvCol>
        <label>
          <span>Campo validado</span>
          <input type="text" placeholder="valid" className="is--valid" />
        </label>
      </SvCol>
      <SvCol>
        <label>
          <span>Campo Invalidado</span>
          <input type="text" placeholder="invalid" className="is--invalid" />
        </label>
      </SvCol>
    </SvRow>
  </form>;

const fieldTextMono = () =>
  <form className="sv-form">
    <SvRow withGutter>
      <SvCol>
        <label>
          <span>Campo normal</span>
          <input type="text" placeholder="normal" />
        </label>
      </SvCol>
      <SvCol>
        <label>
          <span>Campo Monospaced (Code)</span>
          <input type="text" placeholder="monospaced" className="code" />
        </label>
      </SvCol>
    </SvRow>
  </form>;

const labelMessages = () =>
  <form className="sv-form">
    <SvRow withGutter>
      <SvCol>
        <label>
          <span data-info="(8 caracters)">CEP</span>
          <input type="text" />
        </label>
      </SvCol>
      <SvCol>
        <label>
          <span data-info="(8 caracters)" data-error="Cep inválido">
            CEP
          </span>
          <input type="text" className="is--invalid" />
        </label>
      </SvCol>
    </SvRow>
  </form>;

class FormHelpersPage extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">FORM HELPERS</h3>
        <Tabs className="ReactTabs">
          <TabList className="ReactTabs__tab-list">
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Saturn-V
            </Tab>
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Apollo-11
            </Tab>
          </TabList>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <h4 className="sv-fw-normal sv-ts-i">Progress Bar</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={progressBar} code={formCodes.progressBar} height="80px" />

            <h4 className="sv-fw-normal sv-ts-i">Inputs válidos e inválidos</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={validInvalid} code={formCodes.validInvalid} height="120px" />

            <h4 className="sv-fw-normal sv-ts-i">Inputs Monospaced</h4>
            <hr className="sv-mb--10" />
            <p>
              O usu principal de inputs monospaced é para cenários onde o tipo de dado inserido é algum tipo de
              configuração.
            </p>
            <ShowCase example={fieldTextMono} code={formCodes.inputMono} height="120px" />

            <h4 className="sv-fw-normal sv-ts-i">Labels com mensagens</h4>
            <hr className="sv-mb--10" />
            <p>
              Temos dois tipos de informação nos labels, ambos através de <code className="sv-code">data-</code>{' '}
              atributos. Os atributos disponíveis são <code className="sv-code">data-info</code> para detalhes
              informativos, como campo opcional ou obrigatório e <code className="sv-code">data-error</code> para exibir
              possíveis erros de validação.
            </p>
            <ShowCase example={labelMessages} code={formCodes.labelsMessage} height="120px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default FormHelpersPage;
