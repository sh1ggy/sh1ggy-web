import Head from 'next/head'
import { useEffect } from 'react'
import { MatrixRain } from '../components/matrix'
import GitHubCalendar from 'github-calendar'
import styles from '../styles/Home.module.css'

export const Home = () => {
  useEffect(() => {
    GitHubCalendar(".calendar", "sh1ggy", {responsive: true, tooltips: true});
  }, [])
  
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
        <p>This website includes a blog overviewing my personal programming journey as well as 
          as a fun way to play around with website development and show off a bit of my personality.
        </p>
        <code className={styles.pdfCode}><a className={styles.pdfLink} onClick={() => window.open('/resume.pdf')}>resume.pdf</a></code>
        <div className='calendar'></div>
      </main>
    </>
  )
}

export default Home