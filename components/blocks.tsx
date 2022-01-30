import Link from 'next/link'

export const NavBar = () => {
    return (
        <nav style={{ padding: '50px' }}>
            <Link href="/">
                <li>shiggy-dev</li>
            </Link>
            <ul>
                <li>
                    <Link href="../blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="../tools">
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
            <small><a href="https://github.com/sh1ggy">sh1ggy</a> • <a href="https://github.com/sh1ggy/sh1ggy-web">Source Code</a> • {new Date().getFullYear()}</small>
        </footer>
    )
}