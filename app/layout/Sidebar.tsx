import React, { HTMLAttributes } from "react";

interface ISidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar = (props: ISidebarProps) => {
  return <div {...props}>Sidebar</div>;
};
