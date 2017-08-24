import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import formCodes from '../../codes/forms';

const formDefault = () =>
  <form className="sv-form">
    <fieldset>
      <legend>Exemplo de titulo</legend>
      <SvRow>
        <SvCol>
          <label>
            <span>Name</span>
            <input name="name" type="text" />
          </label>
        </SvCol>
      </SvRow>
      <SvRow>
        <SvCol>
          <label>
            <span>E-mail</span>
            <input name="email" type="text" />
          </label>
        </SvCol>
      </SvRow>
      <SvRow>
        <SvCol>
          <label>
            <span>Disabled Field</span>
            <input disabled name="login" type="text" value="Disabled field" />
          </label>
        </SvCol>
      </SvRow>
      <SvRow>
        <SvCol>
          <label>
            <span>Gender</span>
            <div className="sv-select">
              <select>
                <option value="">Please, select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <label>
                <i className="fa fa-angle-down fa-fw" />
              </label>
            </div>
          </label>
        </SvCol>
      </SvRow>
    </fieldset>
    <div className="sv-form-action">
      <button className="sv-button out-info">cancelar</button>
      <button className="sv-button info sv-ml--15">salvar</button>
    </div>
  </form>;

const formCompact = () =>
  <form className="sv-form sv-compact">
    <fieldset className="bordered sv-bg-color--steel-50">
      <legend>Exemplo de titulo</legend>
      <SvRow>
        <SvCol>
          <label>
            <span>Name</span>
            <input name="name" type="text" />
          </label>
        </SvCol>
      </SvRow>
      <SvRow>
        <SvCol>
          <label>
            <span>E-mail</span>
            <input name="email" type="text" />
          </label>
        </SvCol>
      </SvRow>
      <SvRow>
        <SvCol>
          <label>
            <span>Disabled Field</span>
            <input disabled name="login" type="text" value="Disabled field" />
          </label>
        </SvCol>
      </SvRow>
      <SvRow>
        <SvCol>
          <label>
            <span>Gender</span>
            <div className="sv-select">
              <select>
                <option value="">Please, select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <label>
                <i className="fa fa-angle-down fa-fw" />
              </label>
            </div>
          </label>
        </SvCol>
      </SvRow>
    </fieldset>
    <div className="sv-form-action">
      <button className="sv-button out-info">cancelar</button>
      <button className="sv-button info sv-ml--15">salvar</button>
    </div>
  </form>;

const formGrid = () =>
  <form className="sv-form sv-compact">
    <fieldset className="bordered sv-bg-color--steel-50">
      <legend>Exemplo de titulo</legend>
      <SvRow withGutter>
        <SvCol>
          <label>
            <span>First Name</span>
            <input name="firstName" type="text" />
          </label>
        </SvCol>
        <SvCol>
          <label>
            <span>Last Name</span>
            <input name="lastName" type="text" />
          </label>
        </SvCol>
        <SvCol>
          <label>
            <span>E-mail</span>
            <input name="email" type="text" />
          </label>
        </SvCol>
        <SvCol>
          <label>
            <span>Confirm E-mail</span>
            <input name="confirmEmail" type="text" />
          </label>
        </SvCol>
      </SvRow>
      <SvRow withGutter>
        <SvCol>
          <label>
            <span>Disabled Field</span>
            <input disabled name="login" type="text" value="Disabled field" />
          </label>
        </SvCol>
        <SvCol>
          <label>
            <span>Gender</span>
            <div className="sv-select">
              <select>
                <option value="">Please, select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <label>
                <i className="fa fa-angle-down fa-fw" />
              </label>
            </div>
          </label>
        </SvCol>
      </SvRow>
    </fieldset>
    <div className="sv-form-action">
      <button className="sv-button out-info">cancelar</button>
      <button className="sv-button info sv-ml--15">salvar</button>
    </div>
  </form>;

const formFull = () =>
  <form className="sv-form">
    <fieldset>
      <legend>Access Info</legend>

      <label>
        <span>Username</span>
        <input type="text" placeholder="Your username to login app" />
      </label>

      <div className="sv-row--with-gutter sv-ma--0">
        <div className="sv-column">
          <label>
            <span data-info="(8 caracters)" data-error="Error">
              Password
            </span>
            <input type="password" className="is--invalid" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Confirm Password</span>
            <input type="password" />
          </label>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Personal Info</legend>
      <label>
        <span>Full Name</span>
        <input type="text" placeholder="All names" />
      </label>
      <label>
        <span data-info="(Optional)">Birth Date</span>
        <input type="text" placeholder="dd/mm/yyyy" />
      </label>
      <label>
        <span>Gender:</span>
        <div className="sv-select">
          <select>
            <option value="">Please, select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <label>
            <i className="fa fa-angle-down fa-fw" />
          </label>
        </div>
      </label>
    </fieldset>

    <fieldset>
      <legend>Skills</legend>

      <label>
        <span>Language:</span>

        <label>
          <input type="checkbox" value="English" /> English
        </label>
        <label>
          <input type="checkbox" value="Portuguese" /> Portuguese
        </label>
        <label>
          <input type="checkbox" value="Spanish" /> Spanish
        </label>
      </label>

      <label>
        <span>Level:</span>
        <label>
          <input type="radio" value="Junior" name="level" /> Junior
        </label>
        <label>
          <input type="radio" value="Master" name="level" /> Master
        </label>
        <label>
          <input type="radio" value="Leader" name="level" /> Leader
        </label>
        <label>
          <input type="radio" value="Senior" name="level" /> Senior
        </label>
      </label>
    </fieldset>
    <div className="sv-form-action">
      <button className="sv-button out-info">cancelar</button>
      <button className="sv-button info sv-ml--15">salvar</button>
    </div>
  </form>;

class FormsPage extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">FORMULÁRIOS</h3>
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
            <h4 className="sv-fw-normal sv-ts-i">Formulário Padrão</h4>
            <hr className="sv-mb--10" />
            <ShowCase example={formDefault} code={formCodes.defaultForm} height="450px" />

            <h4 className="sv-fw-normal sv-ts-i">Formulário Compacto</h4>
            <hr />
            <ShowCase example={formCompact} code={formCodes.compactForm} height="450px" />

            <h4 className="sv-fw-normal sv-ts-i">Formulário usando Grid</h4>
            <hr />
            <ShowCase example={formGrid} code={formCodes.formGrid} height="300px" />

            <h4 className="sv-fw-normal sv-ts-i">Exemplo de Formulário Completo</h4>
            <hr />
            <ShowCase example={formFull} code={formCodes.formFull} height="900px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <p>Em breve</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default FormsPage;
