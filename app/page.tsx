import Link from "next/link"
import { ArrowRight, Award, FileBadge } from "lucide-react"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { ProjectCard } from "@/components/portfolio/project-card"
import { Portrait } from "@/components/portfolio/portrait"
import { ScoreGrid } from "@/components/portfolio/score-grid"
import { RecognitionCard } from "@/components/portfolio/recognition-card"
import { projects, recognition } from "@/lib/portfolio-data"

export default function HomePage() {
  return <main>
    <section className="hero shell"><SiteHeader/><div className="hero-grid premium-hero"><div className="hero-copy"><p className="eyebrow">Computer Science · Human-Centered AI · Creative Technology</p><h1>Saahas<br/><em>Ludhra.</em></h1><p className="hero-deck">I am a student builder who likes making thoughtful technology feel clear, useful, and human.</p><div className="hero-actions"><Link className="primary-link" href="/projects">Explore selected work <ArrowRight/></Link><Link className="text-link" href="/recognition">View recognition <span>↗</span></Link></div></div><Portrait/></div><div className="hero-bottom"><span>Based in India</span><span>16-year-old student builder</span><span>Portfolio / 2026</span></div></section>
    <section className="academic-strip"><div className="shell academic-layout"><div><p className="section-index">01 / Academic profile</p><h2>Strong foundations.<br/><em>Used in real projects.</em></h2></div><ScoreGrid compact/></div></section>
    {/* <section className="home-intro shell"><p className="section-index">02 / Perspective</p><div><h2>I build to understand.</h2><p>Whether it&apos;s a voice AI platform, an operating-system interface, or a neural-network simulation, each project begins with a question and becomes a way to learn deeply.</p><Link className="text-link" href="/about">Read my story <span>↗</span></Link></div></section> */}
    <section className="home-work shell"><div className="section-heading"><div><p className="section-index">03 / Selected work</p><h2>Projects shaped by<br/><em>curiosity.</em></h2></div><p>These are projects I made to understand a problem better, try a new idea, or make something I could not find elsewhere.</p></div><ProjectCard project={projects[0]} featured/><div className="project-grid compact-projects">{projects.slice(1,3).map(project=><ProjectCard key={project.slug} project={project}/>)}</div><Link className="primary-link section-action" href="/projects">View all five projects <ArrowRight/></Link></section>
    <section className="credibility-section"><div className="shell"><div className="section-heading light-heading"><div><p className="section-index">04 / Evidence of work</p><h2>Recognition earned<br/><em>through building.</em></h2></div><div className="credibility-actions"><Link href="/achievements"><Award/>Achievements & recognition <ArrowRight/></Link><Link href="/recognition"><FileBadge/>Official documents <ArrowRight/></Link></div></div><div className="recognition-preview-grid">{recognition.map(item=><RecognitionCard key={item.slug} item={item} compact/>)}</div></div></section>
    <section className="home-path shell"><div><p className="section-index">05 / Continue</p><h2>Explore the full<br/><em>portfolio.</em></h2></div><div className="path-links"><Link href="/achievements"><span>Achievements & recognition</span><ArrowRight/></Link><Link href="/journey"><span>Journey & technical toolkit</span><ArrowRight/></Link><Link href="/contact"><span>Contact & profiles</span><ArrowRight/></Link></div></section>
    <SiteFooter/>
  </main>
}
