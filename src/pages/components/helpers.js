import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import helperCodes from '../../codes/helpers';

const textAlign = () =>
  <SvRow withGutter>
    <SvCol className="sv-text-left sv-pa--20">
      <b>Text Left</b>
      <br />
      Hamburger capicola kielbasa filet mignon cow tongue. Ham hock capicola ball tip drumstick, hamburger kevin pork
      belly sausage. Meatloaf bacon ground round, ham porchetta pork shank andouille tongue flank spare ribs.
    </SvCol>
    <SvCol className="sv-text-center sv-pa--20">
      <b>Text Center</b>
      <br />
      Hamburger capicola kielbasa filet mignon cow tongue. Ham hock capicola ball tip drumstick, hamburger kevin pork
      belly sausage. Meatloaf bacon ground round, ham porchetta pork shank andouille tongue flank spare ribs.
    </SvCol>
    <SvCol className="sv-text-right sv-pa--20">
      <b>Text Right</b>
      <br />
      Hamburger capicola kielbasa filet mignon cow tongue. Ham hock capicola ball tip drumstick, hamburger kevin pork
      belly sausage. Meatloaf bacon ground round, ham porchetta pork shank andouille tongue flank spare ribs.
    </SvCol>
    <SvCol className="sv-text-justify sv-pa--20">
      <b>Text Justify</b>
      <br />
      Hamburger capicola kielbasa filet mignon cow tongue. Ham hock capicola ball tip drumstick, hamburger kevin pork
      belly sausage. Meatloaf bacon ground round, ham porchetta pork shank andouille tongue flank spare ribs.
    </SvCol>
  </SvRow>;

class Helpers extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">HELPERS</h3>
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
            <h4 className="sv-fw-normal sv-ts-i">Alinhamento de texto</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={textAlign} code={helperCodes.textAlign} height="280px" />
            <h4 className="sv-fw-normal sv-ts-i">Alinhamento de elementos</h4>
            <hr className="sv-mb--10" />
            <p>em breve</p>
            <h4 className="sv-fw-normal sv-ts-i">Alinhamento de elementos flex</h4>
            <hr className="sv-mb--10" />
            <p>em breve</p>
            <h4 className="sv-fw-normal sv-ts-i">Border Radius</h4>
            <hr className="sv-mb--10" />
            <p>em breve</p>
            <h4 className="sv-fw-normal sv-ts-i">Borders</h4>
            <hr className="sv-mb--10" />
            <p>em breve</p>
            <h4 className="sv-fw-normal sv-ts-i">Linhas</h4>
            <hr className="sv-mb--10" />
            <p>em breve</p>
            <h4 className="sv-fw-normal sv-ts-i">Hidden e Pointer</h4>
            <hr className="sv-mb--10" />
            <p>em breve</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Helpers;
