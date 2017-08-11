import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Spaces extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">ESPAÇAMENTOS</h3>

        <Tabs className="ReactTabs">
          <TabList className="ReactTabs__tab-list">
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Saturn-V
            </Tab>
          </TabList>

          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>
              No Saturn-V, contamos com alguns helpers para ajudar na questão de espaçamentos, com uma sintaxe muito
              direta e fácil de usar. Veja nas tabelas a seguir as maneiras de usar essas classes de espaçamentos.
            </p>

            <table className="sv-simple-table">
              <colgroup style={{ width: '90px' }} />
              <colgroup style={{ width: '80px' }} />
              <colgroup />
              <tbody>
                <tr>
                  <th rowSpan="2" scope="col">
                    Tipo
                  </th>
                  <th rowSpan="2" scope="col">
                    prefixo
                  </th>
                  <th colSpan="7" scope="col">
                    Posição
                  </th>
                </tr>
                <tr>
                  <td scope="col">Top</td>
                  <td scope="col">Right</td>
                  <td scope="col">Bottom</td>
                  <td scope="col">Left</td>
                  <td scope="col" title="Horizontal">
                    Horiz.
                  </td>
                  <td scope="col" title="Vertical">
                    Vert.
                  </td>
                  <td scope="col">All</td>
                </tr>
                <tr>
                  <th scope="row">padding</th>
                  <th scope="row">sv-p</th>
                  <td className="code" scope="col" rowSpan="2">
                    t
                  </td>
                  <td className="code" scope="col" rowSpan="2">
                    r
                  </td>
                  <td className="code" scope="col" rowSpan="2">
                    b
                  </td>
                  <td className="code" scope="col" rowSpan="2">
                    l
                  </td>
                  <td className="code" scope="col" rowSpan="2">
                    h
                  </td>
                  <td className="code" scope="col" rowSpan="2">
                    v
                  </td>
                  <td className="code" scope="col" rowSpan="2">
                    a
                  </td>
                </tr>
                <tr>
                  <th scope="row">margin</th>
                  <th scope="row">sv-m</th>
                </tr>
              </tbody>
            </table>

            <table className="sv-simple-table sv-mt--25">
              <thead>
                <tr>
                  <th colSpan="10" scope="col">
                    Valores
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="col">0px</td>
                  <td scope="col">5px</td>
                  <td scope="col">10px</td>
                  <td scope="col">15px</td>
                  <td scope="col">20px</td>
                  <td scope="col">25px</td>
                  <td scope="col">30px</td>
                  <td scope="col">50px</td>
                  <td scope="col">80px</td>
                  <td scope="col">100px</td>
                </tr>
                <tr>
                  <td className="code">--0</td>
                  <td className="code">--5</td>
                  <td className="code">--10</td>
                  <td className="code">--15</td>
                  <td className="code">--20</td>
                  <td className="code">--25</td>
                  <td className="code">--30</td>
                  <td className="code">--50</td>
                  <td className="code">--80</td>
                  <td className="code">--100</td>
                </tr>
              </tbody>
            </table>

            <p className="sv-mv--25">
              Nos baseando nas tabelas, se quisermos um elemento com um padding de 15px no lado direito bastaria usar{' '}
              <code className="sv-code">sv-pr--15</code>. Outros exemplos: margem horizontal de 20px podemos usar{' '}
              <code className="sv-code">sv-mh--20</code>, margem de 5px em todos lados{' '}
              <code className="sv-code">sv-ma--5</code>, padding vertical de 30px{' '}
              <code className="sv-code">sv-pv--30</code>, etc.
            </p>

            <h4 className="sv-fw-normal sv-fm-i">Exemplo gráfico da aplicação de espaçamentos com padding</h4>
            <hr />
            <p className="sv-text-center">
              <img width="60%" src={`${process.env.PUBLIC_URL}images/spaces.svg`} style={{ margin: '0 auto' }} />
            </p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Spaces;
