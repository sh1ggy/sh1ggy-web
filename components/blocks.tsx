import Link from 'next/link'

export const NavBar = () => {
    return (
        <nav style={{ padding: '50px' }}>
            <Link passHref={true} href="/">
                <li>shiggy-dev</li>
            </Link>
            <ul>
                <li>
                    <Link passHref={true} href="../blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link passHref={true} href="../tools">
                        <a>Tools</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export const Footer = () => {
    return (
        <footer>
            <small><a href="https://github.com/sh1ggy">GitHub</a> • <a href="https://www.linkedin.com/in/tyrone-nolasco-57113617b/">LinkedIn</a> • <a href="https://github.com/sh1ggy/sh1ggy-web">Source Code</a> • {new Date().getFullYear()}</small> 
        </footer>
    )
}