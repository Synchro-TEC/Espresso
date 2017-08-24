import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import formCodes from '../../codes/forms';

const progressBar = () =>
  <form className="sv-form">
    <progress value="54" max="100" />
  </form>;

const validInvalid = () =>
  <form className="sv-form">
    <SvRow withGutter>
      <SvCol>
        <label>
          <span>Campo validado</span>
          <input type="text" placeholder="valid" className="is--valid" />
        </label>
      </SvCol>
      <SvCol>
        <label>
          <span>Campo Invalidado</span>
          <input type="text" placeholder="invalid" className="is--invalid" />
        </label>
      </SvCol>
    </SvRow>
  </form>;

class FormHelpersPage extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">FORM HELPERS</h3>
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
            <h4 className="sv-fw-normal sv-ts-i">Progress Bar</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={progressBar} code={formCodes.progressBar} height="80px" />

            <h4 className="sv-fw-normal sv-ts-i">Inputs válidos e inválidos</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={validInvalid} code={formCodes.validInvalid} height="120px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default FormHelpersPage;
