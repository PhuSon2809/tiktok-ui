import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  children,
  menu = [],
  onChange = defaultFn,
  hideOnClick = false,
}) {
  const [history, setHistory] = useState([{ data: menu }]);
  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, i) => {
      const isParent = !!item.childrenMenu; //!! laf convert sang boolean to boolean
      return (
        <MenuItem
          key={i}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.childrenMenu]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PoperWrapper className={cx('menu-popper')}>
        {history.length > 1 && (
          <HeaderMenu title={current.title} onBack={handleBackMenu} />
        )}

        <div className={cx('menu-body')}>{renderItem()}</div>
      </PoperWrapper>
    </div>
  );

  //Reset to first page (menu cấp cha)
  const handleResetMenuToFirstPage = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[100, 100]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handleResetMenuToFirstPage}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};

export default Menu;
