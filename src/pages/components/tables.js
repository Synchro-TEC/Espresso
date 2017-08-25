import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import tableCodes from '../../codes/tables';

const responsiveTable = () =>
  <div className="sv-table-responsive-vertical">
    <table className="sv-table with--hover with--borders">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="Id">12</td>
          <td data-title="Name">Jhon Doe</td>
          <td data-title="Company">Seven</td>
          <td data-title="Action">Edit</td>
        </tr>
        <tr>
          <td data-title="Id">13</td>
          <td data-title="Name">Tony MacLaren</td>
          <td data-title="Company">SamySu</td>
          <td data-title="Action">Edit</td>
        </tr>
        <tr>
          <td data-title="Id">14</td>
          <td data-title="Name">Mary of Neighborhood</td>
          <td data-title="Company">OnMyTv SA</td>
          <td data-title="Action">Edit</td>
        </tr>
        <tr>
          <td data-title="Id">15</td>
          <td data-title="Name">Jon of Neighborhood</td>
          <td data-title="Company">Tv SA</td>
          <td data-title="Action">Edit</td>
        </tr>
      </tbody>
    </table>
  </div>;

const borderlessTable = () =>
  <div className="sv-table-responsive-vertical">
    <table className="sv-table with--hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="Id">12</td>
          <td data-title="Name">Jhon Doe</td>
          <td data-title="Company">Seven</td>
          <td data-title="Action">Edit</td>
        </tr>
        <tr>
          <td data-title="Id">13</td>
          <td data-title="Name">Tony MacLaren</td>
          <td data-title="Company">SamySu</td>
          <td data-title="Action">Edit</td>
        </tr>
        <tr>
          <td data-title="Id">14</td>
          <td data-title="Name">Mary of Neighborhood</td>
          <td data-title="Company">OnMyTv SA</td>
          <td data-title="Action">Edit</td>
        </tr>
        <tr>
          <td data-title="Id">15</td>
          <td data-title="Name">Jon of Neighborhood</td>
          <td data-title="Company">Tv SA</td>
          <td data-title="Action">Edit</td>
        </tr>
      </tbody>
    </table>
  </div>;

const zebraTable = () =>
  <table className="sv-table with--borders with--stripes with--hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Company</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="Id">12</td>
        <td data-title="Name">Jhon Doe</td>
        <td data-title="Company">Seven</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">13</td>
        <td data-title="Name">Tony MacLaren</td>
        <td data-title="Company">SamySu</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">14</td>
        <td data-title="Name">Mary of Neighborhood</td>
        <td data-title="Company">OnMyTv SA</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">15</td>
        <td data-title="Name">Chapolin Colorado</td>
        <td data-title="Company">OnMyTv SA</td>
        <td data-title="Action">Edit</td>
      </tr>
    </tbody>
  </table>;

const compactTable = () =>
  <table className="sv-table with--borders with--condensed with--stripes with--hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Company</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="Id">12</td>
        <td data-title="Name">Jhon Doe</td>
        <td data-title="Company">Seven</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">13</td>
        <td data-title="Name">Tony MacLaren</td>
        <td data-title="Company">SamySu</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">14</td>
        <td data-title="Name">Mary of Neighborhood</td>
        <td data-title="Company">OnMyTv SA</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">15</td>
        <td data-title="Name">Chapolin Colorado</td>
        <td data-title="Company">OnMyTv SA</td>
        <td data-title="Action">Edit</td>
      </tr>
    </tbody>
  </table>;

const spacedTable = () =>
  <table className="sv-table with--borders with--space with--stripes with--hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Company</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-title="Id">12</td>
        <td data-title="Name">Jhon Doe</td>
        <td data-title="Company">Seven</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">13</td>
        <td data-title="Name">Tony MacLaren</td>
        <td data-title="Company">SamySu</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">14</td>
        <td data-title="Name">Mary of Neighborhood</td>
        <td data-title="Company">OnMyTv SA</td>
        <td data-title="Action">Edit</td>
      </tr>
      <tr>
        <td data-title="Id">15</td>
        <td data-title="Name">Chapolin Colorado</td>
        <td data-title="Company">OnMyTv SA</td>
        <td data-title="Action">Edit</td>
      </tr>
    </tbody>
  </table>;

class Tables extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">TABELAS</h3>
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
              Todas as tabales podem ser responsivas, basta encapsular o código da mesma em uma div com a classe{' '}
              <code className="sv-code">sv-table-responsive-vertical</code> e adicionar o atributo{' '}
              <code className="sv-code">data-title</code> nas tags <code className="sv-code">td</code>
            </p>
            <h4 className="sv-fw-normal sv-ts-i">Tabela responsiva padrão</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={responsiveTable} code={tableCodes.responsiveTable} height="240px" />

            <h4 className="sv-fw-normal sv-ts-i">Tabela Zebrada</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={zebraTable} code={tableCodes.zebraTable} height="240px" />

            <h4 className="sv-fw-normal sv-ts-i">Tabela sem bordas</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={borderlessTable} code={tableCodes.borderlessTable} height="240px" />

            <h4 className="sv-fw-normal sv-ts-i">Tabela compacta</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={compactTable} code={tableCodes.compactTable} height="200px" />

            <h4 className="sv-fw-normal sv-ts-i">Tabela Espaçada</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={spacedTable} code={tableCodes.spacedTable} height="280px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Tables;
