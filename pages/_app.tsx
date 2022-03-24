import '../styles/globals.css'
import Head from 'next/head'
import { Html } from 'next/document'
import type { AppProps } from 'next/app'
import { Footer, NavBar } from '../components/blocks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Html data-theme="dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.classless.min.css"/>
        <link rel="stylesheet" href='/overides.css' />
      </Head>
      <NavBar />
      <body>
        <Component {...pageProps} />
      </body>
      <Footer/>
    </>
  )
}

export default MyApp
