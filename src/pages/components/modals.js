import React, { Component } from 'react';
import { Modal } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import modalCodes from '../../codes/modals';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalTitle: 'Exemplo Modal',
      modalSize: 'SMALL',
      modalIsOpen: false,
      customStyle: null,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  }

  handleShowModal(title = 'Exemplo Modal', size = 'SMALL', customStyle = null) {
    this.setState({
      modalTitle: title,
      modalSize: size,
      modalIsOpen: true,
      customStyle: customStyle,
    });
  }

  render() {
    const modalContent = (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lacinia sapien. Quisque nec lacus sit amet
          dolor semper tempus varius eu urna. Sed laoreet ligula quam. In neque justo, tristique sit amet quam id,
          molestie eleifend arcu. Donec rhoncus odio ac rutrum eleifend. Pellentesque sapien est, blandit ut lobortis
          at, aliquet quis lacus. Donec id porta magna. Suspendisse bibendum sodales dui sed tincidunt. Vestibulum at
          egestas elit. Cras ultricies arcu nulla, pulvinar fringilla metus maximus eu. Maecenas auctor efficitur risus
          quis varius. Quisque rhoncus libero turpis, vel gravida ex placerat quis. In hac habitasse platea dictumst.
          Proin imperdiet sem dui, eget auctor tortor lobortis sit amet. Nullam vitae diam massa.
        </p>
        <p>
          Nullam in orci eu erat feugiat ultricies eget sit amet purus. Aenean accumsan, felis id consequat cursus,
          lacus lorem ultrices leo, sit amet convallis odio lorem eget lectus. Phasellus quis elementum ligula. Praesent
          vehicula sem elit. Curabitur vitae metus enim. Donec ac nulla vitae augue feugiat tristique. Donec eu libero
          magna. Morbi id tortor iaculis, blandit nisl id, sollicitudin diam. Vestibulum aliquet, turpis quis dictum
          ullamcorper, felis orci fermentum neque, quis molestie metus ligula nec mauris. Duis at ligula et dolor
          vestibulum posuere vitae id augue. Praesent maximus turpis nisi, at placerat ipsum consequat nec. Nam
          facilisis, eros eget convallis lobortis, nunc urna varius dui, eu pharetra nunc odio id lorem. Aliquam
          vehicula ullamcorper sapien, quis ultrices purus. In non rhoncus nibh.
        </p>
      </div>
    );

    let height = window.screen.availHeight;
    const CUSTOM_STYLE = {
      width: '55%',
      height: height > 768 ? 'auto' : '90%',
      minHeight: '70%',
      top: height > 768 ? '25%' : '30%',
      left: '45%',
    };

    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">Modais</h3>
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
            <h4 className="sv-fw-normal sv-ts-i">Propriedades do Modal</h4>
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
                    Texto do botão que cancela a operação (fecha o modal). Padrão: <strong>Cancelar</strong>
                  </td>
                </tr>
                <tr>
                  <td>children</td>
                  <td>any</td>
                  <td>Conteúdo a ser renderizado no modal</td>
                </tr>
                <tr>
                  <td>close</td>
                  <td>function</td>
                  <td>Função a ser executada ao clicar no botão de fechar o modal</td>
                </tr>
                <tr>
                  <td>confirmButtonText</td>
                  <td>string</td>
                  <td>
                    Texto do botão de sucesso. Padrão: <strong>Cancelar</strong>
                  </td>
                </tr>
                <tr>
                  <td>customStyle</td>
                  <td>object</td>
                  <td>
                    Para modais do tipo CUSTOM, este atributo contém um objeto com as propriedades de estilo a serem
                    aplicadas
                  </td>
                </tr>
                <tr>
                  <td>enableScrollbars</td>
                  <td>bool</td>
                  <td>
                    Indica se o conteúdo do modal, ao ultrapassar as dimensões, devem ser exibidas barras de rolagem.
                    Padrão: <strong>true</strong>
                  </td>
                </tr>
                <tr>
                  <td>handleSave</td>
                  <td>function</td>
                  <td>Função a ser executada ao clicar no botão de confirmar</td>
                </tr>
                <tr>
                  <td>show</td>
                  <td>bool</td>
                  <td>
                    Indica se deve ser exibido. Padrão: <strong>false</strong>
                  </td>
                </tr>
                <tr>
                  <td>showButtons</td>
                  <td>bool</td>
                  <td>
                    Indica se devem ser exibidos botões (cancelar e confirmar). Padrão: <strong>true</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>title</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Título do modal</td>
                </tr>
                <tr>
                  <td>
                    <code>type</code>
                  </td>
                  <td>
                    <code>
                      oneOf([<strong>'SMALL'</strong>, 'MEDIUM', 'LARGE', 'CUSTOM'])
                    </code>
                  </td>
                  <td>
                    Tipo do modal. Valores aceitos: 'SMALL', 'MEDIUM', 'LARGE', 'CUSTOM'. Padrão: <strong>SMALL</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 className="sv-fw-normal sv-ts-i">Modal Pequeno</h4>
            <hr className="sv-mb--10" />
            <ShowCase
              example={() =>
                <p>
                  <button className="sv-button info" onClick={() => this.handleShowModal()}>
                    Exibir modal
                  </button>
                </p>}
              code={modalCodes.smallModal}
              height="150px"
            />

            <h4 className="sv-fw-normal sv-ts-i">Modal Médio</h4>
            <hr className="sv-mb--10" />
            <ShowCase
              example={() =>
                <p>
                  <button className="sv-button info" onClick={() => this.handleShowModal('Modal Médio', 'MEDIUM')}>
                    Exibir modal
                  </button>
                </p>}
              code={modalCodes.mediumModal}
              height="150px"
            />

            <h4 className="sv-fw-normal sv-ts-i">Modal Grande</h4>
            <hr className="sv-mb--10" />
            <ShowCase
              example={() =>
                <p>
                  <button className="sv-button info" onClick={() => this.handleShowModal('Modal Grande', 'LARGE')}>
                    Exibir modal
                  </button>
                </p>}
              code={modalCodes.largeModal}
              height="150px"
            />

            <h4 className="sv-fw-normal sv-ts-i">Modal Custom</h4>
            <hr className="sv-mb--10" />
            <ShowCase
              example={() =>
                <p>
                  <button
                    className="sv-button info"
                    onClick={() => this.handleShowModal('Modal Customizado', 'CUSTOM', CUSTOM_STYLE)}
                  >
                    Exibir modal
                  </button>
                </p>}
              code={modalCodes.customModal}
              height="150px"
            />
          </TabPanel>
        </Tabs>
        <Modal
          title={this.state.modalTitle}
          type={this.state.modalSize}
          show={this.state.modalIsOpen}
          customStyle={this.state.customStyle}
          close={this.handleCloseModal}
          showButtons={false}
          enableScrollbars={true}
        >
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default Modals;
