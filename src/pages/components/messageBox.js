import React, { Component } from 'react';
import { SvRow, SvCol, Hermes } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import messageBoxCodes from '../../codes/messageBox';
import hermesCodes from '../../codes/hermes';

const MessageBoxInfo = () =>
  <div className="sv-messagebox info">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Info Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxSuccess = () =>
  <div className="sv-messagebox success">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Success Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxError = () =>
  <div className="sv-messagebox error">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Error Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxWarning = () =>
  <div className="sv-messagebox warning">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Warning Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const HermesExamples = () =>
  <div>
    <p className="sv-text-center sv-mt--15 sv-mb--20">
      <button className="sv-button default sv-mr--10" onClick={() => Hermes.addMessage(`Mensagem ${Date.now()}`, true)}>
        Exibir Menssagem
      </button>
      <button className="sv-button default" onClick={() => Hermes.setTitle(`Novo titulo ${Date.now()}`)}>
        Alterar o Título da Caixa de Mensagem
      </button>
    </p>
    <p className="sv-text-center sv-mt--15">
      <button
        className="sv-button primary sv-mr--10"
        onClick={() => {
          adicionarMensagem();
          mudarContexto('success');
        }}
      >
        Contexto Sucesso
      </button>
      <button
        className="sv-button info sv-mr--10"
        onClick={() => {
          adicionarMensagem();
          mudarContexto('info');
        }}
      >
        Contexto Informativo
      </button>
      <button
        className="sv-button warning sv-mr--10"
        onClick={() => {
          adicionarMensagem();
          mudarContexto('warning');
        }}
      >
        Contexto Aviso
      </button>
      <button
        className="sv-button danger sv-mr--10"
        onClick={() => {
          adicionarMensagem();
          mudarContexto('error');
        }}
      >
        Contexto Erro
      </button>
    </p>
    <p className="sv-text-center">
      <button className="sv-button default sv-mr--10" onClick={() => Hermes.setPosition('top')}>
        Superior
      </button>
      <button className="sv-button default sv-mr--10" onClick={() => Hermes.setPosition('bottom')}>
        Inferior
      </button>
    </p>
  </div>;

const adicionarMensagem = () => {
  Hermes.addMessage(`Mensagem ${Date.now()}`, true);
};

const mudarContexto = context => {
  Hermes.setContext(context);
};

class MessageBox extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">MESSAGE BOX</h3>

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
            <h4 className="sv-fw-normal sv-ts-i">Message Box Success</h4>
            <hr />
            <ShowCase example={MessageBoxSuccess} code={messageBoxCodes.messageBoxSuccess} height="150px" />
            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Message Box Error</h4>
            <hr />
            <ShowCase example={MessageBoxError} code={messageBoxCodes.messageBoxError} height="150px" />
            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Message Box Info</h4>
            <hr />
            <ShowCase example={MessageBoxInfo} code={messageBoxCodes.messageBoxInfo} height="150px" />
            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Message Box Warning</h4>
            <hr />
            <ShowCase example={MessageBoxWarning} code={messageBoxCodes.messageBoxWarning} height="150px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <h4 className="sv-fw-normal sv-ts-i">Hermes</h4>
            <hr />
            <p>
              O Hermes é o componente React que implementa um sistema de notificações usando os estilos do Message Box.
            </p>
            <p className="sv-mb--20">
              O uso do Hermes é ligeiramente diferente de outros componentes, ele deve ser injetado em apenas um local
              na aplicação, geralmente no componente que define o layout da aplicação. Uma vez que ele está injetado ele
              funciona como um listener, independente de onde deseja na aplicação, para exibir uma mensagem você precisa
              apenas importar o Hermes e fazer as chamadas dos métodos estáticos disponíveis.
            </p>
            <table className="sv-table with--hover with--borders sv-mb--20">
              <thead>
                <tr>
                  <th>Método</th>
                  <th>Descrição</th>
                  <th>Parâmetros</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className="sv-code">Hermes.addMessage(message, isDeletable);</code>
                  </td>
                  <td>Adicionar uma mensagem na Caixa de Mensagens</td>
                  <td>
                    <ul>
                      <li>
                        <code className="sv-code">message</code> String contendo a Mensagem.
                      </li>
                      <li>
                        <code className="sv-code">isDeletable</code> Bool que define se a mensagem pode ser apagada
                        pelo. Usuário
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className="sv-code">Hermes.setTitle(title);</code>
                  </td>
                  <td>Define o título da Caixa de Mensagens</td>
                  <td>
                    <ul>
                      <li>
                        <code className="sv-code">title</code> String contendo o Título.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className="sv-code">Hermes.setContext(newContext);</code>
                  </td>
                  <td>Define o contexto da Caixa de Mensagens</td>
                  <td>
                    <ul>
                      <li>
                        <code className="sv-code">newContext</code> String contendo o contexto, as opções são:{' '}
                        <b>info</b>, <b>error</b>, <b>success</b> ou <b>warning</b>.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className="sv-code">Hermes.clearMessages();</code>
                  </td>
                  <td>Limpa todas as mensagens da Caixa de Mensagens</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>
                    <code className="sv-code">Hermes.setPosition(newPosition);</code>
                  </td>
                  <td>Muda a posição de exibição da Caixa de Mensagens</td>
                  <td>
                    <ul>
                      <li>
                        <code className="sv-code">newPosition</code> String contendo a posição de exibição, as opções
                        são: <b>top</b> ou <b>bottom</b>.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <ShowCase example={HermesExamples} code={hermesCodes.example1} height="450px" language="jsx" />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default MessageBox;
