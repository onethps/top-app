import axios from 'axios';
import { GetStaticProps } from 'next';
import { json } from 'stream/consumers';

import { Rating } from '@/components/Rating/Rating';

import { withLayout } from '@/layout/Layout';

import { MenuItem } from '@/interfaces/menu.interface';

function Home({ menu, firstCategory }: HomeProps) {
  return (
    <>
      <div>Hellow words</div>
      <Rating />
      {/* {JSON.stringify(menu)} */}
      {JSON.stringify(firstCategory)}
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
