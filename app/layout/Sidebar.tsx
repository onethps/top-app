import React, { HTMLAttributes } from "react";
import { Menu } from "./Menu/Menu";

interface ISidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar = (props: ISidebarProps) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
