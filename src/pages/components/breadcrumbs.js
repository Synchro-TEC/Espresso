import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import breadcrumbsCodes from '../../codes/breadcrumbs';

const defaultBreadCrumbs = () =>
  <div>
    <ul className="sv-breadcrumb">
      <li>
        <a href="#">
          <i className="fa fa-home fa-fw" />
        </a>
      </li>
      <li>
        <a href="#">Users</a>
      </li>
      <li>
        <a href="#">Items</a>
      </li>
      <li>
        <a href="#">Config</a>
      </li>
    </ul>
    <ul className="sv-breadcrumb">
      <li>
        <a href="#">
          <i className="fa fa-home fa-fw" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-male fa-fw" /> Users
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-database fa-fw" /> Items
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-cog fa-fw" /> Config
        </a>
      </li>
    </ul>
  </div>;

const thinBreadCrumbs = () =>
  <div>
    <ul className="sv-breadcrumb--thin">
      <li>
        <a href="#">
          <i className="fa fa-home fa-fw" />
        </a>
      </li>
      <li>
        <a href="#">Users</a>
      </li>
      <li>
        <a href="#">Items</a>
      </li>
      <li>
        <a href="#">Config</a>
      </li>
    </ul>
    <ul className="sv-breadcrumb--thin">
      <li>
        <a href="#">
          <i className="fa fa-home fa-fw" />
        </a>
      </li>
      <li>
        <a href="#">A page with a long name</a>
      </li>
      <li>
        <a href="#">Another page with a long name, very long</a>
      </li>
      <li>
        <a href="#">Another page with a long name, the longest name in a page</a>
      </li>
    </ul>
  </div>;

class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">BREADCRUMBS</h3>

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
            <h4 className="sv-fw-normal sv-fw-normal sv-ts-i">Breadcrumbs estilizado</h4>
            <hr />

            <ShowCase
              example={defaultBreadCrumbs}
              code={breadcrumbsCodes.defaultBreadcrumb}
              height="220px"
              bgColorContent="#fff"
            />

            <h4 className="sv-fw-normal sv-fw-normal sv-ts-i">Breadcrumbs Simplificados</h4>
            <hr />

            <ShowCase example={thinBreadCrumbs} code={breadcrumbsCodes.thinBreadcrumb} height="220px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Breadcrumbs;
