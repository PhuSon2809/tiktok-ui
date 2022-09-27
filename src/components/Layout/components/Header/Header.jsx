import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles); //giúp viết đc dấu gạch ngang khi đặt tên className

function Header() {
  return <header className={cx('wrapper')}>
    <div className={cx('inner')}></div>
  </header>;
}

export default Header;
