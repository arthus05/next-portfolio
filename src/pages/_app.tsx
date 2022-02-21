import "../styles/globals.css";
import "../styles/classes.scss";
import "../styles/ids.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
