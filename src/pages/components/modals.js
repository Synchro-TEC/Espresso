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
      modalSize: 'small',
      modalIsOpen: false,
      customStyle: null,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  }

  handleShowModal(
    title = 'Exemplo Modal',
    size = 'small',
    customStyle = null,
    customWidthPercent = null,
    buttonsTheme = 'info',
    customHeightInPixels = null,
    showButtons = true
  ) {
    this.setState({
      modalTitle: title,
      modalSize: size,
      modalIsOpen: true,
      customStyle: customStyle,
      customWidthPercent: customWidthPercent,
      buttonsTheme: buttonsTheme,
      customHeightInPixels: customHeightInPixels,
      showButtons: showButtons,
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
            <p>Componente para a criação de janelas do tipo Modal e Diaologs.</p>

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
              language="jsx"
              height="150px"
            />

            <h4 className="sv-fw-normal sv-ts-i">Modal Médio</h4>
            <hr className="sv-mb--10" />
            <ShowCase
              example={() =>
                <p>
                  <button className="sv-button info" onClick={() => this.handleShowModal('Modal Médio', 'medium')}>
                    Exibir modal
                  </button>
                </p>}
              code={modalCodes.mediumModal}
              language="jsx"
              height="150px"
            />

            <h4 className="sv-fw-normal sv-ts-i">Modal Grande</h4>
            <hr className="sv-mb--10" />
            <ShowCase
              example={() =>
                <p>
                  <button
                    className="sv-button info"
                    onClick={() => this.handleShowModal('Modal Grande', 'large', null, null, 'info', null, false)}
                  >
                    Exibir modal
                  </button>
                </p>}
              code={modalCodes.largeModal}
              language="jsx"
              height="150px"
            />

            <h4 className="sv-fw-normal sv-ts-i">Modal Custom</h4>
            <hr className="sv-mb--10" />
            <ShowCase
              example={() =>
                <p>
                  <button
                    className="sv-button info"
                    onClick={() => this.handleShowModal(null, 'custom', CUSTOM_STYLE, 77, 'primary', 120)}
                  >
                    Exibir modal
                  </button>
                </p>}
              code={modalCodes.customModal}
              language="jsx"
              height="150px"
            />

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
                  <td>
                    <code>buttonsTheme</code>
                  </td>
                  <td>
                    <code>
                      oneOf(['primary', <strong>'info'</strong>, 'danger', 'warning', 'default'])
                    </code>
                  </td>
                  <td>
                    Tema dos botões de ação: 'primary', 'info', 'danger', 'warning', 'default'. Padrão:{' '}
                    <strong>info</strong>
                  </td>
                </tr>
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
                  <td>closeOnEsc</td>
                  <td>bool</td>
                  <td>
                    Indica se o modal será fechado ao pressionar a tecla ESC. Padrão: <strong>true</strong>
                  </td>
                </tr>
                <tr>
                  <td>confirmButtonText</td>
                  <td>string</td>
                  <td>
                    Texto do botão de principal. Padrão: <strong>Confirmar</strong>
                  </td>
                </tr>
                <tr>
                  <td>customHeightInPixels</td>
                  <td>number</td>
                  <td>Define a altura do modal em pixel.</td>
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
                  <td>customWidthPercent</td>
                  <td>number</td>
                  <td>Indica a largura do modal quando o type custom é escolhido.</td>
                </tr>
                <tr>
                  <td>isVisible</td>
                  <td>bool</td>
                  <td>
                    Indica se deve ser exibido. Padrão: <strong>false</strong>
                  </td>
                </tr>
                <tr>
                  <td>onConfirm</td>
                  <td>function</td>
                  <td>Função a ser executada ao clicar no botão de confirmar</td>
                </tr>
                <tr>
                  <td>onClose</td>
                  <td>function</td>
                  <td>Função a ser executada ao clicar no botão de fechar o modal</td>
                </tr>
                <tr>
                  <td>showButtons</td>
                  <td>bool</td>
                  <td>
                    Indica se devem ser exibidos botões de ação (cancelar e confirmar). Padrão: <strong>true</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>title</code>
                  </td>
                  <td>
                    <code>any</code>
                  </td>
                  <td>Título do modal, aceita também um Componente como valor.</td>
                </tr>
                <tr>
                  <td>
                    <code>transitionDuration</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Duração da animação em MS.</td>
                </tr>
                <tr>
                  <td>
                    <code>type</code>
                  </td>
                  <td>
                    <code>
                      oneOf([<strong>'small'</strong>, 'medium', 'large', 'custom'])
                    </code>
                  </td>
                  <td>
                    Tipo do modal. Valores aceitos: 'small', 'medium', 'large', 'custom'. Padrão:{' '}
                    <strong>medium</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
        <Modal
          buttonsTheme={this.state.buttonsTheme}
          customHeightInPixels={this.state.customHeightInPixels}
          customStyle={this.state.customStyle}
          customWidthPercent={this.state.customWidthPercent}
          isVisible={this.state.modalIsOpen}
          onClose={this.handleCloseModal}
          onConfirm={() => alert('confirm clicked!')}
          showButtons={this.state.showButtons}
          title={this.state.modalTitle}
          type={this.state.modalSize}
        >
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default Modals;
