import BarraGoverno from '@/components/basics/BarraGoverno'
import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <BarraGoverno />
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        content="http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/10320"
                        property="creator.productor"
                    />
                    <html lang="pt_BR"></html>

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="True"
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
        )
    }
}
