import { readFile, readdir } from 'fs/promises'
import matter from 'gray-matter';
import path from 'path'

export async function getFileNames() {
  const posts = await readdir('posts');
  const paths = posts.map((post) => {
    const parsedPost = path.parse(post).name; // removes the file ext
    return parsedPost
  })
  return paths
}

export async function getMetaData() {
    const posts = await readdir('posts');
    const paths = []
    for (let i = 0; i < posts.length; i++) {
      const postContent =  await (await readFile(`posts/${posts[i]}`)).toString()
      const metaContent = matter(postContent, {delimiters: ['<!--', '-->']})
      // console.log(metaContent.data)
      paths[i] = metaContent.data
    }
    // const paths = posts.map( async (post) => {
    //   const postContent = await (await readFile(`posts/${post}`).toString())
    //   console.log(postContent)
    //   // console.log(postContent)
    //   const metaContent = matter(postContent, {delimiters: ['<!--', '-->']})
    //   // console.log(metaContent)
      
    //   return metaContent
    // })
    
    
    return paths
}