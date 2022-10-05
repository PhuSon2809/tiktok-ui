import config from '~/config';
import { HeaderOnly } from '~/layouts';
import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Live from '~/pages/Live/Live';
import Profile from '~/pages/Profile/Profile';
import Search from '~/pages/Search/Search';
import Upload from '~/pages/Upload/Upload';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.live,
    component: Live,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
