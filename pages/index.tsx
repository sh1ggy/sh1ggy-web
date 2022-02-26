import Head from 'next/head'
import { MatrixRain } from '../components/matrix'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <>
      <Head>
        <title>sh1ggy-dev</title>
        <meta name="description" content="Tyrone Nolasco's personal NextJS powered website" />
      </Head>
      <MatrixRain/>
      <main>
        <hgroup>
          <h1>Welcome to {' '} <code>sh1ggy-web</code></h1>
          <h3>Tyrone Nolasco's code portfolio</h3>
        </hgroup>
        <p>This is a general overview on the key parts of my personal programming journey as well
          as a fun way to play around with website development and show off a bit of my personality.
        </p>
        <p>This website will include a blog detailing my programming experiences as well as a toolbox
          for miscellaneous functionality.
        </p>

        <code className={styles.pdfCode}><a className={styles.pdfLink} onClick={() => window.open('/resume.pdf')}>resume.pdf</a></code>
      </main>
    </>
  )
}