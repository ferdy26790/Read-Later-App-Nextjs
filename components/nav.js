import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <div className="nav-wrapper">
      <a className="brand-logo center">Pocket News</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <Link href="/">
          <li><a>Home</a></li>
        </Link>
        <Link href="/pocket">
          <li><a>My Pocket</a></li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Nav
