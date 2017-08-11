import Home from './pages/Home';
import Guide from './pages/Guide';
import Components from './pages/Components';
import Espacamento from './pages/guides/espacamento';
import Alinhamento from './pages/guides/alinhamento';
import Contraste from './pages/guides/contraste';
import Direto from './pages/guides/direto';
import Synchro from './pages/guides/synchro';
import Buttons from './pages/guides/buttons';
import Iniciando from './pages/components/iniciando';
import Grid from './pages/components/grid';
import Colors from './pages/components/colors';
import Spaces from './pages/components/spaces';
import Breadcrumbs from './pages/components/breadcrumbs';
import Loaders from './pages/components/loaders';
import Messagebox from './pages/components/messageBox';
import Tags from './pages/components/tags';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/guide',
    exact: true,
    component: Guide,
  },
  {
    path: '/guide/espacamentos',
    exact: true,
    component: Espacamento,
  },
  {
    path: '/guide/alinhamentos',
    exact: true,
    component: Alinhamento,
  },
  {
    path: '/guide/contraste',
    exact: true,
    component: Contraste,
  },
  {
    path: '/guide/sejadireto',
    exact: true,
    component: Direto,
  },
  {
    path: '/guide/synchro',
    exact: true,
    component: Synchro,
  },
  {
    path: '/guide/buttons',
    exact: true,
    component: Buttons,
  },
  {
    path: '/components',
    exact: true,
    component: Components,
  },
  {
    path: '/components/iniciando',
    exact: true,
    component: Iniciando,
  },
  {
    path: '/components/grid',
    exact: true,
    component: Grid,
  },
  {
    path: '/components/cores',
    exact: true,
    component: Colors,
  },
  {
    path: '/components/espacamentos',
    exact: true,
    component: Spaces,
  },
  {
    path: '/components/breadcrumbs',
    exact: true,
    component: Breadcrumbs,
  },
  {
    path: '/components/loaders',
    exact: true,
    component: Loaders,
  },
  {
    path: '/components/messagebox',
    exact: true,
    component: Messagebox,
  },
  {
    path: '/components/tags',
    exact: true,
    component: Tags,
  },
];

export default routes;
