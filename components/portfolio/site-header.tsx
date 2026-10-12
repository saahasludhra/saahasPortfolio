"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [["About", "/about"], ["Projects", "/projects"], ["Achievements & Recognition", "/achievements"], ["Journey", "/journey"], ["Contact", "/contact"]]

export function SiteHeader({ inner = false }: { inner?: boolean }) {
  const pathname = usePathname()
  return (
    <header className={`site-header shell ${inner ? "inner" : ""}`}>
      <Link className="monogram px-2" href="/" aria-label="Saahas Ludhra home">SL<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => {
          const active = pathname === href || pathname.startsWith(`${href}/`)
          return <Link key={href} href={href} aria-current={active ? "page" : undefined}>{label}</Link>
        })}
      </nav>
      <Link className="nav-resume" href="/resume">Resume <span aria-hidden="true">↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span/><span/></summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/resume">Resume</Link>
        </nav>
      </details>
    </header>
  )
}
