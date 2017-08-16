import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Buttons extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">BUTTONS</h3>
        <p className="sv-text-large">Vamos relembrar um pouco mais sobre o uso de botões.</p>
        <SvRow>
          <SvCol className="sv-text-center">
            <div className="sv-mv--25">
              <button className="sv-button primary">Solid Button</button>
            </div>
            <div className="sv-mv--10 sv-mh--30 sv-text-left">
              É o tipo padrão de button, este tipo de botão sempre deve ser usado para a ação principal do usuário,
              exemplo: salvar, deletar, enviar, etc...
            </div>
          </SvCol>
          <SvCol className="sv-text-center">
            <div className="sv-mv--25">
              <button className="sv-button out-primary">Outline Button</button>
            </div>
            <div className="sv-mv--10 sv-mh--30 sv-text-left">
              Usado para ações secundárias, não devem ser o único botão disponível em uma ação, eles sempre devem ser
              usados como auxiliar aos botões sólidos, exemplo: desfazer, voltar, cancelar, etc...
            </div>
          </SvCol>
          <SvCol className="sv-text-center">
            <div className="sv-mv--25">
              <button className="sv-button link link-primary">Link Button</button>
            </div>
            <div className="sv-mv--10 sv-mh--30 sv-text-left">
              Usado onde as ações se parecem com um link, Eles também são usados em ações que propositalmente não
              queremos dar destaque, como cancelar o preenchimento de um formulário.
            </div>
          </SvCol>
        </SvRow>
        <h4 className="sv-fw-normal sv-ts-i">Posicionamento</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              Os botões que são ligados á uma mesma ação, ou que exigem uma tomada de decisão com duas ou mais opções,
              devem sempre serem colocados lado a lado, respeitando o espaçamento entre eles e a hierarquia de
              contraste.
            </p>
          </SvCol>
          <SvCol className="sv-pl--50">
            <div className="sv-card sv-pa--15">
              <h5>Aceita compartilhar sua localização?</h5>
              <p className="sv-mb--15">
                Você aceita compartilhar suas informações de localização e histórico de viagens para obter melhores
                resultados nas consultas seguinte?
              </p>
              <SvRow className="sm-ma--0">
                <SvCol className="sv-text-center">
                  <button className="sv-button out-info">Recusar</button>
                </SvCol>
                <SvCol className="sv-text-center">
                  <button className="sv-button info">Aceitar</button>
                </SvCol>
              </SvRow>
            </div>
            <div className="nunca" />
            <div className="sv-card sv-pa--15">
              <h5>Aceita compartilhar sua localização?</h5>
              <p className="sv-mb--15">
                Você aceita compartilhar suas informações de localização e histórico de viagens para obter melhores
                resultados nas consultas seguinte?
              </p>
              <p className="sv-text-right">
                <button className="sv-button out-info">Recusar</button>
                <button className="sv-button info sv-ml--15">Aceitar</button>
              </p>
            </div>
            <div className="sempre" />
          </SvCol>
        </SvRow>
        <h4 className="sv-fw-normal sv-ts-i">Direita ou Esquerda?</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              Em <b>Diálogos de confirmação</b>, <b>Ações de Formulário</b> e afins{' '}
              <span className="sv-color--green-500">recomendamos</span> que os botões sejam alinhados a <b>Direita</b>,
              pois é a forma natural da sequência da leitura, da esquerda para direta.
            </p>
            <p>
              Nesse cenário, não há uma maneira certa ou errada, o{' '}
              <span className="sv-color--green-500">ponto principal</span> é manter a <b>Coerência/Consistência</b> do
              design da sua aplicação, optando em usar os botões alinhados a esquerda, certifique-se que essa opção seja
              a mesma em toda a aplicação.
            </p>
          </SvCol>
          <SvCol className="sv-pl--50">
            <div className="sv-card sv-pa--15">
              <h5>Aceita compartilhar sua localização?</h5>
              <p className="sv-mb--15">
                Você aceita compartilhar suas informações de localização e histórico de viagens para obter melhores
                resultados nas consultas seguinte?
              </p>
              <p className="sv-text-left">
                <button className="sv-button out-info">Recusar</button>
                <button className="sv-button info sv-ml--15">Aceitar</button>
              </p>
            </div>
            <div className="atencao" />
            <div className="sv-card sv-pa--15">
              <h5>Aceita compartilhar sua localização?</h5>
              <p className="sv-mb--15">
                Você aceita compartilhar suas informações de localização e histórico de viagens para obter melhores
                resultados nas consultas seguinte?
              </p>
              <p className="sv-text-right">
                <button className="sv-button out-info">Recusar</button>
                <button className="sv-button info sv-ml--15">Aceitar</button>
              </p>
            </div>
            <div className="sempre" />
          </SvCol>
        </SvRow>
      </div>
    );
  }
}
export default Buttons;
