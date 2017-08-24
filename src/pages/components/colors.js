import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Colors extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">CORES</h3>

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
            <p className="sv-text-big sv-mt--25">
              Todas as cores podem ser usadas de 3 formas: Font Color, Background Color and Border Color. Para definir a
              cor da fonte, use o prefixo <code className="sv-code">sv-color</code> +{' '}
              <code className="sv-code">--color-name</code>, por exemplo:{' '}
              <code className="sv-code">sv-color--blue-50</code>. Para usar como background color use o prefixo
              <code className="sv-code">sv-bg-color</code>
              e para a cor das bordas <code className="sv-code">sv-bd-color</code>.
            </p>
            <p className="sv-text-big sv-mt--25">
              Exemplo dos usos: <code className="sv-code">sv-color--blue-50</code>{' '}
              <code className="sv-code">sv-bg-color--blue-50</code>{' '}
              <code className="sv-code">sv-bd-color--blue-50</code>
            </p>

            <div className="sv-row">
              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Blue</h6>
                <div className="sv-bg-color--blue-50 dm-color  sv-color--gray-800">--blue-50</div>
                <div className="sv-bg-color--blue-100 dm-color sv-color--gray-800">
                  --blue-100<br />
                </div>
                <div className="sv-bg-color--blue-200 dm-color sv-color--gray-800">
                  --blue-200<br />
                </div>
                <div className="sv-bg-color--blue-300 dm-color sv-color--gray-800">
                  --blue-300<br />
                </div>
                <div className="sv-bg-color--blue-400 dm-color sv-color--gray-800">
                  --blue-400<br />
                </div>
                <div className="sv-bg-color--blue-500 dm-color sv-color--white-1">
                  --blue-500<br />
                </div>
                <div className="sv-bg-color--blue-600 dm-color sv-color--white-1">
                  --blue-600<br />
                </div>
                <div className="sv-bg-color--blue-700 dm-color sv-color--white-1">
                  --blue-700<br />
                </div>
                <div className="sv-bg-color--blue-800 dm-color sv-color--white-1">
                  --blue-800<br />
                </div>
                <div className="sv-bg-color--blue-900 dm-color sv-color--white-1">
                  --blue-900<br />
                </div>
              </div>
              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Green</h6>
                <div className="sv-bg-color--green-50 dm-color  sv-color--gray-800">
                  --green-50<br />
                </div>
                <div className="sv-bg-color--green-100 dm-color sv-color--gray-800">
                  --green-100<br />
                </div>
                <div className="sv-bg-color--green-200 dm-color sv-color--gray-800">
                  --green-200<br />
                </div>
                <div className="sv-bg-color--green-300 dm-color sv-color--gray-800">
                  --green-300<br />
                </div>
                <div className="sv-bg-color--green-400 dm-color sv-color--gray-800">
                  --green-400<br />
                </div>
                <div className="sv-bg-color--green-500 dm-color sv-color--white-1">
                  --green-500<br />
                </div>
                <div className="sv-bg-color--green-600 dm-color sv-color--white-1">
                  --green-600<br />
                </div>
                <div className="sv-bg-color--green-700 dm-color sv-color--white-1">
                  --green-700<br />
                </div>
                <div className="sv-bg-color--green-800 dm-color sv-color--white-1">
                  --green-800<br />
                </div>
                <div className="sv-bg-color--green-900 dm-color sv-color--white-1">
                  --green-900<br />
                </div>
              </div>
              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Red</h6>
                <div className="sv-bg-color--red-50 dm-color  sv-color--gray-800">
                  --red-50<br />
                </div>
                <div className="sv-bg-color--red-100 dm-color sv-color--gray-800">
                  --red-100<br />
                </div>
                <div className="sv-bg-color--red-200 dm-color sv-color--gray-800">
                  --red-200<br />
                </div>
                <div className="sv-bg-color--red-300 dm-color sv-color--gray-800">
                  --red-300<br />
                </div>
                <div className="sv-bg-color--red-400 dm-color sv-color--gray-800">
                  --red-400<br />
                </div>
                <div className="sv-bg-color--red-500 dm-color sv-color--white-1">
                  --red-500<br />
                </div>
                <div className="sv-bg-color--red-600 dm-color sv-color--white-1">
                  --red-600<br />
                </div>
                <div className="sv-bg-color--red-700 dm-color sv-color--white-1">
                  --red-700<br />
                </div>
                <div className="sv-bg-color--red-800 dm-color sv-color--white-1">
                  --red-800<br />
                </div>
                <div className="sv-bg-color--red-900 dm-color sv-color--white-1">
                  --red-900<br />
                </div>
              </div>
            </div>

            <div className="sv-row">
              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Yellow</h6>
                <div className="sv-bg-color--yellow-50 dm-color  sv-color--gray-800">
                  --yellow-50<br />
                </div>
                <div className="sv-bg-color--yellow-100 dm-color sv-color--gray-800">
                  --yellow-100<br />
                </div>
                <div className="sv-bg-color--yellow-200 dm-color sv-color--gray-800">
                  --yellow-200<br />
                </div>
                <div className="sv-bg-color--yellow-300 dm-color sv-color--gray-800">
                  --yellow-300<br />
                </div>
                <div className="sv-bg-color--yellow-400 dm-color sv-color--gray-800">
                  --yellow-400<br />
                </div>
                <div className="sv-bg-color--yellow-500 dm-color sv-color--gray-800">
                  --yellow-500<br />
                </div>
                <div className="sv-bg-color--yellow-600 dm-color sv-color--gray-800">
                  --yellow-600<br />
                </div>
                <div className="sv-bg-color--yellow-700 dm-color sv-color--gray-800">
                  --yellow-700<br />
                </div>
                <div className="sv-bg-color--yellow-800 dm-color sv-color--gray-800">
                  --yellow-800<br />
                </div>
                <div className="sv-bg-color--yellow-900 dm-color sv-color--gray-800">
                  --yellow-900<br />
                </div>
              </div>
              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Orange</h6>
                <div className="sv-bg-color--orange-50 dm-color  sv-color--gray-800">
                  --orange-50<br />
                </div>
                <div className="sv-bg-color--orange-100 dm-color sv-color--gray-800">
                  --orange-100<br />
                </div>
                <div className="sv-bg-color--orange-200 dm-color sv-color--gray-800">
                  --orange-200<br />
                </div>
                <div className="sv-bg-color--orange-300 dm-color sv-color--gray-800">
                  --orange-300<br />
                </div>
                <div className="sv-bg-color--orange-400 dm-color sv-color--gray-800">
                  --orange-400<br />
                </div>
                <div className="sv-bg-color--orange-500 dm-color sv-color--white-1">
                  --orange-500<br />
                </div>
                <div className="sv-bg-color--orange-600 dm-color sv-color--white-1">
                  --orange-600<br />
                </div>
                <div className="sv-bg-color--orange-700 dm-color sv-color--white-1">
                  --orange-700<br />
                </div>
                <div className="sv-bg-color--orange-800 dm-color sv-color--white-1">
                  --orange-800<br />
                </div>
                <div className="sv-bg-color--orange-900 dm-color sv-color--white-1">
                  --orange-900<br />
                </div>
              </div>
              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Steel</h6>
                <div className="sv-bg-color--steel-50 dm-color  sv-color--gray-800">
                  --steel-50<br />
                </div>
                <div className="sv-bg-color--steel-100 dm-color sv-color--gray-800">
                  --steel-100<br />
                </div>
                <div className="sv-bg-color--steel-200 dm-color sv-color--gray-800">
                  --steel-200<br />
                </div>
                <div className="sv-bg-color--steel-300 dm-color sv-color--gray-800">
                  --steel-300<br />
                </div>
                <div className="sv-bg-color--steel-400 dm-color sv-color--gray-800">
                  --steel-400<br />
                </div>
                <div className="sv-bg-color--steel-500 dm-color sv-color--gray-800">
                  --steel-500<br />
                </div>
                <div className="sv-bg-color--steel-600 dm-color sv-color--white-1">
                  --steel-600<br />
                </div>
                <div className="sv-bg-color--steel-700 dm-color sv-color--white-1">
                  --steel-700<br />
                </div>
                <div className="sv-bg-color--steel-800 dm-color sv-color--white-1">
                  --steel-800<br />
                </div>
                <div className="sv-bg-color--steel-900 dm-color sv-color--white-1">
                  --steel-900<br />
                </div>
              </div>
            </div>

            <div className="sv-row">
              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Gray</h6>
                <div className="sv-bg-color--gray-50 dm-color  sv-color--gray-800">
                  --gray-50<br />
                </div>
                <div className="sv-bg-color--gray-100 dm-color sv-color--gray-800">
                  --gray-100<br />
                </div>
                <div className="sv-bg-color--gray-200 dm-color sv-color--gray-800">
                  --gray-200<br />
                </div>
                <div className="sv-bg-color--gray-300 dm-color sv-color--gray-800">
                  --gray-300<br />
                </div>
                <div className="sv-bg-color--gray-400 dm-color sv-color--gray-800">
                  --gray-400<br />
                </div>
                <div className="sv-bg-color--gray-500 dm-color sv-color--white-1">
                  --gray-500<br />
                </div>
                <div className="sv-bg-color--gray-600 dm-color sv-color--white-1">
                  --gray-600<br />
                </div>
                <div className="sv-bg-color--gray-700 dm-color sv-color--white-1">
                  --gray-700<br />
                </div>
                <div className="sv-bg-color--gray-800 dm-color sv-color--white-1">
                  --gray-800<br />
                </div>
                <div className="sv-bg-color--gray-900 dm-color sv-color--white-1">
                  --gray-900<br />
                </div>
              </div>

              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Blue Gray</h6>
                <div className="sv-bg-color--blue-gray-50 dm-color  sv-color--gray-800">
                  --blue-gray-50 <br />
                </div>
                <div className="sv-bg-color--blue-gray-100 dm-color sv-color--gray-800">
                  --blue-gray-100<br />
                </div>
                <div className="sv-bg-color--blue-gray-200 dm-color sv-color--gray-800">
                  --blue-gray-200<br />
                </div>
                <div className="sv-bg-color--blue-gray-300 dm-color sv-color--gray-800">
                  --blue-gray-300<br />
                </div>
                <div className="sv-bg-color--blue-gray-400 dm-color sv-color--white-1">
                  --blue-gray-400<br />
                </div>
                <div className="sv-bg-color--blue-gray-500 dm-color sv-color--white-1">
                  --blue-gray-500<br />
                </div>
                <div className="sv-bg-color--blue-gray-600 dm-color sv-color--white-1">
                  --blue-gray-600<br />
                </div>
                <div className="sv-bg-color--blue-gray-700 dm-color sv-color--white-1">
                  --blue-gray-700<br />
                </div>
                <div className="sv-bg-color--blue-gray-800 dm-color sv-color--white-1">
                  --blue-gray-800<br />
                </div>
                <div className="sv-bg-color--blue-gray-900 dm-color sv-color--white-1">
                  --blue-gray-900<br />
                </div>
              </div>

              <div className="sv-column sv-pa--25">
                <h6 className="sv-text-center">Outras</h6>
                <div className="sv-bg-color--blue-synchro dm-color sv-color--white-1">
                  --blue-synchro<br />
                </div>
                <div className="sv-bg-color--white-1 dm-color sv-color--gray-800">
                  --white-1<br />
                </div>
                <div className="sv-bg-color--black-1 dm-color sv-color--white-1">
                  --black-1<br />
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default Colors;
