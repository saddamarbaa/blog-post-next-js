/** @format */

import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Saddam' Blog</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='author' content='Saddam Arbaa' />
				<meta
					name='description'
					content='I post about programming and web development.'
				/>
			</Head>

			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
