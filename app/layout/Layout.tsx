import React, { FC, FunctionComponent, ReactNode } from 'react';

import { AppContextProvider, IAppContext } from '../context/app.context';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './Layout.module.css';
import { Sidebar } from './Sidebar';

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

export function withLayout<T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
}
