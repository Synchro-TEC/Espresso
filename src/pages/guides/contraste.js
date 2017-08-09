import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Contraste extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">CONTRASTE</h3>
        <p className="sv-text-large">
          Contraste é uma das formas de direcionar os usuários para as ações mais importantes de uma determinada
          interface, o uso coeso dessa tecnica é muito importante para uma navegação direcionada e fluída entre as
          principais ações que o usuário pode (em alguns casos, <b>devem</b>) executar.
        </p>
        <h4 className="sv-fw-normal sv-fm-i sv-mt--40">Direcionando as Ações</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              A principal ação do usuário deve sempre ser destacada das demais, é nesse ponto que contamos com o
              contraste no item que queremos destacar, não deve existir mais de uma ação destacada na mesma área de
              visão, pois quando todas as ações parecem importantes nenhuma realmente é.
            </p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/contraste-action.svg`} alt="Direcionando as ações" />
          </SvCol>
        </SvRow>
        <h4 className="sv-fw-normal sv-fm-i sv-mt--40">Hierarquia de ações em botões</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              No ESPRESSO, definimos 3 níveis de contraste em botões, do mais importante nível 1 até as ações com menos
              importância nível 3. Veja na imagem a seguir o uso correto.
            </p>
          </SvCol>
          <SvCol className="sv-pl--100 sv-pr--25">
            <dl>
              <dt className="sv-mb--15">
                <button className="sv-button info">Nível 1</button>
              </dt>
              <dd className="sv-mb--25">
                Botão que determina a principal ação do usuário, como SALVAR, INSERIR, ENVIAR, etc. Deve sempre ser a
                referência para a principal ação.
              </dd>
              <dt className="sv-mb--15">
                <button className="sv-button out-info">Nível 2</button>
              </dt>
              <dd className="sv-mb--25">
                Botão que determina uma ação secundária do usuário, seu uso é geralmente próximo aos botões principais,
                destacando as demais opções além da principal.
              </dd>
              <dt className="sv-mb--15">
                <button className="sv-button link link-info">Nível 3</button>
              </dt>
              <dd className="sv-mb--25">
                Botão para as ações menos importantes, se parece com um link, deve ser usado para aquelas ações que não
                desejamos destacar, como CANCELAR um preenchimento, ou ainda SAIR ou VOLTAR de determinado setor.
              </dd>
            </dl>
          </SvCol>
        </SvRow>
        <h4 className="sv-fw-normal sv-fm-i sv-mt--40">Contraste em um formulário</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              Este exemplo é bastante clássico, a ação de cancelar em um formulário, no Espresso o padrão é que a ação
              cancelar sempre seja a última opção do usuário, nesse caso ele sempre deve ter um contraste de nível 3.
            </p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/contraste-form.svg`} alt="Contraste em formulários" />
          </SvCol>
        </SvRow>
      </div>
    );
  }
}

export default Contraste;
