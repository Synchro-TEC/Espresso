import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';

class Cards extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">CARDS</h3>
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
            <div className="sv-card">
              <header>
                <h4>My Card</h4>
              </header>
              <main>
                Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris,
                paradis.
              </main>
              <footer>Do it</footer>
            </div>
            <div className="sv-mb--20" />

            <div className="sv-card">
              <header className="sv-bg-color--gray-50">
                <h4 className="sv-color-blue--gray-700">My Card</h4>
              </header>
              <main>
                Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris,
                paradis.
              </main>
              <footer>Do it</footer>
            </div>
            <div className="sv-mb--20" />
            <SvRow withGutter>
              <SvCol>
                <div className="sv-card">
                  <header>
                    <h4>My Card</h4>
                  </header>
                  <main>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis
                    porris, paradis.
                  </main>
                  <footer>Do it</footer>
                </div>
              </SvCol>
              <SvCol>
                <div className="sv-card">
                  <header>
                    <h4>My Card</h4>
                  </header>
                  <main>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis
                    porris, paradis.
                  </main>
                  <footer>Do it</footer>
                </div>
              </SvCol>
              <SvCol>
                <div className="sv-card">
                  <header>
                    <h4>My Card</h4>
                  </header>
                  <main>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis
                    porris, paradis.
                  </main>
                  <footer>Do it</footer>
                </div>
              </SvCol>
              <SvCol>
                <div className="sv-card">
                  <header>
                    <h4>My Card</h4>
                  </header>
                  <main>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis
                    porris, paradis.
                  </main>
                  <footer>Do it</footer>
                </div>
              </SvCol>
              <SvCol>
                <div className="sv-card">
                  <header>
                    <h4>My Card</h4>
                  </header>
                  <main>
                    Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis
                    porris, paradis.
                  </main>
                  <footer>Do it</footer>
                </div>
              </SvCol>
            </SvRow>
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Cards;
