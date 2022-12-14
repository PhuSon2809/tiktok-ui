import React, { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hook';
import { search } from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounceValue = useDebounce(searchValue, 500);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await search(debounceValue);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debounceValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  // const handleSubmit = ()=>{

  // }

  return (
    // Using a wrapper <div> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        appendTo={() => document.body}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PoperWrapper>
              <h4 className={cx('search-title')}>Account</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PoperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            spellCheck={false}
            placeholder="Search accounts and videos"
            onChange={handleChange}
            onFocus={(e) => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          )}

          <button
            className={cx('search-btn')}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
