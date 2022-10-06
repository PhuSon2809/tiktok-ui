import React from 'react';
import classNames from 'classnames/bind';

import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import {
  HomeIcon,
  HomeActiveIcon,
  LiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For You"
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
          to={config.routes.home}
        />
        <MenuItem
          title="Following"
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
          to={config.routes.following}
        />
        <MenuItem
          title="LIVE"
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
          to={config.routes.live}
        />
      </Menu>

      <SuggestedAccounts label='Suggested accounts'/>
      {/* <SuggestedAccounts label='Following accounts'/> */}
    </aside>
  );
}

export default Sidebar;
