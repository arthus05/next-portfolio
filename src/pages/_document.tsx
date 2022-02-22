import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Portifolio of the web developer Arthus Vinicius, created by Arthus Vinicius"
          />
          <meta name="Title" content="Arthus Vinicius - Portfolio" />
          <meta property="og:title" content="Arthus Vinicius - Portfolio" />
          <meta
            property="og:description"
            content="Portifolio of the web developer Arthus Vinicius, created by Arthus Vinicius"
          />
          <meta property="og:url" content="https://arthusvinicius.com/"></meta>
          <meta property="og:type" content="website" />
          <link rel="icon" href="../../public/assets/profile.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
