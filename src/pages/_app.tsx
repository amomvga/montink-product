import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>E-commerce - Detalhes do Produto</title>
        <meta name="description" content="Página de detalhes do produto para e-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
