import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountReview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountReview({ account }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image
          className={cx('avatar')}
          src={account.avatar}
          alt={account.nickname}
        />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>{account.nickname}</strong>
          {account.tick && (
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          )}
        </p>
        <p
          className={cx('name')}
        >{`${account.first_name} ${account.last_name}`}</p>
        <p className={cx('analytic')}>
          <strong className={cx('value')}>{account.followers_count} </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>{account.likes_count} </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

AccountReview.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountReview;
