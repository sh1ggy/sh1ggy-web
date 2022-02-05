import { useRouter } from 'next/router'
import { marked } from 'marked';
import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export async function getStaticProps(context) { // run for specific route
  const postDirectory = 'posts'
  // read the specific file from the context
  const postContent = await (await readFile(`posts/${context.params.id}.md`)).toString();
  const metaContent = matter(postContent, {delimiters: ['<!--', '-->']}); // parsing the metadata from file contents
  
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
  let postParsed = marked(metaContent.content) // markedJS parsed content
  let postMetaData = metaContent.data // gray matter metadata
  return { props: { postParsed, postMetaData}, } // gets sent to client side as prop
}

export async function getStaticPaths() { // specifying routes based on pages
  // read directory for file names and assign it to paths
  const posts = await readdir('posts');
  const paths = posts.map((post) => {
    const parsedPost = path.parse(post).name; // removes the file ext
    return { params: { id: parsedPost } }
  })

  // ----golfed version
  // const posts = (await readdir('posts'))
  // .map((post) => basename(post))
  // .map((postName) => ({ id: postName }));
  
  return { paths, fallback: false }
}

export default function Post({ postParsed, postMetaData }) {
  const router = useRouter()
  const title = postMetaData.title
  return (
    <>
      <main>
        <h1>{' '} <code>{title}</code></h1>
        <div dangerouslySetInnerHTML={{ __html: postParsed }} />
      </main>
    </>
  )

}