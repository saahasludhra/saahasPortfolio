import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { PageHeading } from "@/components/portfolio/page-heading"
import { skillGroups } from "@/lib/portfolio-data"

export const metadata: Metadata = { title: "Journey — Saahas Ludhra", description: "Saahas Ludhra's learning journey, milestones, current explorations, and technical skills." }
const milestones = [
  {year:"2024–2027",title:"Army Public School (APS) Wellington",body:"Current school journey in Coonoor, building a broad academic foundation while pursuing computing, physics, mathematics, and hands-on technology projects."},
  {year:"2023–2025",title:"Academic foundations",body:"Earned a 4 in AP Computer Science A, AP Physics C: E&M, and AP Calculus BC, alongside a 1540 SAT score recorded in September 2025."},
  {year:"2025",title:"Digital marketing certification",body:"Completed The Fundamentals of Digital Marketing through Google Digital Academy (Skillshop), issued April 2025."},
  {year:"2024–2026",title:"Building human-centered software",body:"Developed SpeakUp Yuva AI, CodeVerse OS, EchoTab, Neural Arena, and Quantum Canvas while exploring voice AI, interactive learning tools, browser productivity, neural-network visualisation, and creative computing."},
  {year:"2026",title:"Recognition through applied work",body:"SpeakUp Yuva AI received a confirmed India Book of Records entry, and the project was supported by a professional recommendation from the District Mental Health Programme, The Nilgiris."},
  {year:"Now",title:"Continuing the journey",body:"Learning through increasingly thoughtful projects at the intersection of computer science, AI, design, wellbeing, and interaction."},
]

export default function JourneyPage() {
  return <main><SiteHeader inner/><PageHeading eyebrow="04 / Journey" title="How I got" italic="here." intro="School, exams, a certification, a few ambitious projects, and plenty of learning as I went. This is the path behind the portfolio."/>
    <section className="timeline-section shell"><div className="timeline-intro"><p className="section-index">Milestones</p><h2>A path still<br/><em>in motion.</em></h2></div><div className="timeline">{milestones.map((item,index)=><article key={item.year}><div className="timeline-marker"><span>{String(index+1).padStart(2,"0")}</span></div><div><p className="eyebrow">{item.year}</p><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div></section>
    <section className="skills-page shell" id="skills"><div className="section-heading"><div><p className="section-index">Toolkit</p><h2>What I use to<br/><em>make things.</em></h2></div><p>These are the languages, tools, and areas I have been learning through classes and projects. The list is still growing.</p></div><div className="skills-matrix">{skillGroups.map((group,index)=><article key={group.label}><span>{String(index+1).padStart(2,"0")}</span><h3>{group.label}</h3><div>{group.items.map(item=><p key={item}>{item}</p>)}</div></article>)}</div></section>
    <section className="page-cta shell"><p className="eyebrow">Continue exploring</p><h2>See the skills<br/><em>in context.</em></h2><Link className="primary-link" href="/projects">Browse projects <ArrowRight/></Link></section><SiteFooter/></main>
}
