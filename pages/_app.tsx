import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Footer, NavBar } from '../components/blocks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>sh1ggy</title>
        <meta name="description" content="Tyrone Nolasco's personal NextJS powered website"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.classless.min.css"/>
      </Head>
      <NavBar/>
      <body>
        <Component {...pageProps} />
        <Footer/>
      </body>
    </>
  )
}

export default MyApp
