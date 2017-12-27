import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Contribuir extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">COMO CONTRIBUIR</h3>
        <p>
          Existem várias maneiras de contribuir com o desenvolvimento do Espresso, seja ela com ideias; testando;
          reportando erros ou problemas; ajudando na codificação com correções de bugs e implementação de novas
          funcionalidades.
        </p>
        <p>
          Toda interação deve ser feita e centralizada através do sistema de issues de cada projeto. Desde bugs, até
          debates sobre novas funcionalidades.
        </p>
        <p>Lembramos que o Espresso é composto por 3 projetos:</p>
        <ul>
          <li>
            <span className="sv-fw-bold">Saturn-V</span> - Framework CSS{' '}
            <a href="https://github.com/Synchro-TEC/saturn-v">
              <i className="fa fa-external-link sv-pl--5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <span className="sv-fw-bold">Apollo-11</span> - Componentes React{' '}
            <a href="https://github.com/Synchro-TEC/apollo-11">
              <i className="fa fa-external-link sv-pl--5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <span className="sv-fw-bold">Espresso</span> - Site de documentação. Este mesmo que você está lendo agora!{' '}
            <a href="https://github.com/Synchro-TEC/Espresso">
              <i className="fa fa-external-link sv-pl--5" aria-hidden="true" />
            </a>
          </li>
        </ul>
        <br />
        <p>
          <span className="sv-ts-i">
            Ao finalizar sua implementação, não se hesite em nos submeter um{' '}
            <span className="sv-ts-u">pull request</span>!{' '}
          </span>
          <i className="fa fa-thumbs-o-up sv-pl--5" aria-hidden="true" />
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Requisitos</h4>
        <hr />
        <p>
          Para contribuir com nossos projetos, é necessário alguns requisitos mínimos em seu ambiente de trabalho, entre
          eles:
        </p>
        <h5>Node.js & npm</h5>
        <p>
          Para se trabalhar com nossos projetos, é indispensável que você possua instalado o Node.js e o NPM em seu
          ambiente de trabalho. Acesso o{' '}
          <a href="https://nodejs.org/en/">
            site do Node.js
            <i className="fa fa-external-link sv-pl--5" aria-hidden="true" />
          </a>{' '}
          e siga as instruções para instalação. Lembrando que o npm é distribuído com o Node.js. Isso significa que
          quando você baixa e instala o Node.js, automáticamente você irá ter o npm instalado em sua máquina.
        </p>
        <p>
          Certifique-se de que a instalação do Node.js foi realizada com sucesso executando o comando abaixo em seu
          terminal:
        </p>
        <p>
          <code className="sv-code">node -v</code>
        </p>
        <p>Para confirmar que você instalou o npm com sucesso, execute o comando abaixo em seu terminal:</p>
        <p>
          <code className="sv-code">npm -v</code>
        </p>
        <h5>Grunt</h5>
        <p>
          Para instalar, abra um terminal e rode o comando <code className="sv-code"> npm install -g grunt-cli</code>
        </p>
        <p>Para confirmar se a instalação foi feita com sucesso, execute o comando abaixo em seu terminal:</p>
        <p>
          <code className="sv-code">grunt -V</code> (Sim, com V maiúsculo)
        </p>
        <h5>Yarn</h5>
        <p>
          Para instalar o gerenciador de dependência, acesse o{' '}
          <a href="https://yarnpkg.com/en/docs/install">
            site do Yarn
            <i className="fa fa-external-link sv-pl--5" aria-hidden="true" />
          </a>{' '}
          e siga as instruções para instalação.
        </p>
        <p>
          Certifique-se de que a instalação do Yarn foi realizada com sucesso executando o comando abaixo em seu
          terminal:
        </p>
        <p>
          <code className="sv-code">yarn -v</code>
        </p>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Contribuindo com o Saturn-V</h4>
        <hr />
        Para abertura de issues, acesse {' '}
        <a href="https://github.com/Synchro-TEC/saturn-v/issues">
          aqui
          <i className="fa fa-external-link sv-pl--5" aria-hidden="true" />
        </a>
        <p>Se você deseja nos ajudar no desenvolvimento e crescimento do Saturn-V, o processo é bem simples:</p>
        <ol className="sv-ol">
          <li>
            Faça o fork do projeto acessando o {''}
            <a href="https://github.com/Synchro-TEC/saturn-v">
              repositório <i className="fa fa-external-link fa-fw" />
            </a>
          </li>
          <li>
            Após a primeira etapa, faça um clone do seu fork em seu ambiente de trabalho e dentro da raiz do projeto,
            instale as dependências rodando o comando <code className="sv-code">npm install</code> no terminal do seu
            sistema operacional.
          </li>
          <li>
            Altere o arquivo <code className="sv-code">grunt/exec.js</code> para gerar uma cópia em um determinado
            diretório, para que você possa testar sua implementação
          </li>
          <li>
            Para executar a build do projeto em desenvolvimento, na raiz do projeto, execute o comando
            <code className="sv-code">grunt watch</code> em um terminal.
          </li>
        </ol>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Contribuindo com o Apollo-11</h4>
        <hr />
        Para abertura de issues, acesse{' '}
        <a href="https://github.com/Synchro-TEC/apollo-11/issues">
          aqui <i className="fa fa-external-link fa-fw" />
        </a>
        <p>Se você deseja nos ajudar no desenvolvimento e crescimento do Apollo-11, o processo também é bem simples:</p>
        <ol className="sv-ol">
          <li>
            Faça um fork do projeto acessando o {' '}
            <a href="https://github.com/Synchro-TEC/apollo-11">
              repositório<i className="fa fa-external-link fa-fw sv-pl--5" />
            </a>
          </li>
          <li>
            Após a primeira etapa, faça um clone do seu fork em seu ambiente de trabalho e dentro da raiz do projeto,
            instale as dependências rodando o comando <code className="sv-code">yarn</code> no terminal do seu sistema
            operacional.
          </li>
          <li>
            Para guiar a sua implementação ao decorrer do desenvolvimento e poder testar, você precisa de um projeto
            rodando o Apollo-11, caso já possua ele como dependência de um outro projeto, remova-o deletando o diretório
            na pasta <span className="sv-fw-bold">node_modules</span> do seu projeto. Feito isso, na raiz do seu fork
            execute <code className="sv-code">yarn link</code>, depois no projeto que vai usar o Apollo-11 para testar
            sua implementação, rode o comando
            <code className="sv-code">yarn link syntec-apollo-11</code> em seu terminal.
          </li>
          <li>
            Para executar a build do projeto em desenvolvimento, na raiz do projeto, execute o comando{' '}
            <code className="sv-code">yarn watch</code> em seu terminal.
          </li>
        </ol>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Contribuindo com a documentação do Espresso</h4>
        <hr />
        Para abertura de issues, acesse{' '}
        <a href="https://github.com/Synchro-TEC/Espresso/issues">
          aqui <i className="fa fa-external-link fa-fw" />
        </a>
        <p>Se você deseja nos ajudar no desenvolvimento e crescimento do Espresso, o processo também é bem simples:</p>
        <ol className="sv-ol">
          <li>
            Faça um fork do projeto acessando o {' '}
            <a href="https://github.com/Synchro-TEC/Espresso">
              repositório<i className="fa fa-external-link fa-fw sv-pl--5" />
            </a>
          </li>
          <li>
            Após a primeira etapa, faça um clone do seu fork em seu ambiente de trabalho e dentro da raiz do projeto,
            instale as dependências rodando o comando <code className="sv-code">yarn</code> no terminal do seu sistema
            operacional.
          </li>
          <li>
            Para executar a build do projeto em desenvolvimento, na raiz do projeto, execute o comando{' '}
            <code className="sv-code">yarn start</code> em seu terminal.
          </li>
        </ol>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">
          <i className="fa fa-lightbulb-o sv-pr--5" aria-hidden="true" />
          Dica: Mantendo seu fork atualizado com o repositório central
        </h4>
        <hr />
        <p>
          Para manter seu fork atualizado com as mais recentes mudanças do repositório central, basta executar os
          comandos a seguir, por etapa via terminal na raiz do projeto.
        </p>
        <ol className="sv-ol">
          <li>
            <code className="sv-code">git remote add upstream git@github.com:NOME_REPOSITORIO</code> ex:
            <span className="sv-ts-i"> git@github.com:Synchro-TEC/Espresso.git</span>
          </li>
          <li>
            <code className="sv-code">git fetch upstream</code>
          </li>
          <li>
            <code className="sv-code">git pull upstream NOME_BRANCH</code> ex: <span className="sv-ts-i">master</span>
          </li>
        </ol>
      </div>
    );
  }
}
export default Contribuir;
