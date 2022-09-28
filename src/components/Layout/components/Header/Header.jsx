import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import imgages from '~/assets/images';

const cx = classNames.bind(styles); //giúp viết đc dấu gạch ngang khi đặt tên className

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={imgages.logo} alt="" />

        <div className={cx('search')}>
          <input spellCheck={false} placeholder="Search accounts and videos" />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
