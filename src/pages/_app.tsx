/* eslint-disable react/no-unstable-nested-components */
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";
import Link from "next/link";
import Script from "next/script";
import brasaoIco from '../../public/brasaoTitle.ico'

import { GlobalStyles } from "@/styles/global";

import { linkResolver, repositoryName } from "../../prismic";
import Header from "@/components/basics/header";
import Footer from "@/components/basics/footer";
import Head from "next/head";
import BackToTop from "@/components/basics/back-to-top/index";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<PrismicProvider
				linkResolver={linkResolver}
				internalLinkComponent={({ href, children, ...props }) => (
					<Link href={href}>
						<Link href={href} />
						<a {...props}> {children} </a>
					</Link>
				)}
			>
				{/* <Head>
					<title>Escola de Teatro</title>
				</Head> */}
				<Script
					defer
					src="//barra.brasil.gov.br/barra.js"
					type="text/javascript"
				/>
				<PrismicPreview repositoryName={repositoryName}>
					<Header />
					<GlobalStyles />
					<Component {...pageProps} />
					<Footer />
					<BackToTop />
				</PrismicPreview>
			</PrismicProvider>
		</>
	);
}

export default MyApp;
