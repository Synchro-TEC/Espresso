import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Synchro extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">SYNCHRO HEADERS</h3>
        <p className="sv-text-large">
          Os headers das aplicações Synchro devem seguir os estilos documentados neste artigo, lembrado que as cores do
          header fica a cargo de cada aplicação, o guia a seguir define apenas medidas e formato e não cores.
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Header simples</h4>
        <hr />
        <p className="sv-text-center sv-pt--25">
          <img src={`${process.env.PUBLIC_URL}images/header-simple.png`} />
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Header com menu hamburguer</h4>
        <hr />
        <p className="sv-text-center sv-pt--25">
          <img src={`${process.env.PUBLIC_URL}images/header-hamburguer.png`} height="auto" />
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Notificações, Menu de Aplicações e Informações do usuário</h4>
        <hr />
        <p>
          Exemplo onde o usuário não possui foto no sistema, uma imagem com duas iniciais do nome do usuário deverá ser
          gerada, a borda branca no cículo é obrigatória, adequando-se assim a qualquer cor de fundo do header, a cor
          interna do círculo pode ser fixa ou dinâmica, a única regra é que o fundo e as iniciais devem ter um bom
          contraste.
        </p>
        <p className="sv-text-center sv-pt--25">
          <img src={`${process.env.PUBLIC_URL}images/header-actions.png`} height="auto" />
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Exemplo com um usuário com foto</h4>
        <hr />
        <p className="sv-text-center sv-pt--25">
          <img src={`${process.env.PUBLIC_URL}images/header-actions-photo.png`} height="auto" />
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Menu do usuário</h4>
        <hr />
        <p>
          As bordas do container com informações devem obrigatoriamente ter a mesma cor do header, o mesmo se aplica
          para a borda da imagem do usuário ou sigla.
        </p>
        <p className="sv-text-center sv-pt--25">
          <img src={`${process.env.PUBLIC_URL}images/header-user-opened.png`} height="auto" />
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Menu de Aplicações</h4>
        <hr />
        <p>
          As bordas do container com os ícones devem obrigatoriamente ter a mesma cor do header, os ícones tem o tamanho
          de 42px X 42px.
        </p>
        <p className="sv-text-center sv-pt--25">
          <img src={`${process.env.PUBLIC_URL}images/header-apps-opened.png`} height="auto" />
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Caixa de notificações</h4>
        <hr />
        <p>As bordas do container de notificações devem obrigatoriamente ter a mesma cor do header.</p>
        <p className="sv-text-center sv-pt--25">
          <img src={`${process.env.PUBLIC_URL}images/header-notification-opened.png`} height="auto" />
        </p>
      </div>
    );
  }
}

export default Synchro;
