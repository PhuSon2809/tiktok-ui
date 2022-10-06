import React, { useEffect, useState } from 'react';
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
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function Sidebar() {
  const INIT_PAGE = 1;
  const PER_PAGE = 5;

  const [suggestUser, setSuggestUser] = useState([]);
  const [page, setPage] = useState(INIT_PAGE);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await userService.getUserSuggest(page, PER_PAGE);
      const newResult = [...suggestUser, ...result];
      setSuggestUser(newResult);
    };
    fetchApi();
  }, [page]);

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

      <SuggestedAccounts
        label="Suggested accounts"
        data={suggestUser}
      />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
