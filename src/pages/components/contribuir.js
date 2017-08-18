import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Contribuir extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">COMO CONTRIBUIR</h3>
        <p>
          Existe várias maneiras de contribuir com o desenvolvimento do Espresso, seja com ideias, testando e reportando
          possíveis problemas ou ainda ajudando na codificação, com correção de problemas e implementaçã de novas
          funcionalidades.
        </p>
        <p>
          Toda interação deve ser feita através do sistema de issues, desde bugs até debates sobre novas funcionalidades
          devem ser centralizados nas issues de cada projeto.
        </p>
        <p>Lembramos que o Espresso é composto por 3 projetos:</p>
        <ul>
          <li>
            Saturn-V - Nosso Framework CSS{' '}
            <a href="https://github.com/Synchro-TEC/saturn-v">[https://github.com/Synchro-TEC/saturn-v]</a>
          </li>
          <li>
            Apollo-11 - Set de componentes React{' '}
            <a href="https://github.com/Synchro-TEC/apollo-11">[https://github.com/Synchro-TEC/apollo-11]</a>
          </li>
          <li>
            Site de documentação do Espresso - Este que você está lendo agora!{' '}
            <a href="https://github.com/Synchro-TEC/Espresso">[https://github.com/Synchro-TEC/Espresso]</a>
          </li>
        </ul>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Contribuindo com o Saturn-V</h4>
        <hr />
        <p>
          Para abertura de issues:{' '}
          <a href="https://github.com/Synchro-TEC/saturn-v/issues">https://github.com/Synchro-TEC/saturn-v/issues</a>
        </p>
        <p>Se você deseja nos ajudar codificando, o processo também é bem simples:</p>
        <ol className="sv-ol">
          <li>Faça um fork do projeto</li>
          <li>
            Faça um clone do seu fork e instale as dependências, basta rodar na raiz:{' '}
            <code className="sv-code">npm install</code>
          </li>
          <li>
            Instale a dependência para gerar a build do projeto:{' '}
            <code className="sv-code">npm install -g grunt-cli</code>
          </li>
          <li>
            Altere o arquivo <code className="sv-code">grunt/exec.js</code> para gerar uma cópia em um determinado
            diretório, para que você possa testar sua implementação
          </li>
          <li>
            Para rodar a build do projeto em desenvolvimento: <code className="sv-code">grunt watch</code>
          </li>
          <li>Ao finalizar sua implementação submeta um pull request no github!</li>
        </ol>

        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Contribuindo com o Apollo-11</h4>
        <hr />
        <p>
          Para abertura de issues:{' '}
          <a href="https://github.com/Synchro-TEC/saturn-v/issues">https://github.com/Synchro-TEC/saturn-v/issues</a>
        </p>
        <p>Para desenvolvedores:</p>
        <ol className="sv-ol">
          <li>Faça um fork do projeto</li>
          <li>
            Instale o yarn para gerencimanto de dependências:{' '}
            <a href="https://yarnpkg.com/en/docs/install">https://yarnpkg.com/en/docs/install</a>
          </li>
          <li>
            Faça um clone do seu fork e instale as dependências, basta rodar na raiz:{' '}
            <code className="sv-code">yarn</code>
          </li>
          <li>
            Para guiar a sua implementação e poder testar no "mundo real" você precisa de um aprojeto rodando o
            Apollo-11, caso já possua ele como dependência do seu projeto remova e tenha certeza de apagar o diretório
            do mesmo na pasta node_modules. Feito isso rode o comando na raiz do seu fork:{' '}
            <code className="sv-code">yarn link</code>, depois no projet oque vai usar ele para testar rode:
            <code className="sv-code">yarn link synctec-apollo-11</code>.
          </li>
          <li>
            Para rodar a build do projeto em desenvolvimento: <code className="sv-code">yarn watch</code>
          </li>
          <li>Ao finalizar sua implementação submeta um pull request no github!</li>
        </ol>

        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Contribuindo com a documentação do Espresso</h4>
        <hr />
        <p>
          Para abertura de issues:{' '}
          <a href="https://github.com/Synchro-TEC/Espresso/issues">https://github.com/Synchro-TEC/Espresso/issues</a>
        </p>
        <p>Para desenvolvedores:</p>
        <ol className="sv-ol">
          <li>Faça um fork do projeto</li>
          <li>
            Instale o yarn para gerencimanto de dependências:{' '}
            <a href="https://yarnpkg.com/en/docs/install">https://yarnpkg.com/en/docs/install</a>
          </li>
          <li>
            Faça um clone do seu fork e instale as dependências, basta rodar na raiz:{' '}
            <code className="sv-code">yarn</code>
          </li>
          <li>
            Para rodar a build do projeto em desenvolvimento: <code className="sv-code">yarn start</code>
          </li>
          <li>Ao finalizar sua implementação submeta um pull request no github!</li>
        </ol>
      </div>
    );
  }
}
export default Contribuir;
