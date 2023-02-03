import { firstLevelMenu } from 'app/helpers/helpers';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { HomeProps } from 'pages';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import { withLayout } from '@/layout/Layout';

import { MenuItem } from '@/interfaces/menu.interface';

export const Type = ({ firstCategory, menu }: TypeProps) => {
  return <div>Type {firstCategory}</div>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
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

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategoryItem.id,
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

export interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
