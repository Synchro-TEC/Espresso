import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import messageBoxCodes from '../../codes/messageBox';

const MessageBoxInfo = () =>
  <div className="sv-messagebox info">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Info Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxSuccess = () =>
  <div className="sv-messagebox success">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Success Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxError = () =>
  <div className="sv-messagebox error">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Error Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxWarning = () =>
  <div className="sv-messagebox warning">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Warning Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

class MessageBox extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">MESSAGE BOX</h3>

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
            <h4 className="sv-fw-normal sv-fm-i">Message Box Success</h4>
            <hr />
            <ShowCase example={MessageBoxSuccess} code={messageBoxCodes.messageBoxSuccess} height="150px" />
            <h4 className="sv-fw-normal sv-fm-i sv-mt--15">Message Box Error</h4>
            <hr />
            <ShowCase example={MessageBoxError} code={messageBoxCodes.messageBoxError} height="150px" />
            <h4 className="sv-fw-normal sv-fm-i sv-mt--15">Message Box Info</h4>
            <hr />
            <ShowCase example={MessageBoxInfo} code={messageBoxCodes.messageBoxInfo} height="150px" />
            <h4 className="sv-fw-normal sv-fm-i sv-mt--15">Message Box Warning</h4>
            <hr />
            <ShowCase example={MessageBoxWarning} code={messageBoxCodes.messageBoxWarning} height="150px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>HERMES</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default MessageBox;
