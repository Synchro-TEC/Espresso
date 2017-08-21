import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import listCodes from '../../codes/lists';

const listDefault = () =>
  <ul>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>;

const listStyled = () =>
  <ul className="sv-list-styled">
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>;

const listInline = () =>
  <ul className="sv-list-inline">
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ul>;

const listDl = () =>
  <dl>
    <dt>Um Título</dt>
    <dd>Uma descrição ou texto referente ao título</dd>
    <dt>Um Título</dt>
    <dd>Uma descrição ou texto referente ao título</dd>
    <dt>Um Título</dt>
    <dd>Uma descrição ou texto referente ao título</dd>
    <dt>Um Título</dt>
    <dd>Uma descrição ou texto referente ao título</dd>
  </dl>;

const listOl = () =>
  <ol>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ol>;

const listOlStyled = () =>
  <ol className="sv-ol">
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </ol>;

class Lists extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">Listas</h3>

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
            <h4 className="sv-fw-normal sv-ts-i">Lista UL Padrão</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={listDefault} code={listCodes.listDefault} height="150px" />

            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Lista UL com estilo</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={listStyled} code={listCodes.listStyled} height="150px" />

            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Lista UL Inline</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={listInline} code={listCodes.listInline} height="150px" />

            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Lista DL</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={listDl} code={listCodes.listDl} height="150px" />

            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Lista OL padrão</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={listOl} code={listCodes.listOl} height="150px" />

            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Lista OL com estilo</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={listOlStyled} code={listCodes.listOlStyled} height="150px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve.</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Lists;
