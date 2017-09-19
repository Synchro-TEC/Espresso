export default {
  smallModal: `<Modal
    title="Exemplo Modal"
    type="SMALL"
    show={this.state.modalIsOpen}
    close={() => { this.setState(modalIsOpen:false)}}
    showButtons={false}
    enableScrollbars={true}
>
    <p>
        Lorem ipsum ...
    </p>
</Modal>
`,
  mediumModal: `<Modal
  title="Modal Médio"
  type="MEDIUM"
  show={this.state.modalIsOpen}
  close={() => { this.setState(modalIsOpen:false)}}
  showButtons={false}
  enableScrollbars={true}
>
  <p>
      Lorem ipsum ...
  </p>
</Modal>`,
  largeModal: `<Modal
  title="Modal Grande"
  type="LARGE"
  show={this.state.modalIsOpen}
  close={() => { this.setState(modalIsOpen:false)}}
  showButtons={false}
  enableScrollbars={true}
>
  <p>
      Lorem ipsum ...
  </p>
</Modal>`,
  customModal: `<Modal
  title="Exemplo Modal"
  type="CUSTOM"
  show={this.state.modalIsOpen}
  close={() => { this.setState(modalIsOpen:false)}}
  showButtons={false}
  enableScrollbars={true}
>
  <p>
      Lorem ipsum ...
  </p>
</Modal>`,
};
