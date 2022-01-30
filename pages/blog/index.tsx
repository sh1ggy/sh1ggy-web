import type { NextPage } from 'next'
import { Footer, NavBar } from '../../components/blocks';

const Blog: NextPage = () => {
  return (
    <>
      <NavBar/>
      <body>
        <main>
            <h1>Welcome to {' '} <code>sh1ggy-web blog</code></h1>
            <h2>Blog List</h2>
        </main>
        <Footer/>
      </body>
    </>
  )
}




export default Blog
