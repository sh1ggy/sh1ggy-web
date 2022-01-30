import { useRouter } from 'next/router'
import Link from 'next/link'
import { marked } from 'marked';


const MDParse = () => {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
    })
    const getMD = () => {
        let string = '# Welcome to my React Markdown Previewer!'
        let post = marked(string, {sanitize: true})
        return {__html: post}
    }
    
    
    return (
        <div dangerouslySetInnerHTML={getMD()}></div>
    )
}

export default function Post() {
    const router = useRouter() 
    const { id } = router.query

    return (
        <>
          <nav style={{ padding: '50px' }}>
            <Link href="/">
              <li>shiggy-dev</li>
            </Link>
            <ul>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/tools">
                  <a>Tools</a>
                </Link>
              </li>
            </ul>
          </nav>
          <body>
            <main>
                <h1>{' '} <code>{id} post</code></h1>
                
                <MDParse/>
            </main>
            <footer>
              <small><a href="https://github.com/sh1ggy">sh1ggy</a> • <a href="https://github.com/sh1ggy/sh1ggy-web">Source Code</a></small>
            </footer>
          </body>
        </>
      )
    
}