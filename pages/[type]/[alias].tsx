import { firstLevelMenu } from 'app/helpers/helpers';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { TopPageComponent } from 'page-components';
import { ParsedUrlQuery } from 'querystring';
import { json } from 'stream/consumers';

import { MenuItem } from '../../app/interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../app/interfaces/page.interface';
import { ProductModel } from '../../app/interfaces/product.interface';
import { withLayout } from '../../app/layout/Layout';

function TopPage({ firstCategory, menu, page, products }: TopPageProps) {
  return <TopPageComponent firstCategory={firstCategory} page={page} products={products} />;
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find/',
      {
        firstCategory: m.id,
      },
    );
    paths = paths.concat(menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((menu) => menu.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find/',
      {
        firstCategory: firstCategoryItem.id,
      },
    );

    if (menu.length == 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
    );

    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
      {
        category: page.category,
        limit: 10,
      },
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
