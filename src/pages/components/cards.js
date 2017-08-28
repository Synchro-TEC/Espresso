import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { SvCard, SvCardFooter, SvCardHeader, SvCardMain } from 'syntec-apollo-11';
import { SvSegment } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import cardCodes from '../../codes/cards';

const cardEstyled = () =>
  <div className="sv-card">
    <header className="sv-bg-color--gray-100">
      <h4 className="sv-color-blue--gray-700">My Card</h4>
    </header>
    <main>
      Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
    </main>
    <footer>Do it</footer>
  </div>;

const cardDefault = () =>
  <div className="sv-card">
    <header>
      <h4>My Card</h4>
    </header>
    <main>
      Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
    </main>
    <footer>Do it</footer>
  </div>;

const cardHeaderEstilizadoExampleShow = () =>
  <SvCard>
    <SvCard.Header className="sv-bg-color--gray-100">
      <h4>My Card</h4>
    </SvCard.Header>
    <SvCard.Main>
      Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
    </SvCard.Main>
    <SvCard.Footer>Do it</SvCard.Footer>
  </SvCard>;

const cardComGridExampleShow = () =>
  <SvRow>
    <SvCol>
      <SvCard>
        <SvCard.Header>
          <h4>My Card</h4>
        </SvCard.Header>
        <SvCard.Main>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris,
          paradis.
        </SvCard.Main>
        <SvCard.Footer>Do it</SvCard.Footer>
      </SvCard>
    </SvCol>

    <SvCol>
      <SvCard>
        <SvCard.Header>
          <h4>My Card</h4>
        </SvCard.Header>
        <SvCard.Main>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris,
          paradis.
        </SvCard.Main>
        <SvCard.Footer>Do it</SvCard.Footer>
      </SvCard>
    </SvCol>

    <SvCol>
      <SvCard>
        <SvCard.Header>
          <h4>My Card</h4>
        </SvCard.Header>
        <SvCard.Main>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris,
          paradis.
        </SvCard.Main>
        <SvCard.Footer>Do it</SvCard.Footer>
      </SvCard>
    </SvCol>

    <SvCol>
      <SvCard>
        <SvCard.Header>
          <h4>My Card</h4>
        </SvCard.Header>
        <SvCard.Main>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris,
          paradis.
        </SvCard.Main>
        <SvCard.Footer>Do it</SvCard.Footer>
      </SvCard>
    </SvCol>

    <SvCol>
      <SvCard>
        <SvCard.Header>
          <h4>My Card</h4>
        </SvCard.Header>
        <SvCard.Main>
          Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris,
          paradis.
        </SvCard.Main>
        <SvCard.Footer>Do it</SvCard.Footer>
      </SvCard>
    </SvCol>
  </SvRow>;

const segmentDefaultExampleShow = () =>
  <SvRow withGutter>
    <SvCol>
      <SvSegment>Texto 1</SvSegment>
    </SvCol>
    <SvCol>
      <SvSegment>Texto 2</SvSegment>
    </SvCol>
  </SvRow>;

const segmentWithStyleExampleShow = () =>
  <SvRow withGutter>
    <SvCol>
      <SvSegment style="width: 300px; margin: 0px auto;">
        <img src="http://via.placeholder.com/300x120/429ce8/ffffff?text=Imagem" />
        <p class="sv-pa--15">A text here</p>
      </SvSegment>
    </SvCol>

    <SvCol>
      <SvSegment className="sv-pa--25 sv-bg-color--red-50">asdad</SvSegment>
    </SvCol>
    <SvCol>
      <SvSegment className="sv-pa--15 sv-bg-color--blue-50">asdad</SvSegment>
    </SvCol>
  </SvRow>;

const cardDefaultExampleShow = () =>
  <SvCard>
    <SvCard.Header>
      <h4>My Card</h4>
    </SvCard.Header>
    <SvCard.Main>
      Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
    </SvCard.Main>
    <SvCard.Footer>Do it</SvCard.Footer>
  </SvCard>;

const cardGrid = () =>
  <SvRow withGutter>
    <SvCol>
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
    </SvCol>
    <SvCol>
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
    </SvCol>
    <SvCol>
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
    </SvCol>
    <SvCol>
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
    </SvCol>
    <SvCol>
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
    </SvCol>
  </SvRow>;

const segmentDefault = () =>
  <SvRow withGutter>
    <SvCol>
      <div className="sv-segment">Texto</div>
    </SvCol>
    <SvCol>
      <div className="sv-segment">Texto</div>
    </SvCol>
  </SvRow>;

const segmentStyled = () =>
  <SvRow withGutter>
    <SvCol>
      <div className="sv-segment" style={{ width: '300px', margin: '0 auto' }}>
        <img src="http://via.placeholder.com/300x120/429ce8/ffffff?text=Imagem" />
        <p className="sv-pa--15">A text here</p>
      </div>
    </SvCol>
    <SvCol>
      <div className="sv-segment sv-pa--25 sv-bg-color--red-50">asdad</div>
    </SvCol>
    <SvCol>
      <div className="sv-segment sv-pa--15 sv-bg-color--blue-50">asdad</div>
    </SvCol>
  </SvRow>;

class Cards extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">CARDS</h3>
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
            <h4 className="sv-fw-normal sv-ts-i">Card padrão</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={cardDefault} code={cardCodes.cardDefault} height="210px" />

            <h4 className="sv-fw-normal svsv-flex-center-ts-i">Card com header estilizado</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={cardEstyled} code={cardCodes.cardEstyled} height="210px" />

            <h4 className="sv-fw-normal sv-ts-i">Card com grid</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={cardGrid} code={cardCodes.cardGrid} height="280px" />

            <h3 className="sv-fw-normal">Segmentos</h3>
            <hr />
            <p>
              Os segmentos são parecidos com os cards, porém eles não possuem a estrutura de Header, Body e Footer. Logo
              ele pode ser usado de uma forma mais livre.
            </p>

            <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Segmento padrão</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={segmentDefault} code={cardCodes.segmentDefault} height="120px" />

            <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Segmento com estilos</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={segmentStyled} code={cardCodes.segmentStyled} height="300px" />
          </TabPanel>

          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <h4 className="sv-fw-normal sv-ts-i">Card padrão</h4>
            <hr />

            <ShowCase
              height="210px"
              example={cardDefaultExampleShow}
              code={cardCodes.cardDefaultExampleShow}
              language="jsx"
            />

            <h4 className="sv-fw-normal sv-ts-i">Card com header estilizado</h4>
            <hr />

            <ShowCase
              height="210px"
              example={cardHeaderEstilizadoExampleShow}
              code={cardCodes.cardDefaultExampleShow}
              language="jsx"
            />

            <h4 className="sv-fw-normal sv-ts-i">Card com grid</h4>
            <hr />
            <ShowCase
              height="340px"
              example={cardComGridExampleShow}
              code={cardCodes.cardDefaultExampleShow}
              language="jsx"
            />

            <h4 className="sv-fw-normal sv-ts-i">Segmento default</h4>
            <hr />
            <ShowCase
              height="190px"
              example={segmentDefaultExampleShow}
              code={cardCodes.cardDefaultExampleShow}
              language="jsx"
            />

            <h4 className="sv-fw-normal sv-ts-i">Segmento com estilos</h4>
            <hr />
            <ShowCase
              height="190px"
              example={segmentWithStyleExampleShow}
              code={cardCodes.cardDefaultExampleShow}
              language="jsx"
            />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Cards;
