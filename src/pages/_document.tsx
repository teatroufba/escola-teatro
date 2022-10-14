import BarraGoverno from "@/components/basics/BarraGoverno";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <BarraGoverno/>
        <Head>
          <meta charSet="utf-8" />
          <meta
            content="http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/10320"
            property="creator.productor"
          />
          

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="True"/>
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet"/> 

          <link rel="icon" type="image/x-icon" href="/brasao.png"/>
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
