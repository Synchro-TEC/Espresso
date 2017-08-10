import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Buttons extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">BOTÕES</h3>
        <p className="sv-text-large">
          Objetividade, essa palavra resume muito bem como devemos comunicar a interface com o usuário. Evite termos
          desconhecidos para tarefas simples, como por exemplo, em uma busca, use o termo <b>BUSCAR</b> para a ação e
          não algo como: <b>ENCONTRE AQUI O QUE DESEJA</b>.
        </p>
        <div className="sv-column sv-text-center sv-mp--10">
          <div className="sv-mv--25">
            <button className="sv-button primary">Solid Button</button>
          </div>
          <div className="sv-vertical-marged-10 sv-mp--10 sv-text-left">
            É o tipo padrão de button, este tipo de botão sempre deve ser usado para a ação principal do usuário,
            exemplo: salvar, deletar, enviar, etc...
          </div>
        </div>
        <div className="sv-column sv-text-center sv-mp--10">
          <div className="sv-mv--25">
            <button className="sv-button out-primary">Outline Button</button>
          </div>
          <div className="sv-vertical-marged-10 sv-mp--10 sv-text-left">
            Usado para ações secundárias, não devem ser o único botão disponível em uma ação, eles sempre devem ser
            usados como auxiliar aos botões sólidos, exemplo: desfazer, voltar, cancelar, etc...
          </div>
        </div>
        <div className="sv-column sv-text-center sv-mp--10">
          <div className="sv-mv--25">
            <button className="sv-button link link-primary">Link Button</button>
          </div>
          <div className="sv-mv--10 sv-mp--10 sv-text-left">
            Usado onde as ações se parecem com um link, Eles também são usados em ações que propositalmente não queremos
            dar destaque, como cancelar o preenchimento de um formulário.
          </div>
        </div>
      </div>
    );
  }
}
export default Buttons;
