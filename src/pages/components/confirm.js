import React, { Component } from 'react';
import { Confirm, Hermes } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import confirmCodes from '../../codes/confirm';

class ConfirmPage extends Component {
  constructor(props) {
    super(props);

    this.handleShowConfirm = this.handleShowConfirm.bind(this);
  }

  handleShowConfirm() {
    var options = {
      title: 'Confirmar operação',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
    };
    Confirm(
      'Confirma o pagamento do valor de R$ 1.750,00, a ser debitado diretamente de sua conta corrente?',
      options
    ).then(
      result => {
        Hermes.setContext('success');
        Hermes.setTitle('Sucesso');
        Hermes.addMessage('Pagamento efetuado com sucesso.', true);
      },
      result => {
        Hermes.setContext('error');
        Hermes.setTitle('Erro');
        Hermes.addMessage('O pagamento não foi realizado.', true);
      }
    );
  }

  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">Confirm</h3>
        <Tabs className="ReactTabs">
          <TabList className="ReactTabs__tab-list">
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Apollo-11
            </Tab>
          </TabList>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <h4 className="sv-fw-normal sv-ts-i">Propriedades do Confirm</h4>
            <hr />
            <table className="sv-table with--hover with--borders">
              <thead>
                <tr>
                  <th>Propriedade</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cancelButtonText</td>
                  <td>string</td>
                  <td>
                    Texto do botão que cancela a operação (fecha o confirm). Padrão: <strong>Não</strong>
                  </td>
                </tr>
                <tr>
                  <td>confirmButtonText</td>
                  <td>string</td>
                  <td>Texto do botão de confirmação</td>
                </tr>
                <tr>
                  <td>
                    <code>title</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Título do dialog</td>
                </tr>
              </tbody>
            </table>

            <h4 className="sv-fw-normal sv-ts-i">Confirm</h4>
            <hr className="sv-mb--10" />
            <ShowCase
              example={() =>
                <p>
                  <button className="sv-button info" onClick={this.handleShowConfirm}>
                    Exibir confirm
                  </button>
                </p>}
              code={confirmCodes.confirmExample}
              height="150px"
            />
          </TabPanel>
        </Tabs>
        <Hermes />
      </div>
    );
  }
}

export default ConfirmPage;
