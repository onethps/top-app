import React, { HTMLAttributes } from "react";

interface IFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer = (props: IFooterProps) => {
  return <div {...props}>Footer</div>;
};
