import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            content="http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/10320"
            property="creator.productor"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src="http://barra.brasil.gov.br/barra.js"
            type="text/javascript"
          />
        </body>
      </Html>
    );
  }
}
