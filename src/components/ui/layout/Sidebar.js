import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sidebarStore } = this.props;
    return <aside className="layout-sidebar sv-column" />;
  }
}

export default SideBar;
