import { readFile, readdir } from 'fs/promises'
import path from 'path'
import Head from 'next/head'
import { marked } from 'marked';
import matter from 'gray-matter'
import styles from '../../styles/Blog.module.css'
import Link from 'next/link'

export async function getStaticProps(context) { // run for specific route
  const postDirectory = 'posts'
  // read the specific file from the context
  const postContent = await (await readFile(`${postDirectory}/${context.params.id}.md`)).toString();
  const metaContent = matter(postContent, { delimiters: ['<!--', '-->'] }); // parsing the metadata from file contents

  // parsing
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false
  })

  // custom renderer for image figures with captions
  const renderer = {
    image(href, title, text) {
      // handling without captions
      if (text == '') return `<img class="mkdown-image" src="${href}" title="${text}">` // using mkdown-image from override
      // images with captions
      return `
            <figure>
              <img class="mkdown-image" src="${href}" title="${title}">
              <figcaption>${text}</figcaption>
            </figure>`;
    }
  };
  marked.use({ renderer })

  // parsing markdown content and metadata to props
  let postParsed = marked(metaContent.content) // markedJS parsed content
  let postMetaData = metaContent.data // gray matter metadata
  const posts = await readdir('posts');
  const slugs = posts.map((post) => {
    return path.parse(post).name; // removes the file ext from file 
  })
  return { props: { postParsed, postMetaData, slugs }, } // gets sent to client side as prop
}

export async function getStaticPaths() { // specifying routes based on pages
  // read directory for file names and assign it to paths
  const posts = await readdir('posts');
  const paths = posts.map((post) => {
    const parsedPost = path.parse(post).name; // removes the file ext from file
    return { params: { id: parsedPost } }
  })

  // ----golfed version
  // const posts = (await readdir('posts'))
  // .map((post) => basename(post))
  // .map((postName) => ({ id: postName }));

  return { paths, fallback: false }
}

export default function Post({ postParsed, postMetaData, slugs }) {
  const title = postMetaData.title

  const currIndex = slugs.findIndex(slug => slug == postMetaData.slug)


  return (
    <>
      <Head>
        <title>sh1ggy-dev blog</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href='/overides.css' />
      </Head>

      <main>
        <div className={styles.postBackground} style={{ backgroundImage: `url(/blog/${postMetaData.slug}/background.jpeg)` }}>
        </div>
        <div>
          <h1>{' '} <code>{title}</code></h1>
          <div dangerouslySetInnerHTML={{ __html: postParsed }} />

        </div>
      <div className={styles.footerNavContainer}>
        {!(slugs[currIndex - 1] == undefined) &&
          <Link passHref={true} href={`${slugs[currIndex - 1]}`}>
            <a className={styles.footerNav}>Previous Post</a>
          </Link>
        }
        {!(slugs[currIndex + 1] == undefined) &&
          <Link passHref={true} href={`${slugs[currIndex + 1]}`}>
            <a className={styles.footerNav}>Next Post</a>
          </Link>
        }
      </div>
      </main>
    </>
  )

}