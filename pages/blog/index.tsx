import Link from 'next/link'
import Head from 'next/head'
import { MatrixRain } from '../../components/matrix';
import { getMetaData, MetaData } from '../../lib/helper';
import styles from '../../styles/Blog.module.css'

export async function getStaticProps() { // specifying routes based on pages
  const metaData = await getMetaData();

  return { props: { metaData}, }
}

export default function Blog({ metaData }) {
  return (
    <>
      <Head>
        <title>shiggy-dev</title>
        <meta name="description" content="Tyrone Nolasco's personal NextJS powered website"/>
      </Head>
      <MatrixRain />
      <main>
        <h1><code>sh1ggy-web blog</code></h1>
        <article>
          <header><strong style={{fontSize: '30px'}}>Blog List</strong></header>
          <table>
            <thead>
              <tr>
                <th><strong>Year</strong></th>
                <th><strong>Title</strong></th>
                <th><strong>Description</strong></th>
                <th><strong>Tags</strong></th>
              </tr>
            </thead>
            <tbody>
              {metaData.map((data: MetaData) => (
                <>
                  <Link passHref={true} href={`blog/${data.slug}`}>
                    <tr className={styles.tr}>
                      <td>{data.year}</td>
                      <td>{data.title}</td>
                      <td>{data.description}</td>
                      <td>
                        {/* splitting by ","  */}
                        {data.tags.trim().split(",").map((tag: any) => ( 
                          <kbd key={data.title + data.tags} className={styles.kbd}>{tag}</kbd>
                        ))}
                      </td>
                    </tr>
                  </Link>
                </>
              ))}
            </tbody>
          </table>
        </article>
      </main>
    </>
  )
}
