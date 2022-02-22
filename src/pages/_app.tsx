import "../styles/globals.css";
import "../styles/classes.scss";
import "../styles/ids.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arthus Vinicius - Porfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
