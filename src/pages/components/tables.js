import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';

class Tables extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">TABELAS</h3>
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
            <h4 className="sv-fw-normal sv-ts-i">Tabela Padrão</h4>
            <hr />
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
                </tbody>
              </table>
            </div>

            <h4 className="sv-fw-normal sv-ts-i">Tabela Zebrada</h4>
            <hr />
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
            </table>
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
