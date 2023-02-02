// import BooksIcon from '../../  /books.svg';
import { AppContext } from 'app/context/app.context';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import BooksIcon from '@/assets/icons/menu/books.svg';
import CloudIcon from '@/assets/icons/menu/cloud.svg';
import GraduationIcon from '@/assets/icons/menu/graduation.svg';
import PackageIcon from '@/assets/icons/menu/package.svg';

import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <GraduationIcon />,
    id: TopLevelCategory.Courses,
  },

  {
    route: 'services',
    name: 'Сервисы',
    icon: <CloudIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <PackageIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

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
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
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
              [styles.thirdLevelActive]: true,
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
