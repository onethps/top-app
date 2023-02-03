import BooksIcon from '@/assets/icons/menu/books.svg';
import CloudIcon from '@/assets/icons/menu/cloud.svg';
import GraduationIcon from '@/assets/icons/menu/graduation.svg';
import PackageIcon from '@/assets/icons/menu/package.svg';

import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
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
