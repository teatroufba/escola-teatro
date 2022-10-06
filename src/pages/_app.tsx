/* eslint-disable react/no-unstable-nested-components */
import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";
import Link from "next/link";
import Script from "next/script";

import { GlobalStyles } from "@/styles/global";

import { linkResolver, repositoryName } from "../../prismic";
import Header from "@/components/basics/header";
import Footer from "@/components/basics/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>	
			<Head>
				<title> {` Noticias - Escola de Teatro da UFBA`} </title>
			</Head>
			<PrismicProvider
				linkResolver={linkResolver}
				internalLinkComponent={({ href, children, ...props }) => (
					<Link href={href}>
						<Link href={href} />
						<a {...props}> {children} </a>
					</Link>
				)}
			>
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
				</PrismicPreview>
			</PrismicProvider>
		</>
	);
}

export default MyApp;
