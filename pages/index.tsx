import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MatrixRain } from '../components/matrix'
import { Footer, NavBar } from '../components/blocks'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>sh1ggy</title>
        <meta name="description" content="NextJS powered website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MatrixRain />
      <main>
        <hgroup>
          <h1>Welcome to {' '} <code>sh1ggy-web</code></h1>
          <h3>Tyrone Nolasco's code portfolio</h3>
        </hgroup>
        <p>This is a general overview on the key parts of my personal programming journey as well
          as a fun way to play around with website development and show off a bit of my personality.
        </p>
      </main>
    </>
  )
}

export default Home
