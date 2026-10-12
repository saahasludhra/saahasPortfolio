import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { ProjectVisual } from "@/components/portfolio/project-visual"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { getProject, projects } from "@/lib/portfolio-data"

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: `${project.name} — Saahas Ludhra`, description: project.summary }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  return (
    <main>
      <SiteHeader inner />
      <article className="case shell">
        <Link className="back-link" href="/projects"><ArrowLeft /> Back to projects</Link>
        <header className="case-header">
          <div><p className="eyebrow">Project {project.index} · {project.role}</p><h1>{project.name}</h1><p className="case-tagline">{project.tagline}</p></div>
          <p className="case-summary">{project.summary}</p>
        </header>
        <ProjectVisual project={project} />
        <div className="case-intro">
          <div><span>Role</span><p>{project.role}</p></div>
          <div><span>Focus</span><p>{project.technologies.join(" · ")}</p></div>
          <div><span>Status</span><p>Student project</p></div>
        </div>
        <div className="case-body">
          <aside><p>Inside the project</p>{["Why I built it","Problem","Approach","How it works","Key features","Reflection"].map(x=><span key={x}>{x}</span>)}</aside>
          <div className="case-sections">
            <section><span>01</span><h2>Why I built it</h2><p>{project.why}</p></section>
            <section><span>02</span><h2>The problem</h2><p>{project.problem}</p></section>
            <section><span>03</span><h2>The approach</h2><p>{project.approach}</p></section>
            <section><span>04</span><h2>How it works</h2><p>{project.howItWorks}</p></section>
            <section><span>05</span><h2>Key features</h2><ul>{project.features.map(feature=><li key={feature}>{feature}</li>)}</ul></section>
            <section><span>06</span><h2>Reflection</h2><div className="reflection-grid"><div><h3>Challenge</h3><p>{project.challenge}</p></div><div><h3>What I learned</h3><p>{project.learned}</p></div><div><h3>Future improvements</h3><p>{project.future}</p></div></div></section>
          </div>
        </div>
        <footer className="case-footer">
          <div><p className="eyebrow">Next step</p><h2>{project.liveUrl ? "Explore the project." : "Return to the collection."}</h2></div>
          {project.liveUrl ? <a className="primary-link" href={project.liveUrl} target="_blank" rel="noreferrer">Open live project <ArrowUpRight /></a> : <Link className="primary-link" href="/projects">View all projects <ArrowUpRight /></Link>}
        </footer>
      </article>
      <SiteFooter />
    </main>
  )
}
