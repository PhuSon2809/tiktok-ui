import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, menu = [] }) {
  const renderItem = () => {
    return menu.map((item, i) => <MenuItem key={i} data={item} />);
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PoperWrapper className={cx('menu-popper')}>{renderItem()}</PoperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
