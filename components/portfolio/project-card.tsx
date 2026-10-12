import Link from "next/link"
import type { Project } from "@/lib/portfolio-data"
import { ProjectVisual } from "./project-visual"

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "project-featured" : ""}`}>
      <Link href={`/projects/${project.slug}`} className="card-visual-link" aria-label={`Read the ${project.name} case study`}><ProjectVisual project={project} compact={!featured} /></Link>
      <div className="project-card-copy">
        <div className="project-meta"><span>{project.index}</span><span>{project.technologies.slice(0,2).join(" · ")}</span></div>
        <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
        <p className="tagline">{project.tagline}</p>
        <p>{project.summary}</p>
        <Link className="text-link" href={`/projects/${project.slug}`}>View case study <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  )
}
