export default {
  example1: `
<button class='sv-button primary'>Solid Button</button>
<button class='sv-button out-primary'>Outline Button</button>
<button class='sv-button link link-primary'>Link Button</button>`,
  example2: `
<button class="sv-button primary">Primary</button>
<button class="sv-button info">Info</button>
<button class="sv-button danger">Danger</button>
<button class="sv-button warning">Warning</button>
<button class="sv-button default">Default</button>

<button class="sv-button out-primary">Primary</button>
<button class="sv-button out-info">Info</button>
<button class="sv-button out-danger">Danger</button>
<button class="sv-button out-warning">Warning</button>
<button class="sv-button out-default">Default</button>

<button class="sv-button link link-primary">Primary</button>
<button class="sv-button link link-info">Info</button>
<button class="sv-button link link-danger">Danger</button>
<button class="sv-button link link-warning">Warning</button>
<button class="sv-button link link-default">Default</button>`,
  example3: `
<button class="sv-button primary small">Primary</button>
<button class="sv-button info small">Info</button>
<button class="sv-button danger small">Danger</button>
<button class="sv-button warning small">Warning</button>
<button class="sv-button default small">Default</button>

<button class="sv-button out-primary small">Primary</button>
<button class="sv-button out-info small">Info</button>
<button class="sv-button out-danger small">Danger</button>
<button class="sv-button out-warning small">Warning</button>
<button class="sv-button out-default small">Default</button>

<button class="sv-button link link-primary small">Primary</button>
<button class="sv-button link link-info small">Info</button>
<button class="sv-button link link-danger small">Danger</button>
<button class="sv-button link link-warning small">Warning</button>
<button class="sv-button link link-default small">Default</button>`,
  example4: `
<button class="sv-button primary full">Full</button>
<button class="sv-button out-primary full">Full</button>
`,
  animated: `<button class="sv-bt-animated primary mail">
  <span>Enviar</span>
</button>
<button class="sv-bt-animated danger delete">
  <span>Excluir</span>
</button>
<button class="sv-bt-animated default view">
  <span>Visualizar</span>
</button>
<button class="sv-bt-animated info exit">
  <span>Sair</span>
</button>
<button class="sv-bt-animated info search">
  <span>Procurar</span>
</button>
<button class="sv-bt-animated info open">
  <span>Abrir</span>
</button>
<button class="sv-bt-animated info upload">
  <span>Upload</span>
</button>
<button class="sv-bt-animated info download">
  <span>Download</span>
</button>`,

  example1Apollo: `
  import React, { Component } from 'react';
  import { SvButton, SvButtonOutline, SvButtonLink } from 'syntec-apollo-11';

  class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <div>
          <SvButton className="sv-mr--5" color="primary">
            Primary
          </SvButton>
          <SvButton className="sv-mr--5">
            Default
          </SvButton>
          <SvButtonOutline className="sv-mr--5" color="primary">
            Primary
          </SvButtonOutline>
          <SvButtonOutline className="sv-mr--5">
            Default
          </SvButtonOutline>
          <SvButtonLink className="sv-mr--5" color="primary">
            Primary
          </SvButtonLink>
          <SvButtonLink className="sv-mr--5">
            Default
          </SvButtonLink>
        </div>
      );
    }
  }
  `,

  smallExampleApollo: `
  import React, { Component } from 'react';
  import { SvButton, SvButtonOutline, SvButtonLink } from 'syntec-apollo-11';

  class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <div>
          <SvButtonLink className="sv-mr--5" color="primary" small>
            Primary
          </SvButtonLink>
          <SvButtonLink className="sv-mr--5" small>
            Default
          </SvButtonLink>
          <SvButtonOutline className="sv-mr--5" color="primary" small>
            Primary
          </SvButtonOutline>
          <SvButtonOutline className="sv-mr--5" small>
            Default
          </SvButtonOutline>
          <SvButtonLink className="sv-mr--5" color="primary" small>
            Primary
          </SvButtonLink>
          <SvButtonLink className="sv-mr--5" small>
            Default
          </SvButtonLink>
        </div>
      );
    }
  }
  `,

  fullExampleApollo: `  import React, { Component } from 'react';
  import { SvButton, SvButtonOutline, SvButtonLink } from 'syntec-apollo-11';

  class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <div>
          <SvButton className="sv-mr--5" color="primary" full>
            Primary
          </SvButton>

          <SvButtonOutline className="sv-mr--5" color="info" full>
            Info
          </SvButtonOutline>
        </div>
      );
    }
  }
  `,
};
