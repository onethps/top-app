import cn from 'classnames';
import React, { HTMLAttributes } from 'react';

import styles from './Footer.module.css';

interface IFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer = ({ className, ...restProps }: IFooterProps) => {
  return (
    <footer className={cn(styles.wrapper, className)} {...restProps}>
      <span>Top App © 2022 - {new Date().getFullYear()} Все права защищены</span>

      <span>Пользовательское соглашение</span>
      <span>Политика конфиденциальности</span>
    </footer>
  );
};
