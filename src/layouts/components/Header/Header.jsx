import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Poper/Menu/Menu';
import {
  CoinIcon,
  FeedbackIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  PlusIcon,
  SettingIcon,
  UserIcon,
} from '~/components/Icons/Icon';
import Search from '../Search/Search';
import Image from '~/components/Image/Image';
import config from '~/config';

const cx = classNames.bind(styles); //giúp viết đc dấu gạch ngang khi đặt tên className

const MENU_ITEM = [
  {
    icon: <LanguageIcon />,
    title: 'English',
    childrenMenu: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Vietnamese',
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //Handle language changes
        break;
      default:
    }
  };

  const currentUser = true;

  const userMenu = [
    {
      icon: <UserIcon />,
      title: 'View profile',
      to: '/@phuson',
    },
    {
      icon: <CoinIcon />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <SettingIcon />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEM,
    {
      icon: <LogoutIcon />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="" />
        </Link>

        {/* Search */}
        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <Button
              className={cx('upload-btn')}
              outlineDark
              leftIcon={<PlusIcon />}
            >
              Upload
            </Button>
          ) : (
            <Button text>Upload</Button>
          )}

          {currentUser ? (
            <>
              <Tippy content="Message">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Log in</Button>
          )}

          <Menu
            menu={currentUser ? userMenu : MENU_ITEM}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Avatar%2F000041.JPG?alt=media&token=4c9b1e96-b765-4265-9930-a4540a1b8230"
                alt="avatar"
                fallback="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/298506051_1379732542522081_942525819291463308_n.jpg?stp=c91.0.240.240a_dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6eEV_n8-3QwAX9pqxLQ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9qKr8o6RgzUWZ-mCitgNYz3CHvRSIIep8w7E6Qeth__Q&oe=6340B4BA"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
