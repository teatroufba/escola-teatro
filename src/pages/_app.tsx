/* eslint-disable react/no-unstable-nested-components */
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import { GlobalStyles } from '@/styles/global'

import { linkResolver, repositoryName } from '../../prismic'
import Header from '@/components/basics/header'
import Footer from '@/components/basics/footer'
import Head from 'next/head'
import BackToTop from '@/components/basics/back-to-top/index'
import BarraGoverno from '@/components/basics/BarraGoverno'
import VLibras from '@/components/basics/VLibras'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    content="http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/10320"
                    property="creator.productor"
                />
                <title>Escola de Teatro | UFBA</title>
                <link rel="icon" type="image/ico" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <PrismicProvider
                linkResolver={linkResolver}
                internalLinkComponent={({ href, children, ...props }) => (
                    <Link href={href} passHref>
                        <a {...props}> {children} </a>
                    </Link>
                )}
            >
                <PrismicPreview repositoryName={repositoryName}>
                    <BarraGoverno />
                    <Header />
                    <GlobalStyles />
                    <Component {...pageProps} />
                    <Footer />
                    <BackToTop />
                    <VLibras />
                    <Script
                        strategy="beforeInteractive"
                        src="https://vlibras.gov.br/app/vlibras-plugin.js"
                    />
                    <Script defer>
                        new window.VLibras.Widget('https://vlibras.gov.br/app');
                    </Script>
                </PrismicPreview>
            </PrismicProvider>
        </>
    )
}

export default MyApp
