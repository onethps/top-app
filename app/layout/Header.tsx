import React, { HTMLAttributes } from 'react';

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = (props: IHeaderProps) => {
  return <div {...props}>Header</div>;
};
