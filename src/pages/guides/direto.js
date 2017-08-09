import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Direto extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">SEJA DIRETO</h3>
        <p className="sv-text-large">
          Objetividade, essa palavra resume muito bem como devemos comunicar a interface com o usuário. Evite termos
          desconhecidos para tarefas simples, como por exemplo, em uma busca, use o termo <b>BUSCAR</b> para a ação e
          não algo como: <b>ENCONTRE AQUI O QUE DESEJA</b>.
        </p>
        <p className="sv-text-large">
          Uma boa prática é sempre usr o verbo que define a ação como label do botões e links, como <b>SALVAR</b>,{' '}
          <b>CANCELAR</b>, <b>ENVIAR</b>, <b>EXPORTAR</b>, <b>ACEITAR</b>, etc.
        </p>
        <p className="sv-text-large">Procure usar sempre apenas uma palavra, um verbo que define/resume a ação.</p>
        <h4 className="sv-fw-normal sv-fm-i sv-mt--40">SIM e NÃO</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              Nas ações de confirmação ou questões com multiplas escolha use sempre o verbo tema da ação, por exemplo,
              em uma janela de confirmação onde o usuário é perguntado se <b>ACEITA</b> um termo, evite <b>SIM</b> e{' '}
              <b>NÃO</b> como opções de ação, ao invéz disso use <b>ACEITAR</b> e <b>RECUSAR</b>.
            </p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/direct-form.svg`} alt="Seja direto" />
          </SvCol>
        </SvRow>
      </div>
    );
  }
}
export default Direto;
