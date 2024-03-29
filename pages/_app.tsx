import { AppProps } from 'next/app';
import Head from 'next/head';

import '../app/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rating App</title>
        <meta
          name="description"
          content="Clone of Xbox Game Catalog. Implemented with Next.js and Tailwind"
        />
        <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
        <meta name="author" content="Pavel Mineev" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
