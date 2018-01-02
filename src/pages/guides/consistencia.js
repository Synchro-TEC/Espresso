import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Consistencia extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">CONSISTÊNCIA</h3>
        <p className="sv-text-large">
          Um tópico importantíssimo, que muitos nem sabem que existe e que muitas vezes é simplesmente esquecido, é a
          tal da <span className="sv-color--green-600">Consistência</span>.
        </p>
        <h5>E o que é Consistência?</h5>
        <p className="sv-text-large">
          Consistência é sobre se manter fiel com suas escolhas, do início ao fim do projeto. Veja alguns pontos que vão
          te ajudar a manter a <span className="sv-ts-i">consistência</span> de um projeto.
        </p>
        <ol className="sv-ol">
          <li>Pergunte sempre se o que você está resolvendo agora já não foi resolvido em outro lugar da aplicação.</li>
          <li>Resolva problemas iguais ou parecidos sempre da mesma maneira.</li>
          <li>Não tente fazer tudo parecer o mesmo problema.</li>
          <li>Use sempre os mesmos espaçamentos e alinhamentos.</li>
          <li>
            Coloque os elementos comuns sempre na mesma posição. Filtros, listagens, botões de incluir, todos os
            elementos devem receber a mesma abordagem em todas as telas.
          </li>
          <li>Mantenha o padrão de cores.</li>
          <li>
            Lembre-se, todos os elementos comuns da aplicação devem ter o mesmo look and feel em toda a aplicação, um
            form deve ter a mesma aparência em todos os lugares, assim como tabelas, botões, títulos, etc.
          </li>
          <li>
            Não reinvente a roda, aproveite as experiências do usuário, muitos problemas comuns já foram resolvidos por
            aplicações de massa como Google, Facebook, etc. Use isso a seu favor.
          </li>
          <li>Seja crítico!</li>
        </ol>
      </div>
    );
  }
}
export default Consistencia;
