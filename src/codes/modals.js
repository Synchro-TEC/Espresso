export default {
  smallModal: `import { Modal } from 'syntec-apollo-11';

<Modal
    title="Exemplo Modal"
    type="small"
    isVisible={this.state.modalIsOpen}
    onClose={() => { this.setState(modalIsOpen:false)}}
>
    <p>
        Lorem ipsum ...
    </p>
</Modal>
`,
  mediumModal: `import { Modal } from 'syntec-apollo-11';
  
<Modal
  title="Modal Médio"
  type="medium"
  isVisible={this.state.modalIsOpen}
  onClose={() => { this.setState(modalIsOpen:false)}} 
>
  <p>
      Lorem ipsum ...
  </p>
</Modal>`,
  largeModal: `import { Modal } from 'syntec-apollo-11';
  
<Modal
  title="Modal Grande"
  type="large"
  isVisible={this.state.modalIsOpen}
  onClose={() => { this.setState(modalIsOpen:false)}}
  showButtons={false}
>
  <p>
      Lorem ipsum ...
  </p>
</Modal>`,
  customModal: `import { Modal } from 'syntec-apollo-11';

<Modal
  customWidthPercent={77}
  customHeightInPixels={120}
  buttonsTheme="primary"
  type="custom"
  isVisible={this.state.modalIsOpen}
  onClose={() => { this.setState(modalIsOpen:false)}}
>
  <p>
      Lorem ipsum ...
  </p>
</Modal>`,
};
