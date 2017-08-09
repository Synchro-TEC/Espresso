import Home from './pages/Home';
import Guide from './pages/Guide';
import Components from './pages/Components';
import Espacamento from './pages/guides/espacamento';
import Alinhamento from './pages/guides/alinhamento';
import Contraste from './pages/guides/contraste';
import Direto from './pages/guides/direto';
import Synchro from './pages/guides/synchro';

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
    path: '/components',
    exact: true,
    component: Components,
  },
];

export default routes;
