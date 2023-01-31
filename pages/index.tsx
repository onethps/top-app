import { GetStaticProps } from "next";
import { Rating } from "../app/components";
import { withLayout } from "../app/layout/Layout";
import axios from "axios";
import { MenuItem } from "../app/interfaces/menu.interface";
import { json } from "stream/consumers";

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

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
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
