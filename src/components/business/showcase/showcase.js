import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import html from 'react-syntax-highlighter/dist/languages/xml';
import javascript from 'react-syntax-highlighter/dist/languages/javascript';
import atom from 'react-syntax-highlighter/dist/styles/atom-one-light';
import atomDark from 'react-syntax-highlighter/dist/styles/atom-one-dark';
import { v4 } from 'node-uuid';
import './showcase.css';
import isString from 'lodash/isString';

registerLanguage('html', html);
registerLanguage('jsx', javascript);

class ShowCase extends Component {
  constructor(props) {
    super(props);

    this._prepareToRender = this._prepareToRender.bind(this);
  }

  _prepareToRender() {
    const theme = this.props.language === 'jsx' ? atomDark : atom;
    let tabs = [];
    let panels = [];
    let styles = { height: this.props.height };

    if (this.props.bgColorContent) {
      styles.backgroundColor = this.props.bgColorContent;
    }

    if (this.props.hasOwnProperty('example')) {
      tabs.push(<Tab key={v4()}>Exemplo</Tab>);
      panels.push(
        <TabPanel key={v4()}>
          <div className="bg-content" style={styles}>
            {this.props.example()}
          </div>
        </TabPanel>
      );
    }

    if (this.props.hasOwnProperty('code')) {
      tabs.push(<Tab key={v4()}>Código</Tab>);
      panels.push(
        <TabPanel key={v4()}>
          <div className="bg-code" style={{ height: this.props.height }}>
            <SyntaxHighlighter language={this.props.language} style={theme}>
              {isString(this.props.code) ? this.props.code : this.props.code()}
            </SyntaxHighlighter>
          </div>
        </TabPanel>
      );
    }

    if (this.props.hasOwnProperty('apollo')) {
      tabs.push(<Tab key={v4()}>Apollo-11</Tab>);
      panels.push(
        <TabPanel key={v4()}>
          <div className="bg-code" style={{ height: this.props.height }}>
            <SyntaxHighlighter language="html" style={atom}>
              {isString(this.props.apollo) ? this.props.apollo : this.props.apollo()}
            </SyntaxHighlighter>
          </div>
        </TabPanel>
      );
    }

    return { tabs, panels };
  }

  render() {
    const { tabs, panels } = this._prepareToRender();

    return (
      <div className="show-case">
        <Tabs onSelect={() => this.setState({ copied: false })}>
          <TabList>
            {tabs}
          </TabList>
          {panels}
        </Tabs>
      </div>
    );
  }
}

ShowCase.displayName = 'ShowCase';

ShowCase.defaultProps = {
  language: 'html',
};

ShowCase.PropTypes = {
  bgColorContent: PropTypes.string,
  code: PropTypes.any,
  example: PropTypes.element,
  apollo: PropTypes.any,
  height: PropTypes.string,
  language: PropTypes.string,
  theme: PropTypes.string,
};

export default ShowCase;
