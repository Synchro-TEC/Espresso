import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Alinhamento extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">ALINHAMENTOS</h3>
        <p className="sv-text-large">
          Tão importante quanto um bom espaçamento, o alinhamento entre elementos é determinante para um bom design,
          veja a seguir alguns exemplos de como usar o alinhamento corretamente.
        </p>

        <h4 className="sv-fw-normal sv-fm-i sv-mt--40">Alinhamento de texto</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>O Espaçamento entre os elementos que compoem o texto devem sempre ter uma hierarquia de espaços.</p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/al-text.svg`} alt="Alinhamento de texto" />
          </SvCol>
        </SvRow>
        <h4 className="sv-fw-normal sv-fm-i sv-mt--25">Alinhamento entre elementos</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              É visível o melhor entendimento da interface quando temos um espaçamento consistente entre os elementos. O
              contrário faz com que a interface fique poluída visualmente, transmitindo uma aparência / sensação de
              bagunça.
            </p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/al-elementos.svg`} alt="Alinhamento entre elementos" />
          </SvCol>
        </SvRow>
        <h4 className="sv-fw-normal sv-fm-i sv-mt--25">Alinhamento de números</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              O alinhamento de números deve sempre se destacar do alinhamento de texto, facilitando assim a compreensão
              de valores. Use sempre um alinhamento inverso ao alinhamento do texto para que os números sejam
              destacados.
            </p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/al-numbers.svg`} alt="Alinhamento de números" />
          </SvCol>
        </SvRow>
      </div>
    );
  }
}

export default Alinhamento;
