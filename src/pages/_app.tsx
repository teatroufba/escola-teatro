/* eslint-disable react/no-unstable-nested-components */
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Script from 'next/script'

import { GlobalStyles } from '@/styles/global'

import { linkResolver, repositoryName } from '../../prismic'
import Header from '@/components/basics/header'
import Footer from '@/components/basics/footer'
import Head from 'next/head'
import BackToTop from '@/components/basics/back-to-top/index'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BarraGoverno from '@/components/basics/BarraGoverno'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const url = router.pathname
    const [options, setOptions] = useState('/')

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
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
                </PrismicPreview>
            </PrismicProvider>
            <Script
                src="//barra.brasil.gov.br/barra.js"
                type="text/javascript"
                strategy="lazyOnload"
            />
        </>
    )
}

export default MyApp
