/* eslint-disable react/no-unstable-nested-components */
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import { GlobalStyles } from '@/styles/global'

import { linkResolver, repositoryName } from '../../prismic'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <Link href={href} />
          <a {...props}> {children} </a>
        </Link>
      )}
    >
      <GlobalStyles />
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
