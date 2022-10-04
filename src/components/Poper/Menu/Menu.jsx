import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, menu = [], onChange = defaultFn }) {
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

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PoperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <HeaderMenu
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}

            {renderItem()}
          </PoperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
