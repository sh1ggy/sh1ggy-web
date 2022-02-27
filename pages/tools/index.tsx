import Head from 'next/head'
import { MatrixRain } from '../../components/matrix';
import type { NextPage } from 'next'


export const Tools: NextPage = () => {
  return (
    <>
      <Head>
        <title>sh1ggy-blog</title>
        <meta name="description" content="Tyrone Nolasco's personal programming-focussed blog" />
      </Head>
      <MatrixRain />
      <main>
        <hgroup>
          <h1><code>sh1ggy-web tools</code></h1>
          <h3>Tyrone Nolasco's code tools</h3>
        </hgroup>
        <p>This are a few web tools that I'm developing for fun and personal use.</p>
      </main>
    </>
  )
}

export default Tools
