import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import tagsCodes from '../../codes/tags';

const tagDefault = () =>
  <div className="sv-tag default">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Default</span>
  </div>;

const tagPrimary = () =>
  <div className="sv-tag primary">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Primary</span>
  </div>;

const tagDanger = () =>
  <div className="sv-tag danger">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Danger</span>
  </div>;

const tagInfo = () =>
  <div className="sv-tag info">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Info</span>
  </div>;

const tagWarning = () =>
  <div className="sv-tag warning">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Warning</span>
  </div>;

class Tags extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">TAGS</h3>

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
            <h4 className="sv-fw-normal sv-ts-i">Tag default</h4>
            <hr />
            <ShowCase example={tagDefault} code={tagsCodes.tagDefault} height="90px" />
            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Tag primary</h4>
            <hr />
            <ShowCase example={tagPrimary} code={tagsCodes.tagPrimary} height="90px" />
            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Tag danger</h4>
            <hr />
            <ShowCase example={tagDanger} code={tagsCodes.tagDanger} height="90px" />
            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Tag info</h4>
            <hr />
            <ShowCase example={tagInfo} code={tagsCodes.tagInfo} height="90px" />
            <h4 className="sv-fw-normal sv-ts-i sv-mt--15">Tag warning</h4>
            <hr />
            <ShowCase example={tagWarning} code={tagsCodes.tagWarning} height="90px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve.</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Tags;
