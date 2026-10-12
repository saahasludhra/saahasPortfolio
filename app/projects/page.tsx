import type { Metadata } from "next"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { PageHeading } from "@/components/portfolio/page-heading"
import { ProjectCard } from "@/components/portfolio/project-card"
import { projects } from "@/lib/portfolio-data"

export const metadata: Metadata = { title: "Projects — Saahas Ludhra", description: "Selected projects by Saahas Ludhra across AI, interactive software, UI/UX, and creative coding." }

export default function ProjectsPage() {
  return <main><SiteHeader inner/><PageHeading eyebrow="02 / Projects" title="Things I made" italic="to learn." intro="Five projects across AI, systems, browser tools, simulation, and creative coding. Each one started with a question I wanted to answer by building something real."/>
    <section className="projects-index shell"><div className="project-count"><span>Selected archive</span><strong>05</strong><span>projects</span></div><ProjectCard project={projects[0]} featured/><div className="project-grid">{projects.slice(1).map(project=><ProjectCard key={project.slug} project={project}/>)}</div></section><SiteFooter/></main>
}
