import { firstLevelMenu } from 'app/helpers/helpers';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { json } from 'stream/consumers';

import { withLayout } from '@/layout/Layout';

function Search() {
  return (
    <>
      <div>Search PAGE</div>
    </>
  );
}

export default withLayout(Search);
