import { readFile, readdir } from 'fs/promises'
import matter from 'gray-matter';

export interface MetaData {
  title: string,
  description: string,
  tags: string, 
  date: string, 
  slug: string,
}

export async function getMetaData(): Promise<MetaData[]> {
    const posts = await readdir('posts');
    const paths = []
    // Looping through all files and nabbing the contained metadata
    for (let i = 0; i < posts.length; i++) {
      const postContent =  await (await readFile(`posts/${posts[i]}`)).toString()
      const metaContent = matter(postContent, {delimiters: ['<!--', '-->']})
      paths[i] = metaContent.data
    }
    return paths
}