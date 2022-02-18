import Head from 'next/head'
import { MatrixRain } from "../components/matrix";

// pages/404.js
export default function Custom404() {
  return (
    <>
      <Head>
        <title>sh1ggy-404</title>
        <meta name="description" content="Page does not exist!" />
      </Head>
      <MatrixRain />
      <main>
        <hgroup>
          <h1><code>404</code></h1>
          <h2>Page Not Found. Whoops.</h2>
        </hgroup>
      </main>
    </>
  )
}