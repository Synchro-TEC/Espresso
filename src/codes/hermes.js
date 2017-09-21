export default {
  example1: `import React from 'react';
import { Hermes } from 'syntec-apollo-11';
  
/**
* Função que adiciona uma mensagem.
*/
var adicionarMensagem = () => {
  Hermes.addMessage('Mensagem', true);
};

/**
* Função que muda o contexto da mensagem.
*/
var mudarContexto = (context) => {
  Hermes.setContext(context);
};
  
class ExemploContextosEPosicao extends React.Component {  
  render() {
    return (
      <div>
        <Hermes />
        <button	className='sv-button small default marged' onClick={() => {adicionarMensagem(); mudarContexto('success')}}>
          Contexto Sucesso
        </button>
        <button className='sv-button small default marged' onClick={() => {adicionarMensagem(); mudarContexto('info')}}>
          Contexto Informativo
        </button>
        <button className='sv-button small default marged' onClick={() => {adicionarMensagem(); mudarContexto('warning')}}>
          Contexto Aviso
        </button>
        <button className='sv-button small default marged' onClick={() => {adicionarMensagem(); mudarContexto('error')}}>
          Contexto Erro
        </button>
        <button className='sv-button small default marged' onClick={() => Hermes.setPosition('top')}>
          Superior
        </button>
        <button className='sv-button small default marged' onClick={() => Hermes.setPosition('bottom')}>
          Inferior
        </button>
      </div>
    );
  }
  
  }
  
  ExemploContextosEPosicao.displayName = 'ExemploContextosEPosicao';
  export default ExemploContextosEPosicao;`,
};
