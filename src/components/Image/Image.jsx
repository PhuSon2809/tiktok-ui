import React, { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Image = forwardRef(
  (
    {
      fallback: customFallback = images.noImage,
      //Nếu ko truyền fallback thì sẽ dùng noImage
      className,
      src,
      alt,
      ...props
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={cx('wrapper', className)}
        ref={ref}
        {...props}
        src={fallback || src}
        alt={alt}
        onError={handleError}
      />
    );
  },
);

export default Image;
