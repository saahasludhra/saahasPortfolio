import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div><Link className="monogram" href="/">SL<span>.</span></Link><p>Student, builder, and someone who learns by making.</p></div>
      <nav aria-label="Footer navigation">
        <Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/achievements">Achievements & Recognition</Link><Link href="/journey">Journey</Link><Link href="/contact">Contact</Link>
      </nav>
      <p className="copyright">© {new Date().getFullYear()} Saahas Ludhra</p>
    </footer>
  )
}
