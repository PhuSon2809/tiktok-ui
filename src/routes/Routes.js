import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';
import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile/Profile';
import Search from '~/pages/Search/Search';
import Upload from '~/pages/Upload/Upload';


const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.profile,
    component: Profile,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.search,
    component: Search,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
