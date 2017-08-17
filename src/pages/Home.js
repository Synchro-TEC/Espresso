import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="out-home">
          <div className="home-hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-hero.png` }}>
            <SvRow withGutter>
              <SvCol className="sv-pt--50" size="_25">
                <img className="sv-ma--10" src={process.env.PUBLIC_URL + '/images/maquina.svg'} />
              </SvCol>
              <SvCol className=" sv-ph--100 sv-pt--50" size="_75">
                <h2 className="sv-color--white-1" style={{ fontSize: '40px' }}>
                  ESPRESSO DESIGN SYSTEM
                </h2>
                <p className="sv-color--white-1 sv-pt--20 sv-pr--50" style={{ fontSize: '24px' }}>
                  Guia de estilos e usabilidade, HTML/CSS Framework e Componentes React trabalhando em conjunto para
                  criar uma excepcional experiência de uso e desenvolvimento dos produtos SYNCHRO.
                </p>
              </SvCol>
            </SvRow>
          </div>
        </div>
        <div className="sv-clear" />
        <div className="out-home-icons">
          <div className="home-icons">
            <SvRow className="sv-pt--80">
              <SvCol className="sv-text-center sv-ph--30">
                <div>
                  <img
                    className="sv-ma--10"
                    height="105"
                    width="auto"
                    src={process.env.PUBLIC_URL + '/images/pantone.svg'}
                  />
                </div>
                <h3 className="sv-color--blue-400">Guia de Usabilidade</h3>
                <p className="sv-pa--20 sv-text-large">
                  Um guia vivo e em constante evolução, com exemplos claros e objetivos mostrando como aplicar as
                  melhores técnicas.
                </p>
              </SvCol>
              <SvCol className="sv-text-center sv-ph--30">
                <div>
                  <img
                    className="sv-ma--10"
                    height="105"
                    width="auto"
                    src={process.env.PUBLIC_URL + '/images/startup.svg'}
                  />
                </div>
                <h3 className="sv-color--blue-400">HTML/CSS Framework</h3>
                <p className="sv-pa--20 sv-text-large">
                  SATURN-V é o nosso Framework CSS, agnóstico de plataformas e sem dependências, é apenas CSS e pode ser
                  usado com qualquer stack de tecnologia.
                </p>
              </SvCol>
              <SvCol className="sv-text-center sv-ph--30">
                <div>
                  <img
                    className="sv-ma--10"
                    height="105"
                    width="auto"
                    src={process.env.PUBLIC_URL + '/images/atomic.svg'}
                  />
                </div>
                <h3 className="sv-color--blue-400">Componentes React</h3>
                <p className="sv-pa--20 sv-text-large">
                  APOLLO-11 é o nosso set de componentes React, construído sobre SATURN-V focado na reutilização e
                  composição para criar interfaces.
                </p>
              </SvCol>
            </SvRow>
          </div>
        </div>
        <div className="sv-clear" />
        <div className="out-devtools">
          <div className="devtools">
            <SvRow className="sv-pt--50">
              <SvCol size="_25">
                <img
                  className="sv-mt--10 sv-ml--25"
                  height="200"
                  width="auto"
                  src={process.env.PUBLIC_URL + '/images/settings.svg'}
                />
              </SvCol>
              <SvCol size="_75">
                <h2 className="sv-color--blue-400">DEV TOOLS</h2>
                <p className="sv-text-large sv-pt--25 sv-pr--100 sv-color--blue-400">
                  Estamos trabalhando em um set de ferramentas de linha de comando para auxiliar nossos desenvolvedores
                  a serem mais produtivos em tarefas repetitivas, removendo os famosos ctrl-c + ctrl-v permitindo que
                  foquem no que realmente importa, o produto e a satisfação de nossos usuários.
                </p>
              </SvCol>
            </SvRow>
          </div>
        </div>
        <div className="sv-clear" />
        <div className="out-os">
          <div className="os">
            <SvRow className="sv-pt--50">
              <SvCol size="_75">
                <h2 className="sv-color--blue-400 sv-pl--50">OPEN SOURCE</h2>
                <p className="sv-text-large sv-pt--25 sv-pr--100 sv-pl--50 sv-color--blue-400">
                  “Duas cabeças pensam melhor do que uma”, acreditamos que juntos podemos fazer muito mais, por isso
                  nossos projetos são Open Source, todos podem contribuir, seja usando e reportando problemas, sugerindo
                  melhorias ou ainda implementando novas funcionalidades.
                </p>
              </SvCol>
              <SvCol size="_25">
                <img
                  className="sv-ma--10"
                  height="200"
                  width="auto"
                  src={process.env.PUBLIC_URL + '/images/teamwork.svg'}
                />
              </SvCol>
            </SvRow>
          </div>
        </div>
        <div className="sv-clear" />
        <div className="out-devtools">
          <div className="devtools">
            <SvRow className="sv-pt--50">
              <SvCol size="_25">
                <img
                  className="sv-mt--10 sv-ml--25"
                  height="200"
                  width="auto"
                  src={process.env.PUBLIC_URL + '/images/flask.svg'}
                />
              </SvCol>
              <SvCol size="_75">
                <h2 className="sv-color--blue-400">EM CONSTANTE EVOLUÇÃO</h2>
                <p className="sv-text-large sv-pt--25 sv-pr--100 sv-color--blue-400">
                  Estamos sempre ligados em novidades e na evolução da nossa área e mais importante, sempre dispostos a
                  ouvir novas ideias, por isso nossos projetos estão sempre evoluindo, trazendo o que tem de melhor para
                  nos ajudar a fazer produtos melhores. Tem uma ideia? Quer fazer algo novo? Venha contar pra gente!
                </p>
              </SvCol>
            </SvRow>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
