import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.less';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Everwave NFT Marketplace</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </>
  );
}
