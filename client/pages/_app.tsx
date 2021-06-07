import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default app;
