import { GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";

import { json } from "stream/consumers";
import { MenuItem } from "../../app/interfaces/menu.interface";
import { withLayout } from "../../app/layout/Layout";
import { ParsedUrlQuery } from "querystring";

function Course({ menu }: CourseProps) {
  return <></>;
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find/",
    {
      firstCategory,
    }
  );
  const { data: page } = await axios.get<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias" + params.alias,
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

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
