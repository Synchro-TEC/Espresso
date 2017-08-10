import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import loadersCode from '../../codes/loaders';

const loaderBar = () => <span className="sv-bar-loader" />;
const loaderBarLarge = () => <span className="sv-bar-loader large" />;

const spinLoader = () => <span className="sv-spin-loader" />;
const spinLoaderLarge = () => <span className="sv-spin-loader large" />;

class Loaders extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">LOADERS</h3>

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
            <h4 className="sv-fw-normal sv-fm-i">Loader em barra</h4>
            <hr />
            <ShowCase example={loaderBar} code={loadersCode.loaderBar} height="70px" />
            <h4 className="sv-fw-normal sv-fm-i sv-mt--15">Loader em barra large</h4>
            <hr />
            <ShowCase example={loaderBarLarge} code={loadersCode.loaderBarLarge} height="70px" />

            <h4 className="sv-fw-normal sv-fm-i sv-mt--15">Loader spin</h4>
            <hr />
            <ShowCase example={spinLoader} code={loadersCode.spinLoader} height="70px" />
            <h4 className="sv-fw-normal sv-fm-i sv-mt--15">Loader spin large</h4>
            <hr />
            <ShowCase example={spinLoaderLarge} code={loadersCode.spinLoaderLarge} height="70px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve.</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Loaders;
