import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, FolderOpen, Mail, Globe2 } from "lucide-react"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { PageHeading } from "@/components/portfolio/page-heading"

export const metadata: Metadata = { title: "Contact — Saahas Ludhra", description: "Contact and collaboration information for Saahas Ludhra." }

export default function ContactPage() {
  return <main><SiteHeader inner/><PageHeading eyebrow="05 / Contact" title="Want to talk" italic="about an idea?" intro="I am always happy to talk about projects, learning, or ways technology can make something clearer or more useful."/>
    <section className="contact-options shell"><div className="contact-note"><span className="status-dot"/><div><p className="eyebrow">Current status</p><h2>Open to meaningful<br/><em>opportunities.</em></h2><p>For project conversations, collaboration, or learning opportunities, email is the most direct route. Social links below are included for easy access.</p><a className="contact-email" href="mailto:saahasludhra@gmail.com"><Mail/> saahasludhra@gmail.com</a></div></div><div className="contact-links"><Link href="/projects"><FolderOpen/><div><span>Explore the work</span><small>Five detailed case studies</small></div><ArrowRight/></Link><Link href="/resume"><FileText/><div><span>Resume information</span><small>Background and availability</small></div><ArrowRight/></Link><a href="https://www.linkedin.com/in/saahas-ludhra/" target="_blank" rel="noreferrer"><Globe2/><div><span>LinkedIn</span><small>Professional profile</small></div><ArrowRight/></a></div><div className="social-note"><span>Social profiles</span><div className="social-links"><a href="http://www.youtube.com/@SaahasLudhra" target="_blank" rel="noreferrer">YouTube</a><a href="https://www.instagram.com/saahasludhra" target="_blank" rel="noreferrer">Instagram</a><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></div></div></section><SiteFooter/></main>
}
