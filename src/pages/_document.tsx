import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta
            name="description"
            content="Compre e anuncie imóveis, loteamentos, empreendimentos, terrenos, áreas e muito mais em toda a Bahia"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://kobraza.com.br/" />
          <meta
            property="og:title"
            content="Kobraza Imóveis - Compre ou anuncie seu imóvel"
          />
          <meta
            property="og:description"
            content="Compre e anuncie imóveis, loteamentos, empreendimentos, terrenos, áreas e muito mais em toda a Bahia"
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://kobraza.com.br" />
          <meta
            property="twitter:title"
            content="Kobraza Imóveis - Compre ou anuncie seu imóvel"
          />
          <meta
            property="twitter:description"
            content="Compre e anuncie imóveis, loteamentos, empreendimentos, terrenos, áreas e muito mais em toda a Bahia"
          />
          <meta property="twitter:image" content="" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css"
            integrity="sha512-wpPYUAdjBVSE4KJnH1VR1HeZfpl1ub8YT/NKx4PuQ5NmX2tKuGu6U/JRp5y+Y8XG2tV+wKQpNHVUX03MfMFn9Q=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
