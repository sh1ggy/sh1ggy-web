import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.classless.min.css"/>
      </Head>
    </>
  )
}

export default MyApp
