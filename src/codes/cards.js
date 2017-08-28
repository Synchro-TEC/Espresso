export default {
  cardEstyled: `<div class="sv-card">
  <header class="sv-bg-color--gray-100">
    <h4 class="sv-color-blue--gray-700">My Card</h4>
  </header>
  <main>
    Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
  </main>
  <footer>Do it</footer>
</div>`,
  cardDefault: `<div class="sv-card">
  <header>
    <h4>My Card</h4>
  </header>
  <main>
    Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
  </main>
  <footer>Do it</footer>
</div>;`,
  cardGrid: `<div class="sv-row--with-gutter">
  <div class="sv-column">
     <div class="sv-card">
        <header>
           <h4>My Card</h4>
        </header>
        <main>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.</main>
        <footer>Do it</footer>
     </div>
  </div>
  <div class="sv-column">
     <div class="sv-card">
        <header>
           <h4>My Card</h4>
        </header>
        <main>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.</main>
        <footer>Do it</footer>
     </div>
  </div>
  <div class="sv-column">
     <div class="sv-card">
        <header>
           <h4>My Card</h4>
        </header>
        <main>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.</main>
        <footer>Do it</footer>
     </div>
  </div>
  <div class="sv-column">
     <div class="sv-card">
        <header>
           <h4>My Card</h4>
        </header>
        <main>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.</main>
        <footer>Do it</footer>
     </div>
  </div>
  <div class="sv-column">
     <div class="sv-card">
        <header>
           <h4>My Card</h4>
        </header>
        <main>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.</main>
        <footer>Do it</footer>
     </div>
  </div>
</div>`,
  segmentDefault: `<div class="sv-row--with-gutter">
  <div class="sv-column">
      <div class="sv-segment">Texto</div>
  </div>
  <div class="sv-column">
      <div class="sv-segment">Texto</div>
  </div>
</div>`,
  segmentStyled: `<div class="sv-row--with-gutter">
  <div class="sv-column">
      <div class="sv-segment" style="width: 300px; margin: 0px auto;"><img src="http://via.placeholder.com/300x120/429ce8/ffffff?text=Imagem">
          <p class="sv-pa--15">A text here</p>
      </div>
  </div>
  <div class="sv-column">
      <div class="sv-segment sv-pa--25 sv-bg-color--red-50">asdad</div>
  </div>
  <div class="sv-column">
      <div class="sv-segment sv-pa--15 sv-bg-color--blue-50">asdad</div>
  </div>
</div>
  `,
  cardDefaultExampleShow: `
  import React, { Component } from 'react';
  import { SvRow, SvCol } from 'syntec-apollo-11';
  import { SvCard } from 'syntec-apollo-11';

  export default class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <SvCard>
          <SvCard.Header>
            <h4>My Card</h4>
          </SvCard.Header>
          <SvCard.Main>
            Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
          </SvCard.Main>
          <SvCard.Footer>Do it</SvCard.Footer>
        </SvCard>
      );
    }
  }    
  `,

  cardHeaderStyledExampleShow: `
  import React, { Component } from 'react';
  import { SvRow, SvCol } from 'syntec-apollo-11';
  import { SvCard } from 'syntec-apollo-11';

  export default class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <SvCard>
          <SvCard.Header className="sv-bg-color--gray-100">
            <h4>My Card</h4>
          </SvCard.Header>
          <SvCard.Main>
            Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
          </SvCard.Main>
          <SvCard.Footer>Do it</SvCard.Footer>
        </SvCard>
      );
    }
  }    
  `,

  cardGridExampleShow: `
  import React, { Component } from 'react';
  import { SvRow, SvCol } from 'syntec-apollo-11';
  import { SvCard } from 'syntec-apollo-11';

  export default class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
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
        </SvRow>        
      );
    }
  }    
  `,
  segmentExampleShow: `
  import React, { Component } from 'react';
  import { SvRow, SvCol } from 'syntec-apollo-11';
  import { SvSegment } from 'syntec-apollo-11';

  export default class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <SvRow withGutter>
          <SvCol>
            <SvSegment>Texto 1</SvSegment>
          </SvCol>
          <SvCol>
            <SvSegment>Texto 2</SvSegment>
          </SvCol>
        </SvRow>
      );
    }
  }    
  `,

  styledSegmentExampleShow: `
  import React, { Component } from 'react';
  import { SvRow, SvCol } from 'syntec-apollo-11';
  import { SvSegment } from 'syntec-apollo-11';

  export default class Example extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
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
        </SvRow>        
      );
    }
  }    
  `,
};
