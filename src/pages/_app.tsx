import type { AppProps } from 'next/app'
import Script from 'next/script'

import { GlobalStyles } from '@/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        defer
        src="//barra.brasil.gov.br/barra_2.0.js"
        type="text/javascript"
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
