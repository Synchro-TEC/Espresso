import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import ShowCase from '../../components/business/showcase/showcase';
import GridExamples from '../../codes/grid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const gridExampe1Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
      <div className="sv-column sv-bg-color--blue-300">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
      <div className="sv-column sv-bg-color--blue-300">Column</div>
      <div className="sv-column sv-bg-color--blue-400">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
      <div className="sv-column sv-bg-color--blue-300">Column</div>
      <div className="sv-column sv-bg-color--blue-400">Column</div>
      <div className="sv-column sv-bg-color--blue-500">Column</div>
    </div>
  </div>;

const gridExampe2Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
      <div className="sv-column sv-bg-color--green-200">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
      <div className="sv-column sv-bg-color--green-200">Column</div>
      <div className="sv-column sv-bg-color--green-300">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
      <div className="sv-column sv-bg-color--green-200">Column</div>
      <div className="sv-column sv-bg-color--green-300">Column</div>
      <div className="sv-column sv-bg-color--green-400">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
      <div className="sv-column sv-bg-color--green-200">Column</div>
      <div className="sv-column sv-bg-color--green-300">Column</div>
      <div className="sv-column sv-bg-color--green-400">Column</div>
      <div className="sv-column sv-bg-color--green-500">Column</div>
    </div>
  </div>;

const gridExampe3Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _20">_20</div>
      <div className="sv-column sv-bg-color--blue-200 _80">_80</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _25">_25</div>
      <div className="sv-column sv-bg-color--blue-200 _75">_75</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _20">_20</div>
      <div className="sv-column sv-bg-color--blue-200 _20">_20</div>
      <div className="sv-column sv-bg-color--blue-400 _60">_60</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _40">_40</div>
      <div className="sv-column sv-bg-color--blue-200 _60">_60</div>
    </div>
  </div>;

const gridExampe4Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _100--fixed">100px</div>
      <div className="sv-column sv-bg-color--blue-200">column</div>
      <div className="sv-column sv-bg-color--blue-400">column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _150--fixed">150px</div>
      <div className="sv-column sv-bg-color--blue-200">column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _150--fixed">150px</div>
      <div className="sv-column sv-bg-color--blue-200 _150--fixed">150px</div>
      <div className="sv-column sv-bg-color--blue-500">column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _200--fixed">200px</div>
      <div className="sv-column sv-bg-color--blue-200 _250--fixed">250px</div>
      <div className="sv-column sv-bg-color--blue-500">column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _300--fixed">300px</div>
      <div className="sv-column sv-bg-color--blue-300">column</div>
    </div>
  </div>;

const gridExampe5Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row sv-no-margins">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
    </div>

    <div className="sv-row sv-no-margins">
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
    </div>
  </div>;

class Grid extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">GRID SYSTEM</h3>

        <Tabs className="ReactTabs">
          <TabList className="ReactTabs__tab-list">
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Saturn-V
            </Tab>
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Apollo-11
            </Tab>
          </TabList>

          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>
              Ridiculamente simples de usar, basta declarar <code className="sv-code">sv-row</code> e{' '}
              <code className="sv-code">sv-column</code> como filhos.
            </p>
            <ShowCase height="210px" example={gridExampe1Show} code={GridExamples.example1} />
            <h4 className="sv-fw-normal sv-ts-i">Grid com margens</h4>
            <hr />
            <p>
              O grid também pode ser usado com margem entre as colunas, neste caso, use{' '}
              <code className="sv-code">sv-row--with-gutter</code>.
            </p>
            <ShowCase height="210px" example={gridExampe2Show} code={GridExamples.example2} />
            <h4 className="sv-fw-normal sv-ts-i">Grid com colunas de tamanhos de diferentes</h4>
            <hr />
            <p>
              Nosso grid possui alguns helpers para ajudar em layouts com tamnhos diferentes das colunas. Os helpers
              disponíveis são para colunas com os seguintes tamanhos: 20, 25, 40, 60, 75 e 80 porcento.
            </p>
            <p>
              Para usar um dos helpers, adicione na classe sv-column uma outra classe com _ + valor, ex:
              <code className="sv-code">sv-column _20</code> para criar um coluna com 20% do tamanho disponível.
            </p>
            <ShowCase height="210px" example={gridExampe3Show} code={GridExamples.example3} />
            <h4 className="sv-fw-normal sv-ts-i">Grid com coluna de tamanho fixo</h4>
            <hr />
            <p>
              Assim como nas colunas de tamanhos variados, estão disponíveis alguns helpers para ajudar em layouts com
              colunas de tamanho fixo. Os helpers disponíveis para colunas de tamanho fixo são: 100, 150, 200, 250 and
              300 pixels. Lembrando que as outras colunas de uma row irão se ajustar automaticamente para preencher os
              espaços.
            </p>
            <p>
              Para usar um dos helpers, adicione na classe sv-column uma outra classe com _ + valor + --fixed, ex:
              <code className="sv-code">sv-column _100--fixed</code> para criar um coluna com 100px fixo.
            </p>
            <ShowCase height="210px" example={gridExampe4Show} code={GridExamples.example4} />
            <h4 className="sv-fw-normal sv-ts-i">Dicas</h4>
            <hr />
            <p>
              Se você precisa de uma <code className="sv-code">.sv-row</code> ou uma{' '}
              <code className="sv-code">.sv-row--with-gutter</code> sem a margem inferior, é só adicionar a classe{' '}
              <code className="sv-code">.sv-ma--0</code> na sua row.
            </p>

            <ShowCase height="140px" example={gridExampe5Show} code={GridExamples.example5} />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>O Grid System do Saturn-V também está disponível no Apollo-11, visando assim facilitar o uso do grid.</p>
            <ShowCase height="210px" example={gridExampe1Show} code={GridExamples.example1Apollo} language="jsx" />
            <h4 className="sv-fw-normal sv-ts-i">SvRow PropTypes</h4>
            <hr />
            <table className="sv-table with--hover with--borders">
              <thead>
                <tr>
                  <th>Propriedade</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>className</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Classes CSS adicionais.</td>
                </tr>
                <tr>
                  <td>
                    <code>withGutter</code>
                  </td>
                  <td>
                    <code>bool</code>
                  </td>
                  <td>Define se uma row possui ou não gutter (margens).</td>
                </tr>
              </tbody>
            </table>
            <h4 className="sv-fw-normal sv-ts-i">SvCol PropTypes</h4>
            <hr />
            <table className="sv-table with--hover with--borders">
              <thead>
                <tr>
                  <th>Propriedade</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>className</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Classes CSS adicionais.</td>
                </tr>
                <tr>
                  <td>
                    <code>fixedSize</code>
                  </td>
                  <td>
                    <code>oneOf(['_100--fixed', '_150--fixed', '_200--fixed', '_250--fixed', '_300--fixed'])</code>
                  </td>
                  <td>Define se uma coluna possui tamanho fixo.</td>
                </tr>
                <tr>
                  <td>
                    <code>size</code>
                  </td>
                  <td>
                    <code>oneOf(['_20', '_25', '_40', '_60', '_75', '_80'])</code>
                  </td>
                  <td>Define se uma coluna possui um modificador de tamanho.</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Grid;
// className: PropTypes.string,
// fixedSize: PropTypes.oneOf(['_100--fixed', '_150--fixed', '_200--fixed', '_250--fixed', '_300--fixed']),
// size: PropTypes.oneOf(['_20', '_25', '_40', '_60', '_75', '_80']),
