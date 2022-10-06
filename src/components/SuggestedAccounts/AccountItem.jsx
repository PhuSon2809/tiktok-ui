import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import styles from './SuggestedAccounts.module.scss';
import AccountReview from './AccountReview';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ account }) {
  const renderReiew = (props) => (
    <div className={cx('menu-list')} tabIndex="-1" {...props}>
      <PoperWrapper className={cx('menu-popper')}>
        <AccountReview account={account}/>
      </PoperWrapper>
    </div>
  );

  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderReiew}
      >
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src={account.avatar}
            alt={account.nickname}
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{account.nickname}</strong>
              {account.tick && (
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
              )}
            </p>
            <p className={cx('name')}>{`${account.first_name} ${account.last_name}`}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountItem;
