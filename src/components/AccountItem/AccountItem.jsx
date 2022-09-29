import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://firebasestorage.googleapis.com/v0/b/hostelmanagement-ae202.appspot.com/o/Avatar%2F000063.JPG?alt=media&token=64abf731-ae79-41c7-a513-821ce3b4f173"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Tran Phu Son</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>tranphuson</span>
      </div>
    </div>
  );
}

export default AccountItem;
