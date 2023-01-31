import React, { FC, FunctionComponent, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

import styles from "./Layout.module.css";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export function withLayout<T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}
