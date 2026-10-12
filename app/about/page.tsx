import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Brain, Compass, Layers } from "lucide-react"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { PageHeading } from "@/components/portfolio/page-heading"
import { ScoreGrid } from "@/components/portfolio/score-grid"
import { Portrait } from "@/components/portfolio/portrait"

export const metadata: Metadata = { title: "About — Saahas Ludhra", description: "Learn about Saahas Ludhra, a student builder exploring computer science, AI, design, and interactive software." }

export default function AboutPage() {
  return <main><SiteHeader inner/><PageHeading eyebrow="01 / About" title="Curious by nature." italic="Builder by practice." intro="I use code as a way to investigate ideas, understand systems, and turn abstract questions into things people can interact with."/>
    <section className="story-section shell about-profile"><div><p className="section-index">A little context</p><Portrait/></div><div className="story-copy"><p className="story-lead">I&apos;m Saahas, a student at Army Public School (APS) Wellington in Coonoor, exploring computer science through projects that sit between engineering and design.</p><p>My curiosity began with Java and Python and grew into a wider interest in human-centered technology: software that is technically thoughtful, but also considerate of the people using it.</p><p>My work spans voice AI, browser productivity tools, algorithm visualisation, neural-network simulations, and generative art. Each project is an experiment in learning something new and expressing it clearly.</p><p>Outside formal classes, I learn by building. I am especially interested in intelligent interfaces, ethical AI, and making complex ideas easier to explore through interaction.</p></div></section>
    <section className="scores-section shell"><div className="section-heading"><div><p className="section-index">Academic record</p><h2>Strong foundations,<br/><em>applied with intent.</em></h2></div><p>Academic results sit alongside project-led learning across computing, mathematics, physics, and communication.</p></div><ScoreGrid/></section>
    <section className="story-section shell"><p className="section-index">Interests & direction</p><div className="story-copy"><p>I care about empathetic, human-centered AI and the design of intelligent interfaces. SpeakUp Yuva AI came from that interest: a voice assistant designed to offer a calm, judgment-free first place to speak.</p><p>I am also drawn to React, Angular, Java, Python, UI/UX, and interactive software. I am still a student rather than an expert, and that is exactly why each project is an invitation to keep learning.</p></div></section>
    <section className="principles shell"><div className="section-heading"><div><p className="section-index">How I work</p><h2>Three ideas guide<br/><em>the process.</em></h2></div></div><div className="principle-grid"><article><Compass/><span>01</span><h3>Follow the question</h3><p>Start with genuine curiosity, then use the project to find a more useful answer.</p></article><article><Layers/><span>02</span><h3>Build the whole idea</h3><p>Think across logic, interaction, and visual communication rather than treating them separately.</p></article><article><Brain/><span>03</span><h3>Learn by making</h3><p>Move beyond tutorials by building, testing, revising, and documenting what changed.</p></article></div></section>
    <section className="page-cta shell"><p className="eyebrow">Next chapter</p><h2>See what curiosity<br/><em>turned into.</em></h2><Link className="primary-link" href="/projects">Explore projects <ArrowRight/></Link></section><SiteFooter/></main>
}
