import type { NextPage } from 'next'
import Link from 'next/link'
import { Footer, NavBar } from '../../components/blocks';
import { MatrixRain } from '../../components/matrix';
import { getFileNames, getMetaData } from '../../lib/helper';

export async function getStaticProps() { // specifying routes based on pages
  const paths = await getFileNames();
  const metaData = await getMetaData();
  

  return { props: { paths, metaData}, }
}

export default function Blog({ paths, metaData }) {
  // let title = metaData.title
  
  return (
    <>
      <MatrixRain />
      <main>
        <h1>Welcome to {' '} <code>sh1ggy-web blog</code></h1>
        <h2>Blog List</h2>
        {metaData.map((data) => (
          <Link href={`blog/${data.path}`}>
            <li>
              <strong>{data.title}: </strong>
              <p>{data.description}</p>
            </li>
          </Link>
        ))}
      </main>
    </>
  )
}
