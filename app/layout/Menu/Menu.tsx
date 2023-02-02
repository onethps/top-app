import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "../../interfaces/menu.interface";
import BooksIcon from "../../assets/icons/menu/books.svg";
import CloudIcon from "../../assets/icons/menu/cloud.svg";
import GraduationIcon from "../../assets/icons/menu/graduation.svg";
import PackageIcon from "../../assets/icons/menu/package.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <GraduationIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <CloudIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <PackageIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const renderFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => {
          return (
            <div key={menu.route}>
              <a href={`/${menu.route}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: menu.id === firstCategory,
                  })}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
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
        <a
          key={p._id}
          href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: true,
          })}
        >
          {p.category}
        </a>
      );
    });
  };

  return <div className={styles.menu}>{renderFirstLevel()}</div>;
};
