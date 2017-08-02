import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Routes';
import Layout from './components/ui/layout/Layout';
import SidabarStore from './stores/SidebarStore';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map(({ path, exact, component: Comp }) =>
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props =>
                <Layout {...props} sidebarStore={SidabarStore}>
                  <Comp {...props} />
                </Layout>}
            />
          )}
        </Switch>
      </Router>
    );
  }
}

App.displayName = 'App';

export default App;
