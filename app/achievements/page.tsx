import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { RecognitionCard } from "@/components/portfolio/recognition-card"
import { AchievementCard } from "@/components/portfolio/achievement-card"
import { PageHeading } from "@/components/portfolio/page-heading"
import { ScoreGrid } from "@/components/portfolio/score-grid"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { SiteHeader } from "@/components/portfolio/site-header"
import { achievements, recognition } from "@/lib/portfolio-data"

export const metadata: Metadata = { title: "Achievements & Recognition — Saahas Ludhra", description: "Academic achievements, project milestones, and formal recognition for Saahas Ludhra." }

export default function AchievementsPage() {
  return <main><SiteHeader inner/><PageHeading eyebrow="03 / Achievements & Recognition" title="What I have" italic="worked toward." intro="A mix of academic results, things I have built, and formal recognition. It is less a list of trophies and more a record of where the work has taken me."/>
    <section className="scores-section shell"><div className="section-heading"><div><p className="section-index">Academic profile</p><h2>What I learned<br/><em>in the classroom.</em></h2></div><p>These scores give some context for the academic side of my work. The projects show how I have tried to use those foundations in practice.</p></div><ScoreGrid/></section>
    <section className="badges-section"><div className="shell"><div className="section-heading light-heading"><div><p className="section-index">Project milestones</p><h2>Built, explored,<br/><em>and shipped.</em></h2></div><p>Concrete technical milestones and sustained areas of practice from the portfolio.</p></div><div className="achievement-grid">{achievements.map((achievement,index)=><AchievementCard key={achievement.title} achievement={achievement} index={index}/>)}</div></div></section>
    <section className="recognition-index shell"><div className="recognition-note"><div><p className="eyebrow">Formal record</p><h2>Work seen.<br/><em>Impact noted.</em></h2><p>Here are the two formal documents connected to SpeakUp Yuva AI, with their status explained clearly and without overstating what they mean.</p></div></div><div className="recognition-stack">{recognition.map(item=><RecognitionCard key={item.slug} item={item}/>)}</div></section>
    <section className="page-cta shell"><p className="eyebrow">Continue exploring</p><h2>See the work<br/><em>behind the record.</em></h2><Link className="primary-link" href="/projects/speakup-yuva-ai">SpeakUp Yuva AI <ArrowRight/></Link></section><SiteFooter/></main>
}
