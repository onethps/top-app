// import BooksIcon from '../../  /books.svg';
import { AppContext } from 'app/context/app.context';
import { firstLevelMenu } from 'app/helpers/helpers';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

import styles from './Menu.module.css';

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const onOpenSecondLevel = (secondCategory: string) => {
    const findCategory = menu.map((m) => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    });
    setMenu && setMenu(findCategory);
  };

  const renderFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => {
          return (
            <div key={menu.route}>
              <Link href={`/${menu.route}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menu.id === firstCategory,
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </Link>
              {menu.id == firstCategory && renderSecondLevel(menu)}
            </div>
          );
        })}
      </>
    );
  };

  const renderSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div className={styles.secondLevel} key={m._id.secondCategory}>
              <span onClick={() => onOpenSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</span>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpen]: m.isOpened,
                })}
              >
                {renderThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const renderThirdLevel = (page: PageItem[], route: string) => {
    return page.map((p) => {
      return (
        <Link key={p._id} href={`/${route}/${p.alias}`}>
          <div
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
            })}
          >
            {p.category}
          </div>
        </Link>
      );
    });
  };

  return <div className={styles.menu}>{renderFirstLevel()}</div>;
};
