import Link from 'next/link'
import Head from 'next/head'
import { MatrixRain } from '../../components/matrix';
import { getMetaData, MetaData } from '../../lib/helper';
import styles from '../../styles/Blog.module.css'

export async function getStaticProps() { // specifying routes based on pages
  const metaData = await getMetaData();
  metaData.reverse();

  return { props: {metaData}, }
}

export default function Blog({ metaData }) {
  return (
    <>
      <Head>
        <title>sh1ggy-blog</title>
        <meta name="description" content="Tyrone Nolasco's personal programming-focussed blog"/>
      </Head>
      
      <MatrixRain />
      <main>
        <h1><code>sh1ggy-web blog</code></h1>
        <p>This blog is focussed on my personal programming journey and the things I've learnt along the way!</p>
        <article>
          <header><strong style={{fontSize: '30px'}}>Blog List</strong></header>
          <table className={styles.blogList}>
            <thead>
              <tr key="headers">
                <th><strong>Date</strong></th>
                <th><strong>Title</strong></th>
                <th><strong>Description</strong></th>
                <th><strong>Tags</strong></th>
              </tr>
            </thead>
            <tbody>
              {metaData.map((data: MetaData) => (
                <>
                  <Link passHref={true} href={`blog/${data.slug}`}>
                    <tr key={data.slug} className={styles.blogRow}>
                      <td><i>{data.date}</i></td>
                      <td>{data.title}</td>
                      <td>{data.description}</td>
                      <td>
                        {/* splitting by ","  */}
                        {data.tags.trim().split(",").map((tag: any) => ( 
                          <kbd key={data.title + data.tags} className={styles.tags}>{tag}</kbd>
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
