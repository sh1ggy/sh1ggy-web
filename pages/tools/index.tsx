import type { NextPage } from 'next'
import { Footer, NavBar } from '../../components/blocks'

const Tools: NextPage = () => {
  return (
    <>
      <NavBar/>
      <body>
        <main>
            <h1>Welcome to {' '} <code>sh1ggy-web tools</code></h1>
        </main>
        <Footer/>
      </body>
    </>
  )
}

export default Tools
