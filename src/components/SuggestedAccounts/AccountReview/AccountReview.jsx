import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountReview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountReview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1665154800&x-signature=PQxA83T%2FlXr4ojvY1rk9b2u8FaQ%3D"
          alt=""
        />
          <Button className={cx('follow-btn')} primary>Follow</Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <h4>tranphuson</h4>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Trần Phú Sơn</p>
        <p className={cx('analytic')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountReview;
