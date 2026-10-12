import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Globe2, Mail } from "lucide-react"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { academicScores, projects, recognition, skillGroups } from "@/lib/portfolio-data"

export const metadata: Metadata = { title: "Resume — Saahas Ludhra", description: "Resume information for Saahas Ludhra, a student builder exploring computer science, AI, and interactive software." }

export default function ResumePage() {
  return <main><SiteHeader inner/><section className="resume-page shell">
    <header className="resume-header"><div><p className="eyebrow">05 / Resume</p><h1>Saahas<br/><em>Ludhra.</em></h1><p className="resume-role">Computer Science student · Student builder · Human-centered AI</p></div><div className="resume-contact"><a href="mailto:saahasludhra@gmail.com"><Mail/> saahasludhra@gmail.com</a><a href="https://www.linkedin.com/in/saahas-ludhra/" target="_blank" rel="noreferrer"><Globe2/> linkedin.com/in/saahas-ludhra</a><span>Coonoor, Tamil Nadu, India</span></div></header>
    <section className="resume-summary"><p className="section-index">Profile</p><p>I am a student builder exploring computer science through thoughtful software, human-centered AI, and interactive experiences. My work spans voice AI, browser tools, algorithm visualisation, neural-network simulations, and creative computing.</p></section>
    <div className="resume-grid"><div>
      <section className="resume-section"><p className="section-index">Education</p><article><div><h2>Army Public School (APS) Wellington</h2><p>School education · Coonoor, Tamil Nadu</p></div><span>2024–2027</span></article></section>
      <section className="resume-section"><p className="section-index">Academic record</p><div className="resume-score-list">{academicScores.map(score=><article key={score.label}><strong>{score.value}</strong><div><h3>{score.label}</h3><p>Academic credential in the portfolio profile.</p></div></article>)}</div></section>
      <section className="resume-section"><p className="section-index">Certification</p><article><div><h2>The Fundamentals of Digital Marketing</h2><p>Google Digital Academy (Skillshop)</p></div><span>Apr 2025</span></article></section>
      <section className="resume-section"><p className="section-index">Experience</p><article><div><h2>CRY — Child Rights and You</h2><p>Experience listed on LinkedIn. Role and dates are not specified in the available public profile.</p></div></article></section>
    </div><div>
      <section className="resume-section"><p className="section-index">Technical toolkit</p><div className="resume-skills">{skillGroups.map(group=><article key={group.label}><h3>{group.label}</h3><p>{group.items.join(" · ")}</p></article>)}</div></section>
      <section className="resume-section"><p className="section-index">Selected projects</p><div className="resume-projects">{projects.map(project=><Link key={project.slug} href={`/projects/${project.slug}`}><div><span>{project.index}</span><h3>{project.name}</h3><p>{project.summary}</p></div><ArrowRight/></Link>)}</div></section>
      <section className="resume-section"><p className="section-index">Recognition</p><div className="resume-recognition">{recognition.map(item=><Link key={item.slug} href={`/recognition/${item.slug}`}><div><h3>{item.organization}</h3><p>{item.title}</p></div><ArrowRight/></Link>)}</div></section>
    </div></div>
    <footer className="resume-footer"><Link className="primary-link" href="/contact">Get in touch <ArrowRight/></Link><Link className="text-link" href="/"><ArrowLeft/> Return home</Link></footer>
  </section><SiteFooter/></main>
}
